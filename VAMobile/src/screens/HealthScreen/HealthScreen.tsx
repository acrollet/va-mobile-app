import { CardStyleInterpolators, StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'

import { Box, CategoryLanding, LargeNavButton } from 'components'
import { CloseSnackbarOnNavigation } from 'constants/common'
import { DowntimeFeatureTypeConstants, ScreenIDTypesConstants } from 'store/api/types'
import { FEATURE_LANDING_TEMPLATE_OPTIONS } from 'constants/screens'
import { HealthStackParamList } from './HealthStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { PrescriptionState, loadAllPrescriptions } from 'store/slices'
import { RootState } from 'store'
import { featureEnabled } from 'utils/remoteConfig'
import { getInbox } from 'store/slices/secureMessagingSlice'
import { getInboxUnreadCount } from './SecureMessaging/SecureMessaging'
import { logCOVIDClickAnalytics } from 'store/slices/vaccineSlice'
import { screenContentAllowed } from 'utils/waygateConfig'
import { useAppDispatch, useDowntime, useRouteNavigation, useTheme } from 'utils/hooks'
import { useAuthorizedServices } from 'api/authorizedServices/getAuthorizedServices'
import { useSelector } from 'react-redux'
import Appointments from './Appointments'
import CernerAlert from './CernerAlert'
import FolderMessages from './SecureMessaging/FolderMessages/FolderMessages'
import PastAppointmentDetails from './Appointments/PastAppointments/PastAppointmentDetails'
import PrescriptionDetails from './Pharmacy/PrescriptionDetails/PrescriptionDetails'
import PrescriptionHistory from './Pharmacy/PrescriptionHistory/PrescriptionHistory'
import SecureMessaging from './SecureMessaging'
import UpcomingAppointmentDetails from './Appointments/UpcomingAppointments/UpcomingAppointmentDetails'
import VaccineDetailsScreen from './Vaccines/VaccineDetails/VaccineDetailsScreen'
import VaccineListScreen from './Vaccines/VaccineList/VaccineListScreen'
import ViewMessageScreen from './SecureMessaging/ViewMessage/ViewMessageScreen'
import getEnv from 'utils/env'

const { WEBVIEW_URL_CORONA_FAQ } = getEnv()

type HealthScreenProps = StackScreenProps<HealthStackParamList, 'Health'>

export function HealthScreen({}: HealthScreenProps) {
  const theme = useTheme()
  const navigateTo = useRouteNavigation()
  const { t } = useTranslation(NAMESPACE.COMMON)
  const dispatch = useAppDispatch()
  const isScreenContentAllowed = screenContentAllowed('WG_Health')

  const unreadCount = useSelector<RootState, number>(getInboxUnreadCount)
  const { prescriptionsNeedLoad } = useSelector<RootState, PrescriptionState>((s) => s.prescriptions)
  const { data: userAuthorizedServices } = useAuthorizedServices({ enabled: isScreenContentAllowed })

  const onPharmacy = () => {
    // If rx list is already loaded, reload it to ensure freshness
    if (!prescriptionsNeedLoad) {
      dispatch(loadAllPrescriptions(ScreenIDTypesConstants.HEALTH_SCREEN_ID))
    }
    navigateTo('PrescriptionHistory')
  }
  const onCoronaVirusFAQ = () => {
    dispatch(logCOVIDClickAnalytics('health_screen'))
    navigateTo('Webview', { url: WEBVIEW_URL_CORONA_FAQ, displayTitle: t('webview.vagov'), loadingMessage: t('webview.covidUpdates.loading') })
  }

  const smNotInDowntime = !useDowntime(DowntimeFeatureTypeConstants.secureMessaging)

  useEffect(() => {
    if (isScreenContentAllowed && smNotInDowntime) {
      // fetch inbox metadata to display unread messages count tag
      dispatch(getInbox(ScreenIDTypesConstants.HEALTH_SCREEN_ID))
    }
  }, [dispatch, smNotInDowntime, isScreenContentAllowed])

  return (
    <CategoryLanding title={t('health.title')} testID="healthCategoryTestID">
      <Box mb={!CernerAlert ? theme.dimensions.contentMarginBottom : theme.dimensions.standardMarginBetween} mx={theme.dimensions.gutter}>
        <LargeNavButton
          title={t('appointments')}
          onPress={() => navigateTo('Appointments')}
          borderWidth={theme.dimensions.buttonBorderWidth}
          borderColor={'secondary'}
          borderColorActive={'primaryDarkest'}
          borderStyle={'solid'}
        />
        <LargeNavButton
          title={t('secureMessaging.title')}
          onPress={() => navigateTo('SecureMessaging')}
          borderWidth={theme.dimensions.buttonBorderWidth}
          borderColor={'secondary'}
          borderColorActive={'primaryDarkest'}
          borderStyle={'solid'}
          tagCount={userAuthorizedServices?.secureMessaging && smNotInDowntime ? unreadCount : undefined}
          tagCountA11y={t('secureMessaging.tag.a11y', { unreadCount })}
        />
        {featureEnabled('prescriptions') && (
          <LargeNavButton
            title={t('prescription.title')}
            onPress={onPharmacy}
            borderWidth={theme.dimensions.buttonBorderWidth}
            borderColor={'secondary'}
            borderColorActive={'primaryDarkest'}
            borderStyle={'solid'}
          />
        )}
        <LargeNavButton
          title={t('vaVaccines.buttonTitle')}
          a11yHint={t('vaVaccines.a11yHint')}
          onPress={() => navigateTo('VaccineList')}
          borderWidth={theme.dimensions.buttonBorderWidth}
          borderColor={'secondary'}
          borderColorActive={'primaryDarkest'}
          borderStyle={'solid'}
        />
        <LargeNavButton
          title={t('covid19Updates.title')}
          onPress={onCoronaVirusFAQ}
          borderWidth={theme.dimensions.buttonBorderWidth}
          borderColor={'secondary'}
          borderColorActive={'primaryDarkest'}
          borderStyle={'solid'}
        />
      </Box>
      {CernerAlert ? (
        <Box mb={theme.dimensions.contentMarginBottom}>
          <CernerAlert />
        </Box>
      ) : (
        <></>
      )}
    </CategoryLanding>
  )
}

type HealthStackScreenProps = Record<string, unknown>

const HealthScreenStack = createStackNavigator<HealthStackParamList>()

/**
 * Stack screen for the Health tab. Screens placed within this stack will appear in the context of the app level tab navigator
 */
function HealthStackScreen({}: HealthStackScreenProps) {
  const screenOptions = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  }
  return (
    <HealthScreenStack.Navigator
      screenOptions={screenOptions}
      screenListeners={{
        transitionStart: (e) => {
          if (e.data.closing) {
            CloseSnackbarOnNavigation(e.target)
          }
        },
        blur: (e) => {
          CloseSnackbarOnNavigation(e.target)
        },
      }}>
      <HealthScreenStack.Screen name="Health" component={HealthScreen} options={{ headerShown: false }} />
      <HealthScreenStack.Screen name="Appointments" component={Appointments} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="FolderMessages" component={FolderMessages} options={{ headerShown: false }} />
      <HealthScreenStack.Screen name="PastAppointmentDetails" component={PastAppointmentDetails} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="PrescriptionDetails" component={PrescriptionDetails} options={{ headerShown: false }} />
      <HealthScreenStack.Screen name="PrescriptionHistory" component={PrescriptionHistory} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="SecureMessaging" component={SecureMessaging} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="UpcomingAppointmentDetails" component={UpcomingAppointmentDetails} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="VaccineDetails" component={VaccineDetailsScreen} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="VaccineList" component={VaccineListScreen} options={FEATURE_LANDING_TEMPLATE_OPTIONS} />
      <HealthScreenStack.Screen name="ViewMessage" component={ViewMessageScreen} options={{ headerShown: false }} />
    </HealthScreenStack.Navigator>
  )
}

export default HealthStackScreen
