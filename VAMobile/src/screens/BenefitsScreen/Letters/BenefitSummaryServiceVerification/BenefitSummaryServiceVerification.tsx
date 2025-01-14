import { Button } from '@department-of-veterans-affairs/mobile-component-library'
import { StackScreenProps } from '@react-navigation/stack'
import { map } from 'underscore'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import React, { useEffect, useState } from 'react'

import {
  BasicError,
  Box,
  ButtonDecoratorType,
  ClickForActionLink,
  DefaultList,
  DefaultListItemObj,
  FeatureLandingTemplate,
  LinkTypeOptionsConstants,
  LinkUrlIconType,
  LoadingComponent,
  SimpleList,
  SimpleListItemObj,
  TextArea,
  TextView,
} from 'components'
import { BenefitSummaryAndServiceVerificationLetterOptions, LetterBenefitInformation, LetterTypeConstants } from 'store/api/types'
import { BenefitsStackParamList } from 'screens/BenefitsScreen/BenefitsStackScreens'
import { LettersState, downloadLetter, getLetterBeneficiaryData } from 'store/slices'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { a11yHintProp } from 'utils/accessibility'
import { a11yLabelVA } from 'utils/a11yLabel'
import { capitalizeWord, formatDateMMMMDDYYYY, roundToHundredthsPlace } from 'utils/formattingUtils'
import { screenContentAllowed } from 'utils/waygateConfig'
import { useAppDispatch, useTheme } from 'utils/hooks'
import getEnv from 'utils/env'

const { LINK_URL_ASK_VA_GOV } = getEnv()

type BenefitSummaryServiceVerificationProps = StackScreenProps<BenefitsStackParamList, 'BenefitSummaryServiceVerificationLetter'>

