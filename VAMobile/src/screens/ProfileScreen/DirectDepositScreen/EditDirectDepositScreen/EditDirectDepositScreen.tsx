import { KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
import { StackHeaderLeftButtonProps } from '@react-navigation/stack'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useDispatch, useSelector } from 'react-redux'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

import { AccountOptions } from 'constants/accounts'
import { AccountTypes } from 'store/api/types'
import { AlertBox, BackButton, Box, CollapsibleView, ErrorComponent, LoadingComponent, SaveButton, TextView, VAImage, VAPicker, VASelector, VATextInput } from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { DirectDepositState, StoreState } from 'store/reducers'
import { NAMESPACE } from 'constants/namespaces'
import { RootNavStackParamList } from 'App'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { finishEditBankInfo, updateBankInfo } from 'store/actions'
import { focusTextInputRef } from 'utils/common'
import { isIOS } from 'utils/platform'
import { testIdProps } from 'utils/accessibility'
import { useError, useTheme, useTranslation } from 'utils/hooks'

const MAX_ROUTING_DIGITS = 9
const MAX_ACCOUNT_DIGITS = 17

type EditDirectDepositProps = StackScreenProps<RootNavStackParamList, 'EditDirectDeposit'>

/**
 * Screen for displaying editing direct deposit information
 */
const EditDirectDepositScreen: FC<EditDirectDepositProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const t = useTranslation(NAMESPACE.PROFILE)
  const tc = useTranslation()
  const theme = useTheme()
  const accountNumRef = useRef<TextInput>(null)
  const { bankInfoUpdated, saving, invalidRoutingNumberError } = useSelector<StoreState, DirectDepositState>((state) => state.directDeposit)

  const gutter = theme.dimensions.gutter
  const contentMarginTop = theme.dimensions.contentMarginTop
  const contentMarginBottom = theme.dimensions.contentMarginBottom
  const condensedMarginBetween = theme.dimensions.condensedMarginBetween
  const standardMarginBetween = theme.dimensions.standardMarginBetween

  const [routingNumber, setRoutingNumber] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountType, setAccountType] = useState('')
  const [accountOptions] = useState(
    AccountOptions.map((option) => {
      // translate key
      return {
        ...option,
        label: tc(option.label),
      }
    }),
  )
  const [confirmed, setConfirmed] = useState(false)
  const [confirmedDisabled, setConfirmedDisabled] = useState(true)
  const [saveDisabled, setSaveDisabled] = useState(true)

  //TODO #14161
  const onSave = (): void => {
    dispatch(updateBankInfo(accountNumber, routingNumber, accountType as AccountTypes, ScreenIDTypesConstants.EDIT_DIRECT_DEPOSIT_SCREEN_ID))
  }

  const goBack = (): void => {
    navigation.goBack()
    dispatch(finishEditBankInfo())
  }

  useEffect(() => {
    if (bankInfoUpdated) {
      goBack()
    }
  })

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps): ReactNode => (
        <BackButton onPress={goBack} canGoBack={props.canGoBack} label={BackButtonLabelConstants.cancel} showCarat={false} />
      ),
      headerRight: () => <SaveButton onSave={onSave} disabled={saveDisabled} />,
    })
  })

  useEffect(() => {
    const validAccountNumber = accountNumber.length > 0 && accountNumber.length <= MAX_ACCOUNT_DIGITS
    const isValidContent = routingNumber.length === MAX_ROUTING_DIGITS && validAccountNumber && !!accountType

    // disable should be false if information is valid
    setConfirmedDisabled(!isValidContent)

    if (confirmed && !isValidContent) {
      setConfirmed(false)
    }

    setSaveDisabled(!(isValidContent && confirmed))
  }, [routingNumber, accountNumber, accountType, confirmed, saveDisabled])

  const checkboxProps = {
    labelKey: 'profile:editDirectDeposit.confirm',
    selected: confirmed,
    onSelectionChange: setConfirmed,
    disabled: confirmedDisabled,
    a11yHint: t('editDirectDeposit.confirmHint'),
  }

  const behavior = isIOS() ? 'position' : undefined

  if (useError(ScreenIDTypesConstants.EDIT_DIRECT_DEPOSIT_SCREEN_ID)) {
    return <ErrorComponent />
  }

  if (saving) {
    return <LoadingComponent text={t('directDeposit.savingInformation')} />
  }

  return (
    <ScrollView {...testIdProps('Direct-deposit: Edit-direct-deposit-page')}>
      <KeyboardAvoidingView behavior={behavior} keyboardVerticalOffset={25}>
        <Box mt={contentMarginTop} mb={contentMarginBottom}>
          {invalidRoutingNumberError && (
            <Box mx={gutter} mb={standardMarginBetween}>
              <AlertBox title={t('editDirectDeposit.error')} text={t('editDirectDeposit.errorInvalidRoutingNumber')} border="error" background="noCardBackground" />
            </Box>
          )}
          <Box mx={gutter}>
            <TextView variant="MobileBody">{t('editDirectDeposit.bankInfoTitle')}</TextView>
          </Box>
          <Box mt={theme.dimensions.condensedMarginBetween}>
            <CollapsibleView text={t('editDirectDeposit.findTheseNumbers')}>
              <VAImage name={'PaperCheck'} a11yLabel={t('editDirectDeposit.checkingExample')} marginX={gutter} />
            </CollapsibleView>
          </Box>
          <Box mt={condensedMarginBetween} mx={gutter}>
            <TextView>{t('editDirectDeposit.routingNumber')}</TextView>
          </Box>
          <Box mt={condensedMarginBetween}>
            <VATextInput
              inputType="phone"
              onChange={setRoutingNumber}
              maxLength={MAX_ROUTING_DIGITS}
              placeholderKey={'profile:editDirectDeposit.routingNumberPlaceHolder'}
              value={routingNumber}
            />
          </Box>
          <Box mt={standardMarginBetween} mx={gutter}>
            <TextView>{t('editDirectDeposit.accountNumber')}</TextView>
          </Box>
          <Box mt={condensedMarginBetween}>
            <VATextInput
              inputType="phone"
              onChange={setAccountNumber}
              maxLength={MAX_ACCOUNT_DIGITS}
              placeholderKey={'profile:editDirectDeposit.accountNumberPlaceHolder'}
              value={accountNumber}
              inputRef={accountNumRef}
            />
          </Box>
          <Box mt={standardMarginBetween} mx={gutter}>
            <TextView>{t('editDirectDeposit.accountType')}</TextView>
          </Box>
          <Box mt={condensedMarginBetween}>
            <VAPicker
              selectedValue={accountType}
              onSelectionChange={setAccountType}
              pickerOptions={accountOptions}
              placeholderKey={'profile:editDirectDeposit.accountTypePlaceHolder'}
              onUpArrow={(): void => focusTextInputRef(accountNumRef)}
            />
          </Box>
          <Box mt={standardMarginBetween} mx={gutter}>
            <VASelector {...checkboxProps} />
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default EditDirectDepositScreen
