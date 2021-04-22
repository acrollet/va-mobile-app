import React, { FC, ReactNode, useEffect, useState } from 'react'

import { ImagePickerResponse } from 'react-native-image-picker/src/types'
import { StackHeaderLeftButtonProps, StackScreenProps } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'underscore'

import {
  AlertBox,
  BackButton,
  Box,
  ButtonTypesConstants,
  CollapsibleView,
  CrisisLineCta,
  ErrorComponent,
  FieldType,
  FormFieldType,
  FormWrapper,
  LoadingComponent,
  PickerItem,
  TextArea,
  TextView,
  VAButton,
  VAScrollView,
} from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { DocumentPickerResponse } from 'screens/ClaimsScreen/ClaimsStackScreens'
import { HealthStackParamList } from 'screens/HealthScreen/HealthStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { ScreenIDTypesConstants } from 'store/api/types'
import { SecureMessagingState, StoreState } from 'store/reducers'
import { getComposeMessageSubjectPickerOptions } from 'utils/secureMessaging'
import { getMessageRecipients } from 'store/actions'
import { testIdProps } from 'utils/accessibility'
import { useError, useRouteNavigation, useTheme, useTranslation } from 'utils/hooks'

type ComposeMessageProps = StackScreenProps<HealthStackParamList, 'ComposeMessage'>

