import { StackHeaderLeftButtonProps } from '@react-navigation/stack'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import { AlertBox, BackButton, Box, ErrorComponent, FieldType, FormFieldType, FormWrapper, LoadingComponent, SaveButton, VAScrollView } from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { NAMESPACE } from 'constants/namespaces'
import { PersonalInformationState, StoreState } from 'store/reducers'
import { RootNavStackParamList } from 'App'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { finishEditEmail, updateEmail } from 'store/actions'
import { testIdProps } from 'utils/accessibility'
import { useError, useTheme, useTranslation } from 'utils/hooks'
import RemoveData from '../../RemoveData'

type EditEmailScreenProps = StackScreenProps<RootNavStackParamList, 'EditEmail'>

/**
 * Screen for editing a users email in the personal info section
 */
const EditEmailScreen: FC<EditEmailScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const t = useTranslation(NAMESPACE.PROFILE)
  const { profile, emailSaved, loading } = useSelector<StoreState, PersonalInformationState>((state) => state.personalInformation)
  const emailId = profile?.contactEmail?.id

  const [email, setEmail] = useState(profile?.contactEmail?.emailAddress || '')
  const [formContainsError, setFormContainsError] = useState(false)
  const [onSaveClicked, setOnSaveClicked] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps): ReactNode => (
        <BackButton onPress={props.onPress} canGoBack={props.canGoBack} label={BackButtonLabelConstants.cancel} showCarat={false} />
      ),
      headerRight: () => <SaveButton onSave={() => setOnSaveClicked(true)} disabled={false} />,
    })
  })

  useEffect(() => {
    if (emailSaved) {
      dispatch(finishEditEmail())
      navigation.goBack()
    }
  }, [emailSaved, navigation, dispatch])

  const saveEmail = (): void => {
    dispatch(updateEmail(email, emailId, ScreenIDTypesConstants.EDIT_EMAIL_SCREEN_ID))
  }

  if (useError(ScreenIDTypesConstants.EDIT_EMAIL_SCREEN_ID)) {
    return <ErrorComponent />
  }

  if (loading || emailSaved) {
    return <LoadingComponent text={t('personalInformation.savingEmailAddress')} />
  }

  const isEmailInvalid = (): boolean => {
    // return true if the email does not contain the @ character
    const validEmailCondition = new RegExp(/\S+@\S+/)
    return !validEmailCondition.test(email)
  }

  const formFieldsList: Array<FormFieldType<unknown>> = [
    {
      fieldType: FieldType.TextInput,
      fieldProps: {
        inputType: 'email',
        labelKey: 'profile:personalInformation.email',
        onChange: setEmail,
        placeholderKey: 'profile:personalInformation.email',
        value: email,
        isRequiredField: true,
      },
      fieldErrorMessage: t('editEmail.fieldError'),
      validationList: [
        {
          validationFunction: isEmailInvalid,
          validationFunctionErrorMessage: t('editEmail.fieldError'),
        },
      ],
    },
  ]

  return (
    <VAScrollView {...testIdProps('Email: Edit-email-page')}>
      <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        {formContainsError && (
          <Box mb={theme.dimensions.standardMarginBetween}>
            <AlertBox title={t('editEmail.alertError')} background="noCardBackground" border="error" />
          </Box>
        )}
        <FormWrapper fieldsList={formFieldsList} onSave={saveEmail} setFormContainsError={setFormContainsError} onSaveClicked={onSaveClicked} setOnSaveClicked={setOnSaveClicked} />
        {profile?.contactEmail?.emailAddress && (
          <Box mt={theme.dimensions.standardMarginBetween}>
            <RemoveData pageName={t('personalInformation.emailAddress').toLowerCase()} alertText={t('personalInformation.emailAddress').toLowerCase()} />
          </Box>
        )}
      </Box>
    </VAScrollView>
  )
}

export default EditEmailScreen
