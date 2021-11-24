import { useSelector } from 'react-redux'
import React, { FC } from 'react'

import { Box, TextView } from 'components'
import { ClaimsAndAppealsState, StoreState } from 'store/reducers'
import { NAMESPACE } from 'constants/namespaces'
import { testIdProps } from 'utils/accessibility'
import { useTheme, useTranslation } from 'utils/hooks'

const NoClaimsAndAppeals: FC = () => {
  const t = useTranslation(NAMESPACE.CLAIMS)
  const theme = useTheme()
  const { claimsServiceError, appealsServiceError } = useSelector<StoreState, ClaimsAndAppealsState>((state) => state.claimsAndAppeals)

  let header = t('noClaims.youDontHaveAnyClaimsOrAppeals')
  let text = t('noClaims.appOnlyShowsCompletedClaimsAndAppeals')

  if (claimsServiceError) {
    header = t('noClaims.youDontHaveAnyAppeals')
    text = t('noClaims.appOnlyShowsCompletedAppeals')
  } else if (appealsServiceError) {
    header = t('noClaims.youDontHaveAnyClaims')
    text = t('noClaims.appOnlyShowsCompletedClaims')
  }

  return (
    <Box flex={1} justifyContent="center" mx={theme.dimensions.gutter} {...testIdProps('Claims: No-claims-page')} alignItems="center">
      <Box {...testIdProps(header)} accessible={true}>
        <TextView variant="MobileBodyBold" color={'primaryTitle'} textAlign="center" accessibilityRole="header">
          {header}
        </TextView>
      </Box>
      <Box {...testIdProps(text)} accessible={true}>
        <TextView variant="MobileBody" textAlign="center" my={theme.dimensions.standardMarginBetween}>
          {text}
        </TextView>
      </Box>
    </Box>
  )
}

export default NoClaimsAndAppeals
