import { AccessibilityProps, Switch as RNSwitch } from 'react-native'
import React, { FC } from 'react'

import { useTheme } from 'utils/hooks'
import styled from 'styled-components/native'

const StyledRNSwitch = styled(RNSwitch)`
  shadow-opacity: 0.3;
  shadow-radius: 1px;
  shadow-offset: 0px 0.5px;
  min-width: 51px;
`
/**
 * Signifies props passed into {@link Switch}
 */
export type SwitchProps = AccessibilityProps & {
  /** callback called on value change of the switch */
  onPress: (value: boolean) => void
  /** optional value of switch, updated with onPress */
  on?: boolean
  /** optional testID of switch */
  testID?: string
}

const Switch: FC<SwitchProps> = (props) => {
  const { onPress, on, testID } = props
  const theme = useTheme()
  return (
    <StyledRNSwitch
      trackColor={{ false: theme.colors.control.switchOffTrack, true: theme.colors.control.switchOnTrack }}
      thumbColor={theme.colors.control.switchOnThumb}
      onValueChange={onPress}
      value={!!on}
      testID={testID}
    />
  )
}

export default Switch
