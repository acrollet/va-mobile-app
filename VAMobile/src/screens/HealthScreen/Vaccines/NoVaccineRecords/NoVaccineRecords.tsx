import { useTranslation } from 'react-i18next'
import React, { FC } from 'react'

import { AlertBox, Box, ClickToCallPhoneNumber, TextView, VAScrollView } from 'components'
import { NAMESPACE } from 'constants/namespaces'

const NoVaccineRecords: FC = () => {
  const { t } = useTranslation([NAMESPACE.HEALTH, NAMESPACE.COMMON])

  return (
    <VAScrollView>
      <Box>
        <AlertBox title={t('health:noVaccineRecords.alert.title')} border="informational" text={t('health:noVaccineRecords.alert.text.1')}>
          <TextView paragraphSpacing={true} variant="MobileBody">
            {t('health:noVaccineRecords.alert.text.2')}
          </TextView>
          <ClickToCallPhoneNumber phone={t('common:8006982411')} displayedText={t('common:8006982411.displayText')} />
        </AlertBox>
      </Box>
    </VAScrollView>
  )
}

export default NoVaccineRecords
