import { useTranslation } from 'react-i18next'
import React, { FC, useEffect } from 'react'

import { AlertBox, Box, BoxProps, ClickToCallPhoneNumber, TextView, VABulletList, VAScrollView } from 'components'
import { Events } from 'constants/analytics'
import { NAMESPACE } from 'constants/namespaces'
import { a11yLabelVA } from 'utils/a11yLabel'
import { displayedTextPhoneNumber } from 'utils/formattingUtils'
import { logAnalyticsEvent } from 'utils/analytics'
import { useTheme } from 'utils/hooks'

const PrescriptionHistoryNoPrescriptions: FC = () => {
  const theme = useTheme()
  const { t } = useTranslation(NAMESPACE.COMMON)

  useEffect(() => {
    logAnalyticsEvent(Events.vama_rx_na())
  }, [])

  const alertWrapperProps: BoxProps = {
    mb: theme.dimensions.contentMarginBottom,
  }

  const bullets: string[] = [
    t('prescriptions.notFound.bullets.one'),
    t('prescriptions.notFound.bullets.two'),
    t('prescriptions.notFound.bullets.three'),
    t('prescriptions.notFound.bullets.four'),
  ]

  return (
    <VAScrollView>
      <Box {...alertWrapperProps}>
        <AlertBox border={'informational'} title={t('prescriptions.notFound.title')} titleA11yLabel={a11yLabelVA(t('prescriptions.notFound.title'))}>
          <TextView pt={theme.paragraphSpacing.spacing20FontSize} paragraphSpacing={true} accessibilityLabel={a11yLabelVA(t('prescriptions.notFound.yourVA'))}>
            {t('prescriptions.notFound.yourVA')}
          </TextView>
          <VABulletList listOfText={bullets} paragraphSpacing={true} />
          <TextView paragraphSpacing={true}>{t('prescriptions.notFound.bullets.ifYouThink')}</TextView>
          <ClickToCallPhoneNumber displayedText={displayedTextPhoneNumber(t('8773270022'))} phone={t('8773270022')} />
        </AlertBox>
      </Box>
    </VAScrollView>
  )
}

export default PrescriptionHistoryNoPrescriptions
