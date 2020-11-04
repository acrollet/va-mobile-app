import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { StackHeaderLeftButtonProps } from '@react-navigation/stack'
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import React, { FC, ReactNode, useEffect, useState } from 'react'

import { AccountOptions } from 'constants/accounts'
import { BackButton, Box, CollapsibleView, TextView, VAImage, VAPicker, VATextInput } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { ProfileStackParamList } from '../../ProfileScreen'
import { isIOS } from 'utils/platform'
import { testIdProps } from 'utils/accessibility'
import { useTheme, useTranslation } from 'utils/hooks'

const MAX_ROUTING_DIGITS = 9
const MAX_ACCOUNT_DIGITS = 17

type EditDirectDepositProps = StackScreenProps<ProfileStackParamList, 'EditDirectDeposit'>

/**
 * Screen for displaying editing direct deposit information
 */
const EditDirectDepositScreen: FC<EditDirectDepositProps> = ({ navigation }) => {
  const t = useTranslation(NAMESPACE.PROFILE)
  const tc = useTranslation()
  const theme = useTheme()
  const gutter = theme.dimensions.gutter
  const marginTop = theme.dimensions.contentMarginTop
  const inputMarginTop = theme.dimensions.editDirectDepositInputFieldMarginTop

  // '20px' -> 20
  const marginX = parseInt(gutter.slice(0, gutter.indexOf('px')), 10)

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

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps): ReactNode => (
        <BackButton onPress={props.onPress} canGoBack={props.canGoBack} i18nId={'cancel'} testID={'cancel'} showCarat={false} />
      ),
    })
  })

  const behavior = isIOS() ? 'position' : undefined

  return (
    <ScrollView {...testIdProps('Edit-direct-deposit-screen')}>
      <KeyboardAvoidingView behavior={behavior} keyboardVerticalOffset={25}>
        <Box mt={marginTop} mx={gutter}>
          <TextView variant="MobileBody">{t('editDirectDeposit.bankInfoTitle')}</TextView>
        </Box>
        <Box mt={inputMarginTop}>
          <CollapsibleView text={t('editDirectDeposit.findTheseNumbers')}>
            <VAImage name={'PaperCheck'} a11yLabel={t('editDirectDeposit.checkingExample')} marginX={marginX} />
          </CollapsibleView>
        </Box>
        <Box mt={marginTop} mx={gutter}>
          <TextView>{t('editDirectDeposit.routingNumber')}</TextView>
        </Box>
        <Box mt={inputMarginTop}>
          <VATextInput
            inputType="phone"
            onChange={setRoutingNumber}
            maxLength={MAX_ROUTING_DIGITS}
            placeholderKey={'profile:editDirectDeposit.routingNumberPlaceHolder'}
            value={routingNumber}
          />
        </Box>
        <Box mt={marginTop} mx={gutter}>
          <TextView>{t('editDirectDeposit.accountNumber')}</TextView>
        </Box>
        <Box mt={inputMarginTop}>
          <VATextInput
            inputType="phone"
            onChange={setAccountNumber}
            maxLength={MAX_ACCOUNT_DIGITS}
            placeholderKey={'profile:editDirectDeposit.accountNumberPlaceHolder'}
            value={accountNumber}
          />
        </Box>
        <Box mt={marginTop} mx={gutter}>
          <TextView>{t('editDirectDeposit.accountType')}</TextView>
        </Box>
        <Box mt={inputMarginTop}>
          <VAPicker
            selectedValue={accountType}
            onSelectionChange={setAccountType}
            pickerOptions={accountOptions}
            placeholderKey={'profile:editDirectDeposit.accountTypePlaceHolder'}
          />
        </Box>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default EditDirectDepositScreen
