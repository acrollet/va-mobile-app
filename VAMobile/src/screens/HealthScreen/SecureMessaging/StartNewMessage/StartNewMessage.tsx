import { InteractionManager, Pressable, ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import _ from 'underscore'

import {
  AlertBox,
  BackButton,
  Box,
  ButtonTypesConstants,
  CollapsibleView,
  ErrorComponent,
  FieldType,
  FormFieldType,
  FormWrapper,
  FullScreenSubtask,
  LoadingComponent,
  MessageAlert,
  PickerItem,
  SaveButton,
  TextArea,
  VAButton,
} from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import {
  CategoryTypeFields,
  CategoryTypes,
  ScreenIDTypesConstants,
  SecureMessagingFormData,
  SecureMessagingSystemFolderIdConstants,
  SecureMessagingTabTypesConstants,
} from 'store/api/types'
import { Events } from 'constants/analytics'
import { FolderNameTypeConstants, FormHeaderTypeConstants, PREPOPULATE_SIGNATURE } from 'constants/secureMessaging'
import { HealthStackParamList } from 'screens/HealthScreen/HealthStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import {
  SecureMessagingState,
  getMessageRecipients,
  getMessageSignature,
  resetHasLoadedRecipients,
  resetSendMessageComplete,
  resetSendMessageFailed,
  saveDraft,
  sendMessage,
  updateSecureMessagingTab,
} from 'store/slices'
import { SnackbarMessages } from 'components/SnackBar'
import { SubjectLengthValidationFn, getStartNewMessageCategoryPickerOptions } from 'utils/secureMessaging'
import { logAnalyticsEvent } from 'utils/analytics'
import {
  useAppDispatch,
  useAttachments,
  useBeforeNavBackListener,
  useError,
  useMessageWithSignature,
  useRouteNavigation,
  useTheme,
  useValidateMessageWithSignature,
} from 'utils/hooks'
import { useComposeCancelConfirmation } from '../CancelConfirmations/ComposeCancelConfirmation'
import { useSelector } from 'react-redux'

type StartNewMessageProps = StackScreenProps<HealthStackParamList, 'StartNewMessage'>

