import { StackScreenProps } from '@react-navigation/stack'
import React, { FC } from 'react'

import { Alert } from 'react-native'
import { AlertBox, BasicError, Box, ButtonTypesConstants, LoadingComponent, TextArea, TextView, VAButton, VAScrollView } from 'components'
import { DemoState } from 'store/slices/demoSlice'
import { LetterTypeConstants } from 'store/api/types'
import { LettersState, downloadLetter } from 'store/slices/lettersSlice'
import { NAMESPACE } from 'constants/namespaces'
import { ProfileStackParamList } from '../../ProfileStackScreens'
import { RootState } from 'store'
import { generateTestID } from 'utils/common'
import { testIdProps } from 'utils/accessibility'
import { useAppDispatch, useTheme, useTranslation } from 'utils/hooks'
import { useSelector } from 'react-redux'

type GenericLetterProps = StackScreenProps<ProfileStackParamList, 'GenericLetter'>

const GenericLetter: FC<GenericLetterProps> = ({ route }) => {
  const t = useTranslation(NAMESPACE.PROFILE)
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { header, description, letterType, descriptionA11yLabel } = route.params
  const { downloading, letterDownloadError } = useSelector<RootState, LettersState>((state) => state.letters)

  const { demoMode } = useSelector<RootState, DemoState>((state) => state.demo)
  const onViewLetter = (): void => {
    if (demoMode) {
      Alert.alert('Demo Mode', 'Letters are not available to download for demo user')
    } else {
      dispatch(downloadLetter(letterType))
    }
  }

  if (letterDownloadError) {
    return <BasicError onTryAgain={onViewLetter} messageText={t('letters.download.error')} buttonA11yHint={t('Try again to download your letter')} />
  }

  if (downloading) {
    return <LoadingComponent text={t('letters.loading')} />
  }

  return (
    <VAScrollView {...testIdProps(`Letters: ${generateTestID(header, 'page')}`)}>
      <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom}>
        <TextArea>
          <TextView variant="MobileBodyBold" accessibilityRole="header">
            {header}
          </TextView>
          <TextView {...testIdProps(descriptionA11yLabel || description)} variant="MobileBody" my={theme.dimensions.standardMarginBetween}>
            {description}
          </TextView>
          {letterType === LetterTypeConstants.serviceVerification && (
            <Box mb={theme.dimensions.standardMarginBetween}>
              <AlertBox border="informational" background="cardBackground" text={t('letters.serviceVerificationLetter.informational')} />
            </Box>
          )}
          <VAButton
            onPress={onViewLetter}
            label={t('letters.benefitService.viewLetter')}
            testID={t('letters.benefitService.viewLetter')}
            buttonType={ButtonTypesConstants.buttonPrimary}
            a11yHint={t('letters.serviceVerificationLetter.viewLetterA11yHint')}
          />
        </TextArea>
      </Box>
    </VAScrollView>
  )
}

export default GenericLetter
