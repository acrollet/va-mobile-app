import { StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'

import { Box, ChildTemplate, ErrorComponent, LargeNavButton, LoadingComponent, NameTag } from 'components'
import { DowntimeFeatureTypeConstants, ScreenIDTypesConstants } from 'store/api/types'
import { HomeStackParamList } from 'screens/HomeScreen/HomeStackScreens'
import { MilitaryServiceState, getServiceHistory } from 'store/slices/militaryServiceSlice'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { useAppDispatch, useDowntime, useError, useRouteNavigation, useTheme } from 'utils/hooks'
import { useAuthorizedServices } from 'api/authorizedServices/getAuthorizedServices'
import { useSelector } from 'react-redux'

type ProfileScreenProps = StackScreenProps<HomeStackParamList, 'Profile'>

function ProfileScreen({ navigation }: ProfileScreenProps) {
  const {
    data: userAuthorizedServices,
    isLoading: loadingUserAuthorizedServices,
    isError: getUserAuthorizedServicesError,
    refetch: refetchUserAuthorizedServices,
  } = useAuthorizedServices()
  const { loading: militaryInformationLoading, needsDataLoad: militaryHistoryNeedsUpdate } = useSelector<RootState, MilitaryServiceState>((s) => s.militaryService)

  const mhNotInDowntime = !useDowntime(DowntimeFeatureTypeConstants.militaryServiceHistory)
  const dispatch = useAppDispatch()
  const navigateTo = useRouteNavigation()
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.COMMON)

  /**
   * Function used on error to reload the data for this page. This combines all calls necessary to load the page rather
   * than checking the needsDataLoad flag because if something went wrong we assume we want to reload all of the necessary data
   */
  const getInfoTryAgain = (): void => {
    refetchUserAuthorizedServices()
    // Get the service history to populate the profile banner
    if (userAuthorizedServices?.militaryServiceHistory) {
      dispatch(getServiceHistory(ScreenIDTypesConstants.PROFILE_SCREEN_ID))
    }
  }

  useEffect(() => {
    // Get the service history to populate the profile banner
    if (militaryHistoryNeedsUpdate && userAuthorizedServices?.militaryServiceHistory && mhNotInDowntime) {
      dispatch(getServiceHistory(ScreenIDTypesConstants.MILITARY_INFORMATION_SCREEN_ID))
    }
  }, [dispatch, militaryHistoryNeedsUpdate, userAuthorizedServices?.militaryServiceHistory, mhNotInDowntime])

  const loadingCheck = militaryInformationLoading || loadingUserAuthorizedServices
  const errorCheck = useError(ScreenIDTypesConstants.PROFILE_SCREEN_ID) || getUserAuthorizedServicesError

  return (
    <ChildTemplate title={t('profile.title')} backLabel={t('home.title')} backLabelOnPress={navigation.goBack} testID="profileID">
      {errorCheck ? (
        <Box>
          <ErrorComponent onTryAgain={getInfoTryAgain} screenID={ScreenIDTypesConstants.PROFILE_SCREEN_ID} />
          <Box mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
            <LargeNavButton
              title={t('settings.title')}
              onPress={() => navigateTo('Settings')}
              borderWidth={theme.dimensions.buttonBorderWidth}
              borderColor={'secondary'}
              borderColorActive={'primaryDarkest'}
              borderStyle={'solid'}
            />
          </Box>
        </Box>
      ) : loadingCheck ? (
        <Box>
          <NameTag />
          <LoadingComponent text={t('profile.loading')} />
        </Box>
      ) : (
        <>
          <NameTag />
          <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.standardMarginBetween} mx={theme.dimensions.gutter}>
            {userAuthorizedServices?.userProfileUpdate && (
              <>
                <LargeNavButton
                  title={t('personalInformation.title')}
                  onPress={() => navigateTo('PersonalInformation')}
                  borderWidth={theme.dimensions.buttonBorderWidth}
                  borderColor={'secondary'}
                  borderColorActive={'primaryDarkest'}
                  borderStyle={'solid'}
                />
                <LargeNavButton
                  title={t('contactInformation.title')}
                  onPress={() => navigateTo('ContactInformation')}
                  borderWidth={theme.dimensions.buttonBorderWidth}
                  borderColor={'secondary'}
                  borderColorActive={'primaryDarkest'}
                  borderStyle={'solid'}
                />
              </>
            )}
            <LargeNavButton
              title={t('militaryInformation.title')}
              onPress={() => navigateTo('MilitaryInformation')}
              borderWidth={theme.dimensions.buttonBorderWidth}
              borderColor={'secondary'}
              borderColorActive={'primaryDarkest'}
              borderStyle={'solid'}
            />
            <LargeNavButton
              title={t('settings.title')}
              onPress={() => navigateTo('Settings')}
              borderWidth={theme.dimensions.buttonBorderWidth}
              borderColor={'secondary'}
              borderColorActive={'primaryDarkest'}
              borderStyle={'solid'}
            />
          </Box>
        </>
      )}
    </ChildTemplate>
  )
}

export default ProfileScreen
