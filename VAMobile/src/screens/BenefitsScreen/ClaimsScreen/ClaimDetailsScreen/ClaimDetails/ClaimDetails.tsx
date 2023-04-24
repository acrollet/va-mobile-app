import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { Box, TextArea, TextView, VABulletList } from 'components'
import { ClaimData } from 'store/api/types'
import { NAMESPACE } from 'constants/namespaces'
import { formatDateMMMMDDYYYY } from 'utils/formattingUtils'

type ClaimDetailsProps = {
  claim: ClaimData
}

/**
 * Content displayed in the details tab on the claim details screen
 *
 * @param claim - contains data to be displayed
 * @returns ClaimDetails component displaying claim data
 */
const ClaimDetails: FC<ClaimDetailsProps> = ({ claim }) => {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const { attributes } = claim

  const formattedDateFiled = formatDateMMMMDDYYYY(attributes?.dateFiled || '')

  return (
    <Box>
      <TextArea>
        <TextView variant="MobileBodyBold">{t('claimDetails.claimType')}</TextView>
        <TextView variant="MobileBody" paragraphSpacing={true}>
          {attributes?.claimType || t('noneNoted')}
        </TextView>
        <TextView variant="MobileBodyBold">{t('claimDetails.whatYouHaveClaimed')}</TextView>
        {attributes?.contentionList && attributes.contentionList.length > 0 ? (
          <VABulletList listOfText={attributes.contentionList} paragraphSpacing={true} />
        ) : (
          <TextView variant="MobileBody" paragraphSpacing={true}>
            {t('noneNoted')}
          </TextView>
        )}
        <TextView variant="MobileBodyBold">{t('claimDetails.dateReceived')}</TextView>
        <TextView variant="MobileBody" paragraphSpacing={true}>
          {formattedDateFiled}
        </TextView>
        <TextView accessibilityLabel={t('claimDetails.yourRepresentative.a11yLabel')} variant="MobileBodyBold">
          {t('claimDetails.yourRepresentative')}
        </TextView>
        <TextView variant="MobileBody">{attributes?.vaRepresentative || t('noneNoted')}</TextView>
      </TextArea>
    </Box>
  )
}

export default ClaimDetails
