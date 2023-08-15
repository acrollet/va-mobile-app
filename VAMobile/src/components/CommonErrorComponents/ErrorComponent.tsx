import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { CallHelpCenter, DowntimeError, NetworkConnectionError } from 'components'
import { CommonErrorTypesConstants } from 'constants/errors'
import { DowntimeScreenIDToFeature, ScreenIDTypes } from 'store/api/types'
import { ErrorsState } from 'store/slices'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { useDowntime } from 'utils/hooks'

export type ErrorComponentProps = {
  /**The screen id for the screen that has the errors*/
  screenID: ScreenIDTypes
  /** optional function called when the Try again button is pressed */
  onTryAgain?: () => void
  /**Override the feature name in the event that a feature happens to share the same api error(ex:contact information and personal information) */
  overrideFeatureName?: string
}

/**Main error handling component. This component will show the proper screen according to the type of error.*/
const ErrorComponent: FC<ErrorComponentProps> = (props) => {
  const { errorsByScreenID, tryAgain: storeTryAgain } = useSelector<RootState, ErrorsState>((state) => state.errors)
  const { t } = useTranslation(NAMESPACE.COMMON)
  const isInDowntime = useDowntime(DowntimeScreenIDToFeature[props.screenID])

  const getSpecificErrorComponent: FC<ErrorComponentProps> = ({ onTryAgain, screenID, overrideFeatureName }) => {
    const tryAgain = onTryAgain ? onTryAgain : storeTryAgain
    const errorType = errorsByScreenID[screenID] || ''

    if (isInDowntime) {
      return <DowntimeError screenID={screenID} overrideFeatureName={overrideFeatureName} />
    }
    // check which specific error occurred and return the corresponding error element
    switch (errorType) {
      case CommonErrorTypesConstants.NETWORK_CONNECTION_ERROR:
        return <NetworkConnectionError onTryAgain={tryAgain} />
      case CommonErrorTypesConstants.APP_LEVEL_ERROR:
        return <CallHelpCenter />
      case CommonErrorTypesConstants.APP_LEVEL_ERROR_WITH_REFRESH:
        return <CallHelpCenter onTryAgain={tryAgain} />
      case CommonErrorTypesConstants.APP_LEVEL_ERROR_HEALTH_LOAD:
        return (
          <CallHelpCenter
            onTryAgain={tryAgain}
            errorText={t('secureMessaging.sendError.ifTheAppStill')}
            errorA11y={t('secureMessaging.sendError.ifTheAppStill.a11y')}
            callPhone={t('8773270022.displayText')}
          />
        )
      case CommonErrorTypesConstants.APP_LEVEL_ERROR_DISABILITY_RATING:
        return (
          <CallHelpCenter titleText={t('disabilityRating.errorTitle')} titleA11yHint={t('disabilityRating.errorTitleA11y')} callPhone={t('disabilityRating.errorPhoneNumber')} />
        )
      case CommonErrorTypesConstants.APP_LEVEL_ERROR_VACCINE:
        return <CallHelpCenter onTryAgain={tryAgain} titleText={t('errors.callHelpCenter.vaAppNotWorking')} callPhone={t('8006982411.displayText')} />
      default:
        return <CallHelpCenter onTryAgain={tryAgain} />
    }
  }

  return getSpecificErrorComponent(props)
}

export default ErrorComponent
