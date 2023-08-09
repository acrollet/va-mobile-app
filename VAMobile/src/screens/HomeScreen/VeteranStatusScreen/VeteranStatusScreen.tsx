import { StackScreenProps } from '@react-navigation/stack'
import { map } from 'underscore'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { BackgroundVariant, BorderColorVariant, Box, BoxProps, LargePanel, TextView, VAIcon } from 'components'
import { BranchesOfServiceConstants, ServiceData } from 'store/api/types'
import { DisabilityRatingState, MilitaryServiceState, PersonalInformationState } from 'store/slices'
import { HomeStackParamList } from '../HomeStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { getBirthDate } from '../ProfileScreen/PersonalInformationScreen/PersonalInformationScreen'
import { useHasMilitaryInformationAccess } from 'utils/authorizationHooks'
import { useTheme } from 'utils/hooks'
import PhotoUpload from 'components/PhotoUpload'

type VeteranStatusScreenProps = StackScreenProps<HomeStackParamList, 'VeteranStatus'>

const VeteranStatusScreen: FC<VeteranStatusScreenProps> = () => {
  const { profile } = useSelector<RootState, PersonalInformationState>((state) => state.personalInformation)
  const { serviceHistory, mostRecentBranch } = useSelector<RootState, MilitaryServiceState>((s) => s.militaryService)
  const { ratingData } = useSelector<RootState, DisabilityRatingState>((state) => state.disabilityRating)
  const accessToMilitaryInfo = useHasMilitaryInformationAccess()
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.COMMON)

  const name = (): string => {
    return profile?.fullName || ''
  }

  const ratingPercent = ratingData?.combinedDisabilityRating
  const ratingIsDefined = ratingPercent !== undefined && ratingPercent !== null
  const combinedPercentText = ratingIsDefined ? t('disabilityRating.combinePercent', { combinedPercent: ratingPercent }) : undefined

  const getPeriodOfService: React.ReactNode = map(serviceHistory, (service: ServiceData) => {
    const branch = t('militaryInformation.branch', { branch: service.branchOfService })
    return (
      <Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <TextView variant="MobileBody" color="primaryContrast">
            {branch}
          </TextView>
        </Box>
        <Box>
          <TextView variant="HelperText" mb={theme.dimensions.standardMarginBetween}>
            {t('militaryInformation.history', { begin: service.formattedBeginDate, end: service.formattedEndDate })}
          </TextView>
        </Box>
      </Box>
    )
  })

  const branch = mostRecentBranch || ''

  const boxProps: BoxProps = {
    minHeight: 81,
    borderRadius: 6,
    p: theme.dimensions.cardPadding,
    mb: theme.dimensions.condensedMarginBetween,
    backgroundColor: theme.colors.background.veteranStatus as BackgroundVariant,
    borderTopWidth: theme.dimensions.borderWidth,
    borderColor: theme.colors.border.veteranStatus as BorderColorVariant,
    borderStyle: 'solid',
  }

  const getBranchSeal = (): React.ReactNode => {
    const dimensions = {
      width: 34,
      height: 34,
    }

    switch (branch) {
      case BranchesOfServiceConstants.AirForce:
        return <VAIcon testID="United States Air Force" name="AirForce" {...dimensions} />
      case BranchesOfServiceConstants.Army:
        return <VAIcon testID="United States Army" name="Army" {...dimensions} />
      case BranchesOfServiceConstants.CoastGuard:
        return <VAIcon testID="United States Coast Guard" name="CoastGuard" {...dimensions} />
      case BranchesOfServiceConstants.MarineCorps:
        return <VAIcon testID="United States Marine Corps" name="MarineCorps" {...dimensions} />
      case BranchesOfServiceConstants.Navy:
        return <VAIcon testID="United States Navy" name="Navy" {...dimensions} />
    }
  }

  return (
    <LargePanel title={t('veteranStatus.title')} rightButtonText={t('close')}>
      <Box backgroundColor={theme.colors.background.veteranStatus as BackgroundVariant} flex={1}>
        <Box alignItems="center">
          <Box mt={theme.dimensions.standardMarginBetween}>
            <VAIcon name={'Logo'} />
          </Box>
          <Box my={theme.dimensions.standardMarginBetween}>
            <PhotoUpload width={100} height={100} />
          </Box>
          <Box flex={1} my={theme.dimensions.standardMarginBetween}>
            <TextView textTransform="capitalize" mb={theme.dimensions.textIconMargin} variant="BitterBoldHeading" color="primaryContrast">
              {name()}
            </TextView>
            {accessToMilitaryInfo && (
              <Box display="flex" flexDirection="row">
                {getBranchSeal()}
                <TextView ml={10} variant="MobileBody" color="primaryContrast">
                  {branch}
                </TextView>
              </Box>
            )}
          </Box>
        </Box>
        <Box mx={theme.dimensions.gutter}>
          <Box {...boxProps}>
            <TextView variant="MobileBodyBold">{t('personalInformation.dateOfBirth')}</TextView>
            <TextView variant="MobileBody">{getBirthDate(profile, t)}</TextView>
          </Box>
          <Box {...boxProps}>
            <TextView variant="MobileBodyBold">{t('disabilityRating.title')}</TextView>
            <TextView variant="MobileBody">{combinedPercentText}</TextView>
          </Box>
          <Box {...boxProps} borderBottomWidth={theme.dimensions.borderWidth}>
            <TextView variant="MobileBodyBold" mb={theme.dimensions.standardMarginBetween}>
              {t('veteranStatus.periodOfService')}
            </TextView>
            {getPeriodOfService}
          </Box>
        </Box>
      </Box>
    </LargePanel>
  )
}

export default VeteranStatusScreen