function BenefitSummaryServiceVerification({ navigation }: BenefitSummaryServiceVerificationProps) {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { downloading, letterBeneficiaryData, mostRecentServices, letterDownloadError, loadingLetterBeneficiaryData } = useSelector<RootState, LettersState>(
    (state) => state.letters,
  )

  const [includeMilitaryServiceInfoToggle, setIncludeMilitaryServiceInfoToggle] = useState(true)
  const [monthlyAwardToggle, setMonthlyAwardToggle] = useState(true)
  const [combinedServiceRatingToggle, setCombinedServiceRatingToggle] = useState(true)
  const [disabledDueToServiceToggle, setDisabledDueToServiceToggle] = useState(true)
  const [atLeastOneServiceDisabilityToggle, setAtLeastOneServiceDisabilityToggle] = useState(true)

  useEffect(() => {
    if (screenContentAllowed('WG_BenefitSummaryServiceVerificationLetter')) {
      dispatch(getLetterBeneficiaryData(ScreenIDTypesConstants.BENEFIT_SUMMARY_SERVICE_VERIFICATION_SCREEN_ID))
    }
  }, [dispatch])

  const getListOfMilitaryService = (): React.ReactNode => {
    return map(mostRecentServices, (periodOfService, index) => {
      const militaryServiceInfoList: Array<DefaultListItemObj> = [
        {
          textLines: [
            { text: t('letters.benefitService.branchOfService'), variant: 'MobileBodyBold' },
            {
              text: t('text.raw', { text: capitalizeWord(periodOfService.branch || '') }),
            },
          ],
          a11yValue: t('listPosition', { position: 1, total: 4 }),
        },
        {
          textLines: [
            { text: t('letters.benefitService.dischargeType'), variant: 'MobileBodyBold' },
            {
              text: t('text.raw', { text: capitalizeWord(periodOfService.characterOfService || '') }),
            },
          ],
          a11yValue: t('listPosition', { position: 2, total: 4 }),
        },
        {
          textLines: [
            { text: t('letters.benefitService.activeDutyStart'), variant: 'MobileBodyBold' },
            {
              text: t('text.raw', { text: formatDateMMMMDDYYYY(periodOfService.enteredDate || '') }),
            },
          ],
          testId: `${t('letters.benefitService.activeDutyStart')} ${formatDateMMMMDDYYYY(periodOfService.enteredDate || '')}`,
          a11yValue: t('listPosition', { position: 3, total: 4 }),
        },
        {
          textLines: [
            { text: t('letters.benefitService.separationDate'), variant: 'MobileBodyBold' },
            {
              text: t('text.raw', { text: formatDateMMMMDDYYYY(periodOfService.releasedDate || '') }),
            },
          ],
          testId: `${t('letters.benefitService.separationDate')} ${formatDateMMMMDDYYYY(periodOfService.releasedDate || '')}`,
          a11yValue: t('listPosition', { position: 4, total: 4 }),
        },
      ]
      return (
        <Box key={index} mb={mostRecentServices.length - 1 === index ? 0 : theme.dimensions.standardMarginBetween}>
          <DefaultList items={militaryServiceInfoList} title={t('letters.benefitService.militaryServiceInformation')} />
        </Box>
      )
    })
  }

  const includeMilitaryServiceInfoList: Array<SimpleListItemObj> = [
    {
      text: t('letters.benefitService.includeMilitaryServiceInfo'),
      onPress: (): void => setIncludeMilitaryServiceInfoToggle(!includeMilitaryServiceInfoToggle),
      decorator: ButtonDecoratorType.Switch,
      decoratorProps: {
        on: includeMilitaryServiceInfoToggle,
        testID: 'include-military-service-information',
      },
    },
  ]

  const getBenefitAndDisabilityToggleList = (): Array<SimpleListItemObj> => {
    const toggleListItems: Array<SimpleListItemObj> = []
    const { monthlyAwardAmount, awardEffectiveDate, serviceConnectedPercentage, hasChapter35Eligibility, hasServiceConnectedDisabilities } =
      letterBeneficiaryData?.benefitInformation || ({} as LetterBenefitInformation)

    const text = t('letters.benefitService.monthlyAwardAndEffectiveDate', {
      monthlyAwardAmount: roundToHundredthsPlace(monthlyAwardAmount || 0),
      date: awardEffectiveDate ? formatDateMMMMDDYYYY(awardEffectiveDate) : t('letters.benefitService.effectiveDateInvalid'),
    })

    toggleListItems.push({
      text: text,
      testId: text.replace(',', ''),
      onPress: (): void => setMonthlyAwardToggle(!monthlyAwardToggle),
      decorator: ButtonDecoratorType.Switch,
      decoratorProps: {
        on: monthlyAwardToggle,
        a11yHint: t('letters.benefitService.monthlyAwardA11yHint'),
        testID: 'monthly-award',
      },
    })

    if (serviceConnectedPercentage) {
      const percentText = t('letters.benefitService.combinedServiceConnectingRating', {
        rating: serviceConnectedPercentage,
      })
      toggleListItems.push({
        text: percentText,
        testId: percentText,
        onPress: (): void => setCombinedServiceRatingToggle(!combinedServiceRatingToggle),
        decorator: ButtonDecoratorType.Switch,
        decoratorProps: {
          on: combinedServiceRatingToggle,
          a11yHint: t('letters.benefitService.combinedServiceConnectingRatingA11yHint'),
          testID: 'combined-service-connected-rating',
        },
      })
    }

    const nonDataDrivenData: Array<SimpleListItemObj> = [
      {
        text: t('letters.benefitService.disabledDueToService', { areOrNot: hasChapter35Eligibility ? 'are' : "aren't" }),
        onPress: (): void => setDisabledDueToServiceToggle(!disabledDueToServiceToggle),
        decorator: ButtonDecoratorType.Switch,
        decoratorProps: {
          on: disabledDueToServiceToggle,
          a11yHint: t('letters.benefitService.disabledDueToServiceA11yHint'),
          testID: 'permanently-disabled-due-to-service',
        },
      },
      {
        text: t('letters.benefitService.oneOrMoreServiceDisabilities', { haveOrNot: hasServiceConnectedDisabilities ? 'have' : "don't have" }),
        onPress: (): void => setAtLeastOneServiceDisabilityToggle(!atLeastOneServiceDisabilityToggle),
        decorator: ButtonDecoratorType.Switch,
        decoratorProps: {
          on: atLeastOneServiceDisabilityToggle,
          a11yHint: t('letters.benefitService.oneOrMoreServiceDisabilitiesA11yHint'),
          testID: 'number-of-service-connected-disabilities',
        },
      },
    ]

    return [...toggleListItems, ...nonDataDrivenData]
  }

  const onViewLetter = (): void => {
    const letterOptions: BenefitSummaryAndServiceVerificationLetterOptions = {
      militaryService: includeMilitaryServiceInfoToggle,
      monthlyAward: monthlyAwardToggle,
      serviceConnectedEvaluation: combinedServiceRatingToggle,
      chapter35Eligibility: disabledDueToServiceToggle,
      serviceConnectedDisabilities: atLeastOneServiceDisabilityToggle,
    }

    dispatch(downloadLetter(LetterTypeConstants.benefitSummary, letterOptions))
  }

  const loadingCheck = loadingLetterBeneficiaryData || downloading || !letterBeneficiaryData

  return (
    <FeatureLandingTemplate
      backLabel={t('letters.overview.viewLetters')}
      backLabelOnPress={navigation.goBack}
      title={t('letters.details.title')}
      testID="BenefitSummaryServiceVerificationTestID">
      {letterDownloadError ? (
        <BasicError onTryAgain={onViewLetter} messageText={t('letters.download.error')} buttonA11yHint={t('letters.download.tryAgain.a11y')} />
      ) : loadingCheck ? (
        <LoadingComponent text={t(downloading ? 'letters.loading' : 'letters.benefitService.loading')} />
      ) : (
        <Box mb={theme.dimensions.contentMarginBottom}>
          <TextArea>
            <TextView variant="MobileBodyBold" accessibilityRole="header">
              {t('letters.benefitService.title')}
            </TextView>
            <TextView variant="MobileBody" mt={theme.dimensions.standardMarginBetween}>
              {t('letters.benefitService.summary')}
            </TextView>
          </TextArea>

          <TextView variant="MobileBodyBold" mt={theme.dimensions.standardMarginBetween} mx={theme.dimensions.gutter} accessibilityRole="header" paragraphSpacing={true}>
            {t('letters.benefitService.chooseIncludedInformation')}
          </TextView>
          {getListOfMilitaryService()}
          <TextView variant="TableFooterLabel" mx={theme.dimensions.gutter} mb={theme.dimensions.standardMarginBetween}>
            {t('letters.benefitService.ourRecordsShow')}
          </TextView>
          <SimpleList items={includeMilitaryServiceInfoList} />

          <SimpleList
            items={getBenefitAndDisabilityToggleList()}
            title={t('letters.benefitService.benefitAndDisabilityInfo')}
            titleA11yLabel={a11yLabelVA(t('letters.benefitService.benefitAndDisabilityInfo'))}
          />

          <TextView accessibilityLabel={a11yLabelVA(t('letters.benefitService.sendMessageIfIncorrectInfo'))} variant="MobileBody" m={theme.dimensions.standardMarginBetween}>
            {t('letters.benefitService.sendMessageIfIncorrectInfo')}
          </TextView>

          <Box ml={theme.dimensions.gutter} mb={theme.dimensions.standardMarginBetween}>
            <ClickForActionLink
              displayedText={t('letters.benefitService.sendMessage')}
              linkType={LinkTypeOptionsConstants.url}
              numberOrUrlLink={LINK_URL_ASK_VA_GOV}
              linkUrlIconType={LinkUrlIconType.Arrow}
              {...a11yHintProp(t('letters.benefitService.sendMessageA11yHint'))}
              a11yLabel={a11yLabelVA(t('letters.benefitService.sendMessage'))}
            />
          </Box>

          <Box mx={theme.dimensions.gutter}>
            <Button onPress={onViewLetter} label={t('letters.benefitService.viewLetter')} testID={t('letters.benefitService.viewLetter')} />
          </Box>
        </Box>
      )}
    </FeatureLandingTemplate>
  )
}

export default BenefitSummaryServiceVerification
