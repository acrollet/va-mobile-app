import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'

import { Box, ClickForActionLink, CollapsibleAlert, LinkButtonProps, LinkTypeOptionsConstants, LinkUrlIconType, TextView } from 'components'
import { Events } from 'constants/analytics'
import { Facility } from 'api/types/FacilityData'
import { NAMESPACE } from 'constants/namespaces'
import { a11yLabelVA } from 'utils/a11yLabel'
import { logAnalyticsEvent } from 'utils/analytics'
import { useFacilitiesInfo } from 'api/facilities/getFacilitiesInfo'
import { useTheme } from 'utils/hooks'
import getEnv from 'utils/env'

const { LINK_URL_GO_TO_PATIENT_PORTAL } = getEnv()

function CernerAlert() {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const theme = useTheme()
  const { data: facilitiesInfo } = useFacilitiesInfo()

  const cernerFacilities = facilitiesInfo?.filter((f) => f.cerner) || []

  useEffect(() => {
    cernerFacilities.length && logAnalyticsEvent(Events.vama_cerner_alert())
  }, [cernerFacilities.length])

  if (!facilitiesInfo) {
    return null
  }

  // if no cerner facilities then do not show the alert
  if (!cernerFacilities.length) {
    return null
  }

  // if facilities === cernerFacilities size then that means all facilities are cernerFacilities
  const allCernerFacilities = facilitiesInfo.length === cernerFacilities.length
  const headerText = allCernerFacilities ? t('cernerAlert.header.all') : t('cernerAlert.header.some')
  const headerA11yLabel = allCernerFacilities ? a11yLabelVA(t('cernerAlert.header.all')) : a11yLabelVA(t('cernerAlert.header.some'))

  function accordionContent() {
    const body = cernerFacilities.map((facility: Facility) => {
      return (
        <TextView
          variant="MobileBodyBold"
          key={facility.id}
          mb={theme.dimensions.standardMarginBetween}
          selectable={true}
          accessibilityLabel={`${facility.name} (${a11yLabelVA(t('cernerAlert.nowUsing'))})`}>
          {facility.name}
          <TextView variant="MobileBody">{` (${t('cernerAlert.nowUsing')})`}</TextView>
        </TextView>
      )
    })

    const linkToCallProps: LinkButtonProps = {
      displayedText: t('goToMyVAHealth'),
      linkType: LinkTypeOptionsConstants.url,
      linkUrlIconType: LinkUrlIconType.Arrow,
      numberOrUrlLink: LINK_URL_GO_TO_PATIENT_PORTAL,
      a11yLabel: a11yLabelVA(t('goToMyVAHealth')),
      testID: 'goToMyVAHealthTestID',
    }

    return (
      <Box mt={theme.paragraphSpacing.spacing20FontSize}>
        <TextView variant="MobileBody" paragraphSpacing={true}>
          {t('cernerAlert.ourRecordsShow')}
        </TextView>
        {body}
        <TextView variant="MobileBody" paragraphSpacing={true} accessibilityLabel={a11yLabelVA(t('cernerAlert.footer'))}>
          {t('cernerAlert.footer')}
        </TextView>
        <ClickForActionLink {...linkToCallProps} />
      </Box>
    )
  }

  return (
    <CollapsibleAlert
      border="warning"
      headerText={headerText}
      body={accordionContent()}
      a11yLabel={headerA11yLabel}
      onExpand={() => logAnalyticsEvent(Events.vama_cerner_alert_exp())}
    />
  )
}

export default CernerAlert