const StartNewMessage: FC<StartNewMessageProps> = ({ navigation, route }) => {
  const { t } = useTranslation(NAMESPACE.HEALTH)
  const { t: tc } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const navigateTo = useRouteNavigation()
  const dispatch = useAppDispatch()

  const snackbarMessages: SnackbarMessages = {
    successMsg: t('secureMessaging.draft.saved'),
    errorMsg: t('secureMessaging.draft.saved.error'),
  }

  const snackbarSentMessages: SnackbarMessages = {
    successMsg: t('secureMessaging.startNewMessage.sent'),
    errorMsg: t('secureMessaging.startNewMessage.sent.error'),
  }

  const { sendingMessage, sendMessageComplete, savedDraftID, recipients, hasLoadedRecipients, saveDraftComplete, savingDraft, loadingSignature, signature } = useSelector<
    RootState,
    SecureMessagingState
  >((state) => state.secureMessaging)
  const { attachmentFileToAdd, saveDraftConfirmFailed } = route.params

  const [to, setTo] = useState('')
  const [category, setCategory] = useState('')
  const [subject, setSubject] = useState('')
  const [attachmentsList, addAttachment, removeAttachment] = useAttachments()
  const [message, setMessage] = useMessageWithSignature()
  const validateMessage = useValidateMessageWithSignature()
  const [onSendClicked, setOnSendClicked] = useState(false)
  const [onSaveDraftClicked, setOnSaveDraftClicked] = useState(false)
  const [formContainsError, setFormContainsError] = useState(false)
  const [resetErrors, setResetErrors] = useState(false)
  const [errorList, setErrorList] = useState<{ [key: number]: string }>([])
  const [isTransitionComplete, setIsTransitionComplete] = React.useState(false)
  const scrollViewRef = useRef<ScrollView>(null)

  const [isDiscarded, composeCancelConfirmation] = useComposeCancelConfirmation()

  useEffect(() => {
    dispatch(getMessageRecipients(ScreenIDTypesConstants.SECURE_MESSAGING_COMPOSE_MESSAGE_SCREEN_ID))

    if (PREPOPULATE_SIGNATURE && !signature) {
      dispatch(getMessageSignature())
    }
    InteractionManager.runAfterInteractions(() => {
      setIsTransitionComplete(true)
    })
  }, [dispatch, signature])

  const noRecipientsReceived = !recipients || recipients.length === 0
  const noProviderError = noRecipientsReceived && hasLoadedRecipients

  const goToCancel = () => {
    const messageData = { recipient_id: parseInt(to, 10), category: category as CategoryTypes, body: message, subject } as SecureMessagingFormData
    composeCancelConfirmation({ origin: FormHeaderTypeConstants.compose, draftMessageID: savedDraftID, messageData, isFormValid })
  }
  useEffect(() => {
    if (!saveDraftConfirmFailed) {
      return
    }
    setOnSaveDraftClicked(true)
    setOnSendClicked(true)
  }, [saveDraftConfirmFailed])

  /**
   * Intercept navigation action before leaving the screen, used the handle OS swipe/hardware back behavior
   */
  useBeforeNavBackListener(navigation, (e) => {
    if (isDiscarded || saveDraftComplete || sendMessageComplete) {
      return
    } else if (!noProviderError && !isFormBlank) {
      e.preventDefault()
      goToCancel()
    } else {
      navigation.goBack
    }
  })

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props): ReactNode => <BackButton onPress={navigation.goBack} canGoBack={props.canGoBack} label={BackButtonLabelConstants.cancel} showCarat={false} />,
      headerRight: () =>
        !noRecipientsReceived && (
          <SaveButton
            onSave={() => {
              setOnSaveDraftClicked(true)
              setOnSendClicked(true)
            }}
            disabled={false}
            a11yHint={t('secureMessaging.saveDraft.a11yHint')}
          />
        ),
    })
  })

  useEffect(() => {
    if (attachmentFileToAdd === undefined) {
      return
    }
    // if a file was just added, update attachmentsList and clear the route params for attachmentFileToAdd
    if (!_.isEmpty(attachmentFileToAdd) && !attachmentsList.includes(attachmentFileToAdd)) {
      addAttachment(attachmentFileToAdd)
      navigation.setParams({ attachmentFileToAdd: {} })
    }
  }, [attachmentFileToAdd, attachmentsList, addAttachment, navigation])

  useEffect(() => {
    if (saveDraftComplete) {
      dispatch(updateSecureMessagingTab(SecureMessagingTabTypesConstants.FOLDERS))
      navigation.navigate('SecureMessaging')
      navigation.navigate('FolderMessages', {
        folderID: SecureMessagingSystemFolderIdConstants.DRAFTS,
        folderName: FolderNameTypeConstants.drafts,
        draftSaved: true,
      })
    }
  }, [saveDraftComplete, navigation, dispatch])

  useEffect(() => {
    // SendMessageComplete variable is tied to send message dispatch function. Once message is sent we want to set that variable to false
    if (sendMessageComplete) {
      dispatch(resetSendMessageComplete())
      dispatch(resetHasLoadedRecipients())
      navigation.navigate('SecureMessaging')
    }
  }, [sendMessageComplete, dispatch, navigation])

  if (useError(ScreenIDTypesConstants.SECURE_MESSAGING_COMPOSE_MESSAGE_SCREEN_ID)) {
    return (
      <FullScreenSubtask title={t('secureMessaging.startNewMessage')} leftButtonText={tc('cancel')}>
        <ErrorComponent screenID={ScreenIDTypesConstants.SECURE_MESSAGING_COMPOSE_MESSAGE_SCREEN_ID} />
      </FullScreenSubtask>
    )
  }

  const isFormBlank = !(to || category || subject || attachmentsList.length || validateMessage(message))
  const isFormValid = !!(to && category && validateMessage(message) && (category !== CategoryTypeFields.other || subject))

  if (!hasLoadedRecipients || !isTransitionComplete || savingDraft || loadingSignature || isDiscarded) {
    const text = savingDraft
      ? t('secureMessaging.formMessage.saveDraft.loading')
      : isDiscarded
      ? t('secureMessaging.deleteDraft.loading')
      : t('secureMessaging.formMessage.startNewMessage.loading')
    return (
      <FullScreenSubtask leftButtonText={tc('cancel')} onLeftButtonPress={navigation.goBack}>
        <LoadingComponent text={text} />
      </FullScreenSubtask>
    )
  }

  if (sendingMessage) {
    return (
      <FullScreenSubtask leftButtonText={tc('cancel')} onLeftButtonPress={navigation.goBack}>
        <LoadingComponent text={t('secureMessaging.formMessage.send.loading')} />
      </FullScreenSubtask>
    )
  }

  const isSetToGeneral = (text: string): boolean => {
    return text === CategoryTypeFields.other // Value of option associated with picker label 'General'
  }

  const onCategoryChange = (newCategory: string): void => {
    logAnalyticsEvent(Events.vama_sm_change_category(newCategory as CategoryTypes, category as CategoryTypes))
    setCategory(newCategory)

    // Only "General" category requires a subject, reset errors changing away to clear potential subject error
    if (isSetToGeneral(category) && !isSetToGeneral(newCategory)) {
      setResetErrors(true)
    }
  }

  const getToPickerOptions = (): Array<PickerItem> => {
    return (recipients || []).map((recipient) => {
      return {
        label: recipient.attributes.name,
        value: recipient.id,
      }
    })
  }

  const onAddFiles = navigateTo('Attachments', { origin: FormHeaderTypeConstants.compose, attachmentsList })

  const formFieldsList: Array<FormFieldType<unknown>> = [
    {
      fieldType: FieldType.Picker,
      fieldProps: {
        labelKey: 'health:secureMessaging.formMessage.to',
        selectedValue: to,
        onSelectionChange: setTo,
        pickerOptions: getToPickerOptions(),
        includeBlankPlaceholder: true,
        isRequiredField: true,
      },
      fieldErrorMessage: t('secureMessaging.startNewMessage.to.fieldError'),
    },
    {
      fieldType: FieldType.Picker,
      fieldProps: {
        labelKey: 'health:secureMessaging.startNewMessage.category',
        selectedValue: category,
        onSelectionChange: onCategoryChange,
        pickerOptions: getStartNewMessageCategoryPickerOptions(t),
        includeBlankPlaceholder: true,
        isRequiredField: true,
      },
      fieldErrorMessage: t('secureMessaging.startNewMessage.category.fieldError'),
    },
    {
      fieldType: FieldType.TextInput,
      fieldProps: {
        inputType: 'none',
        labelKey: 'health:secureMessaging.startNewMessage.subject',
        value: subject,
        onChange: setSubject,
        helperTextKey: 'health:secureMessaging.startNewMessage.subject.helperText',
        isRequiredField: category === CategoryTypeFields.other,
      },
      fieldErrorMessage: t('secureMessaging.startNewMessage.subject.fieldEmpty'),
      validationList: [
        {
          validationFunction: SubjectLengthValidationFn(subject),
          validationFunctionErrorMessage: t('secureMessaging.startNewMessage.subject.tooManyCharacters'),
        },
      ],
    },
    {
      fieldType: FieldType.FormAttachmentsList,
      fieldProps: {
        removeOnPress: removeAttachment,
        largeButtonProps:
          attachmentsList.length < theme.dimensions.maxNumMessageAttachments
            ? {
                label: t('secureMessaging.formMessage.addFiles'),
                a11yHint: t('secureMessaging.formMessage.addFiles.a11yHint'),
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
        labelKey: 'health:secureMessaging.formMessage.message',
        isRequiredField: true,
        isTextArea: true,
        setInputCursorToBeginning: true,
      },
      fieldErrorMessage: t('secureMessaging.formMessage.message.fieldError'),
    },
  ]

  const onGoToInbox = (): void => {
    dispatch(resetSendMessageFailed())
    dispatch(updateSecureMessagingTab(SecureMessagingTabTypesConstants.INBOX))
    navigation.navigate('SecureMessaging')
  }

  const onMessageSendOrSave = (): void => {
    dispatch(resetSendMessageFailed())
    const messageData = {
      recipient_id: parseInt(to, 10),
      category: category as CategoryTypes,
      body: message,
      subject,
    } as SecureMessagingFormData

    if (savedDraftID) {
      messageData.draft_id = savedDraftID
    }
    if (onSaveDraftClicked) {
      dispatch(saveDraft(messageData, snackbarMessages, savedDraftID))
    } else {
      dispatch(sendMessage(messageData, snackbarSentMessages, attachmentsList))
    }
  }

  const renderContent = (): ReactNode => {
    if (noProviderError) {
      return (
        <AlertBox
          title={t('secureMessaging.startNewMessage.noMatchWithProvider')}
          text={t('secureMessaging.startNewMessage.bothYouAndProviderMustBeEnrolled')}
          textA11yLabel={t('secureMessaging.startNewMessage.bothYouAndProviderMustBeEnrolledA11yLabel')}
          border="error">
          <VAButton label={t('secureMessaging.goToInbox')} onPress={onGoToInbox} buttonType={ButtonTypesConstants.buttonPrimary} />
        </AlertBox>
      )
    }

    return (
      <Box>
        <MessageAlert
          hasValidationError={formContainsError}
          saveDraftAttempted={onSaveDraftClicked}
          scrollViewRef={scrollViewRef}
          focusOnError={onSendClicked}
          errorList={errorList}
        />
        <TextArea>
          <FormWrapper
            fieldsList={formFieldsList}
            onSave={onMessageSendOrSave}
            onSaveClicked={onSendClicked}
            setOnSaveClicked={setOnSendClicked}
            setFormContainsError={setFormContainsError}
            resetErrors={resetErrors}
            setResetErrors={setResetErrors}
            setErrorList={setErrorList}
          />
          <Box mt={theme.dimensions.standardMarginBetween}>
            <Pressable
              onPress={navigateTo('ReplyHelp')}
              accessibilityRole={'button'}
              accessibilityLabel={tc('secureMessaging.replyHelp.onlyUseMessages')}
              importantForAccessibility={'yes'}>
              <Box pointerEvents={'none'} accessible={false} importantForAccessibility={'no-hide-descendants'}>
                <CollapsibleView text={tc('secureMessaging.replyHelp.onlyUseMessages')} showInTextArea={false} />
              </Box>
            </Pressable>
          </Box>
          <Box mt={theme.dimensions.standardMarginBetween}>
            <VAButton
              label={t('secureMessaging.formMessage.send')}
              onPress={() => {
                setOnSendClicked(true)
                setOnSaveDraftClicked(false)
              }}
              a11yHint={t('secureMessaging.formMessage.send.a11yHint')}
              buttonType={ButtonTypesConstants.buttonPrimary}
            />
          </Box>
        </TextArea>
      </Box>
    )
  }

  const rightButtonProps = noProviderError
    ? undefined
    : {
        rightButtonText: tc('save'),
        onRightButtonPress: () => {
          setOnSaveDraftClicked(true)
          setOnSendClicked(true)
        },
      }

  return (
    <FullScreenSubtask
      scrollViewRef={scrollViewRef}
      title={t('secureMessaging.startNewMessage')}
      leftButtonText={tc('cancel')}
      onLeftButtonPress={navigation.goBack}
      {...rightButtonProps}
      showCrisisLineCta={true}>
      <Box mb={theme.dimensions.contentMarginBottom}>{renderContent()}</Box>
    </FullScreenSubtask>
  )
}

export default StartNewMessage