const ComposeMessage: FC<ComposeMessageProps> = ({ navigation, route }) => {
  const t = useTranslation(NAMESPACE.HEALTH)
  const theme = useTheme()
  const navigateTo = useRouteNavigation()
  const dispatch = useDispatch()

  const { recipients, loadingRecipients } = useSelector<StoreState, SecureMessagingState>((state) => state.secureMessaging)
  const { attachmentFileToAdd, attachmentFileToRemove } = route.params

  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [subjectLine, setSubjectLine] = useState('')
  const [attachmentsList, setAttachmentsList] = useState<Array<ImagePickerResponse | DocumentPickerResponse>>([])
  const [message, setMessage] = useState('')
  const [onSaveClicked, setOnSaveClicked] = useState(false)
  const [formContainsError, setFormContainsError] = useState(false)
  const [resetErrors, setResetErrors] = useState(false)

  useEffect(() => {
    dispatch(getMessageRecipients(ScreenIDTypesConstants.SECURE_MESSAGING_COMPOSE_MESSAGE_SCREEN_ID))
  }, [dispatch])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps): ReactNode => (
        <BackButton onPress={props.onPress} canGoBack={props.canGoBack} label={BackButtonLabelConstants.cancel} showCarat={false} />
      ),
    })
  })

  useEffect(() => {
    // if a file was just added, update attachmentsList and clear the route params for attachmentFileToAdd
    if (!_.isEmpty(attachmentFileToAdd) && !attachmentsList.includes(attachmentFileToAdd)) {
      setAttachmentsList([...attachmentsList, attachmentFileToAdd])
      navigation.setParams({ attachmentFileToAdd: {} })
    }
  }, [attachmentFileToAdd, attachmentsList, setAttachmentsList, navigation])

  useEffect(() => {
    // if a file was just specified to be removed, update attachmentsList and clear the route params for attachmentFileToRemove
    if (!_.isEmpty(attachmentFileToRemove) && attachmentsList.includes(attachmentFileToRemove)) {
      setAttachmentsList(attachmentsList.filter((item) => item !== attachmentFileToRemove))
      navigation.setParams({ attachmentFileToRemove: {} })
    }
  }, [attachmentFileToRemove, attachmentsList, setAttachmentsList, navigation])

  if (useError(ScreenIDTypesConstants.SECURE_MESSAGING_COMPOSE_MESSAGE_SCREEN_ID)) {
    return <ErrorComponent />
  }

  if (loadingRecipients) {
    return <LoadingComponent />
  }

  const removeAttachment = (attachmentFile: ImagePickerResponse | DocumentPickerResponse): void => {
    navigateTo('RemoveAttachment', { attachmentFileToRemove: attachmentFile })()
  }

  const isSetToGeneral = (text: string): boolean => {
    return text === t('secureMessaging.composeMessage.general')
  }

  const onSubjectChange = (newSubject: string): void => {
    setSubject(newSubject)

    // if the subject used to be general and now its not, clear field errors because the subject line is now
    // no longer a required field
    if (isSetToGeneral(subject) && !isSetToGeneral(newSubject)) {
      setResetErrors(true)
    }
  }

  const getToPickerOptions = (): Array<PickerItem> => {
    const resultingPickerItems = [{ label: '', value: '' }]

    _.forEach(recipients || [], (recipient) => {
      resultingPickerItems.push({
        label: recipient.attributes.name,
        value: recipient.id,
      })
    })

    return resultingPickerItems
  }

  const onAddFiles = navigateTo('Attachments', { attachmentsList })

  const formFieldsList: Array<FormFieldType<unknown>> = [
    {
      fieldType: FieldType.Picker,
      fieldProps: {
        labelKey: 'health:secureMessaging.composeMessage.to',
        selectedValue: to,
        onSelectionChange: setTo,
        // TODO: get real picker options for "To" section via api call
        pickerOptions: getToPickerOptions(),
        isRequiredField: true,
      },
      fieldErrorMessage: t('secureMessaging.composeMessage.to.fieldError'),
    },
    {
      fieldType: FieldType.Picker,
      fieldProps: {
        labelKey: 'health:secureMessaging.composeMessage.subject',
        selectedValue: subject,
        onSelectionChange: onSubjectChange,
        pickerOptions: getComposeMessageSubjectPickerOptions(t),
        isRequiredField: true,
      },
      fieldErrorMessage: t('secureMessaging.composeMessage.subject.fieldError'),
    },
    {
      fieldType: FieldType.TextInput,
      fieldProps: {
        inputType: 'none',
        labelKey: 'health:secureMessaging.composeMessage.subjectLine',
        value: subjectLine,
        onChange: setSubjectLine,
        helperTextKey: 'health:secureMessaging.composeMessage.subjectLine.helperText',
        maxLength: 50,
        isRequiredField: subject === t('secureMessaging.composeMessage.general'),
      },
      fieldErrorMessage: t('secureMessaging.composeMessage.subjectLine.fieldError'),
    },
    {
      fieldType: FieldType.FormAttachmentsList,
      fieldProps: {
        removeOnPress: removeAttachment,
        largeButtonProps:
          attachmentsList.length < theme.dimensions.maxNumMessageAttachments
            ? {
                label: t('secureMessaging.composeMessage.addFiles'),
                a11yHint: t('secureMessaging.composeMessage.addFiles.a11yHint'),
                onPress: onAddFiles,
              }
            : undefined,
        attachmentsList,
      },
    },
    {
      fieldType: FieldType.TextInput,
      fieldProps: {
        inputType: 'none',
        value: message,
        onChange: setMessage,
        labelKey: 'health:secureMessaging.composeMessage.message',
        isRequiredField: true,
        isTextArea: true,
      },
      fieldErrorMessage: t('secureMessaging.composeMessage.message.fieldError'),
    },
  ]

  const onCrisisLine = navigateTo('VeteransCrisisLine')

  const onMessageSend = (): void => {}

  return (
    <VAScrollView {...testIdProps('Compose-message-page')}>
      <CrisisLineCta onPress={onCrisisLine} />
      <Box mb={theme.dimensions.contentMarginBottom}>
        {formContainsError && (
          <Box mx={theme.dimensions.gutter} mb={theme.dimensions.standardMarginBetween}>
            <AlertBox title={t('secureMessaging.composeMessage.checkYourMessage')} border="error" background="noCardBackground" />
          </Box>
        )}
        <Box mb={theme.dimensions.standardMarginBetween} mx={theme.dimensions.gutter}>
          <CollapsibleView
            text={t('secureMessaging.composeMessage.whenWillIGetAReply')}
            showInTextArea={false}
            a11yHint={t('secureMessaging.composeMessage.whenWillIGetAReplyA11yHint')}>
            <Box {...testIdProps(t('secureMessaging.composeMessage.threeDaysToReceiveResponseA11yLabel'))} mt={theme.dimensions.condensedMarginBetween} accessible={true}>
              <TextView variant="MobileBody">{t('secureMessaging.composeMessage.threeDaysToReceiveResponse')}</TextView>
            </Box>
            <Box {...testIdProps(t('secureMessaging.composeMessage.pleaseCallHealthProviderA11yLabel'))} mt={theme.dimensions.standardMarginBetween} accessible={true}>
              <TextView>
                <TextView variant="MobileBodyBold">{t('secureMessaging.composeMessage.important')}</TextView>
                <TextView variant="MobileBody">{t('secureMessaging.composeMessage.pleaseCallHealthProvider')}</TextView>
              </TextView>
            </Box>
          </CollapsibleView>
        </Box>
        <TextArea>
          <FormWrapper
            fieldsList={formFieldsList}
            onSave={onMessageSend}
            onSaveClicked={onSaveClicked}
            setOnSaveClicked={setOnSaveClicked}
            setFormContainsError={setFormContainsError}
            resetErrors={resetErrors}
            setResetErrors={setResetErrors}
          />
          <Box mt={theme.dimensions.standardMarginBetween}>
            <VAButton
              label={t('secureMessaging.composeMessage.send')}
              onPress={() => setOnSaveClicked(true)}
              a11yHint={t('secureMessaging.composeMessage.send.a11yHint')}
              buttonType={ButtonTypesConstants.buttonPrimary}
            />
          </Box>
          <Box mt={theme.dimensions.standardMarginBetween}>
            <VAButton
              label={t('common:cancel')}
              onPress={() => navigation.goBack()}
              a11yHint={t('secureMessaging.composeMessage.cancel.a11yHint')}
              buttonType={ButtonTypesConstants.buttonSecondary}
            />
          </Box>
        </TextArea>
      </Box>
    </VAScrollView>
  )
}

export default ComposeMessage
