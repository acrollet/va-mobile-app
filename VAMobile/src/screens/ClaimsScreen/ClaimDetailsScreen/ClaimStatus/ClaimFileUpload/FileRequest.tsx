import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { map } from 'underscore'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { Box, ButtonTypesConstants, ErrorComponent, SimpleList, SimpleListItemObj, TextArea, TextView, VAButton, VAScrollView } from 'components'
import { ClaimsAndAppealsState } from 'store/slices/claimsAndAppealsSlice'
import { ClaimsStackParamList } from '../../../ClaimsStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { currentRequestsForVet, numberOfItemsNeedingAttentionFromVet } from 'utils/claims'
import { testIdProps } from 'utils/accessibility'
import { useError, useRouteNavigation, useTheme } from 'utils/hooks'

type FileRequestProps = StackScreenProps<ClaimsStackParamList, 'FileRequest'>

const FileRequest: FC<FileRequestProps> = ({ route }) => {
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.CLAIMS)
  const navigateTo = useRouteNavigation()
  const { claimID } = route.params
  const { claim } = useSelector<RootState, ClaimsAndAppealsState>((state) => state.claimsAndAppeals)
  const requests = currentRequestsForVet(claim?.attributes.eventsTimeline || [])
  const { condensedMarginBetween, contentMarginBottom, contentMarginTop, standardMarginBetween, gutter } = theme.dimensions

  const numberOfRequests = numberOfItemsNeedingAttentionFromVet(claim?.attributes.eventsTimeline || [])

  const getRequests = (): Array<SimpleListItemObj> => {
    let requestNumber = 1

    return map(requests, (request) => {
      const { displayName, uploaded } = request

      const item: SimpleListItemObj = {
        text: displayName || '',
        testId: displayName,
        onPress: navigateTo('FileRequestDetails', { request }),
        claimsRequestNumber: requestNumber,
        fileUploaded: uploaded,
        a11yHintText: t('fileRequest.buttonA11yHint'),
      }

      if (!uploaded) {
        requestNumber++
      }

      return item
    })
  }

  if (useError(ScreenIDTypesConstants.CLAIM_FILE_UPLOAD_SCREEN_ID)) {
    return <ErrorComponent screenID={ScreenIDTypesConstants.CLAIM_FILE_UPLOAD_SCREEN_ID} />
  }

  return (
    <VAScrollView {...testIdProps('file-request-page')}>
      <Box mt={contentMarginTop} mb={contentMarginBottom}>
        <TextView variant="MobileBodyBold" accessibilityRole="header" mt={standardMarginBetween} mb={condensedMarginBetween} mx={gutter}>
          {t(`claimPhase.youHaveFileRequest${numberOfRequests !== 1 ? 's' : ''}`, { numberOfRequests })}
        </TextView>
        <Box>
          <SimpleList items={getRequests()} />
        </Box>
        <TextView mt={condensedMarginBetween} mx={gutter} mb={contentMarginBottom} variant="HelperText" accessibilityRole="header">
          {t('fileRequest.weSentYouALaterText')}
        </TextView>
        <Box mt={standardMarginBetween}>
          <TextArea>
            <TextView mb={standardMarginBetween} variant="MobileBodyBold" accessibilityRole="header">
              {t('fileRequest.askForYourClaimEvaluationTitle')}
            </TextView>
            <TextView variant="MobileBody">{t('fileRequest.askForYourClaimEvaluationBody')}</TextView>
            <Box mt={standardMarginBetween}>
              <VAButton
                onPress={navigateTo('AskForClaimDecision', { claimID })}
                label={t('fileRequest.viewEvaluationDetails')}
                testID={t('fileRequest.viewEvaluationDetails')}
                buttonType={ButtonTypesConstants.buttonPrimary}
                a11yHint={t('fileRequest.viewEvaluationDetails')}
              />
            </Box>
          </TextArea>
        </Box>
      </Box>
    </VAScrollView>
  )
}

export default FileRequest
