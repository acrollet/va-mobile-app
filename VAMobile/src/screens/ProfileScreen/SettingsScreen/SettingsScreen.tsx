import { Button, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'
import React, { FC, ReactNode } from 'react'
import _ from 'underscore'

import { AuthState, StoreState } from 'store'
import { Box, ButtonDecoratorType, ButtonList, ButtonListItemObj } from 'components'
import { NAMESPACE } from 'constants/namespaces'
import { ProfileStackParamList } from '../ProfileScreen'
import { logout, setBiometricsPreference } from 'store/actions'
import { testIdProps } from 'utils/accessibility'
import { useRouteNavigation, useTheme, useTranslation } from 'utils/hooks'
import getEnv from 'utils/env'

const { SHOW_DEBUG_MENU } = getEnv()

type SettingsScreenProps = StackScreenProps<ProfileStackParamList, 'Settings'>

const SettingsScreen: FC<SettingsScreenProps> = () => {
  const dispatch = useDispatch()
  const t = useTranslation(NAMESPACE.SETTINGS)
  const navigateTo = useRouteNavigation()
  const theme = useTheme()
  const { canStoreWithBiometric, shouldStoreWithBiometric } = useSelector<StoreState, AuthState>((s) => s.auth)
  const onLogout = (): void => {
    dispatch(logout())
  }

  const onNoop = (): void => {
    //noop TODO implement features
  }

  const onToggleTouchId = (): void => {
    // toggle the value from previous state
    const newPrefValue = !shouldStoreWithBiometric
    dispatch(setBiometricsPreference(newPrefValue))
  }

  const touchIdRow: ButtonListItemObj = {
    textLines: t('touchId.title'),
    a11yHintText: t('touchId.a11yHint'),
    onPress: onToggleTouchId,
    decorator: ButtonDecoratorType.Switch,
    decoratorProps: { on: shouldStoreWithBiometric },
  }

  const onDebug = navigateTo('Debug')

  const items: Array<ButtonListItemObj> = _.flatten([
    { textLines: t('manageAccount.title'), a11yHintText: t('manageAccount.a11yHint'), onPress: onNoop },
    // don't even show the biometrics option if it's not available
    canStoreWithBiometric ? touchIdRow : [],
    { textLines: t('shareApp.title'), a11yHintText: t('shareApp.a11yHint'), onPress: onNoop },
    { textLines: t('privacyPolicy.title'), a11yHintText: t('privacyPolicy.a11yHint'), onPress: onNoop },
  ])

  const showDebugMenu = (): ReactNode => {
    if (!SHOW_DEBUG_MENU) {
      return null
    }

    const debugButton: Array<ButtonListItemObj> = [
      {
        textLines: t('debug.title'),
        a11yHintText: t('debug.a11yHint'),
        onPress: onDebug,
      },
    ]

    return (
      <Box mt={20}>
        <ButtonList items={debugButton} />
      </Box>
    )
  }

  return (
    <View {...testIdProps('Settings-screen')}>
      <Box my={32}>
        <ButtonList items={items} />
        {showDebugMenu()}
      </Box>
      <Button color={theme.colors.text.error} title={t('logout.title')} {...testIdProps('logout')} onPress={onLogout} />
    </View>
  )
}

export default SettingsScreen
