import React from 'react'

import _ from 'underscore'

import { AppealEventData } from 'store/api/types'
import { Box } from 'components'
import AppealPhase from './AppealPhase'

type AppealTimelineProps = {
  events: Array<AppealEventData>
}

function AppealTimeline({ events }: AppealTimelineProps) {
  return (
    <Box>
      {_.map(events, (event, index) => {
        return <AppealPhase event={event} key={index} />
      })}
    </Box>
  )
}

export default AppealTimeline
