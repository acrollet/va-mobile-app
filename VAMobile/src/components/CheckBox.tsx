import { TouchableWithoutFeedback } from 'react-native'
import React, { FC } from 'react'

import { testIdProps } from 'utils/accessibility'
import Box from './Box'
import TextView from './TextView'
import VAIcon, { VAIconProps } from './VAIcon'

/**
 * Signifies props for the component {@link CheckBox}
 */
export type CheckBoxProps = {
  /** when true displays the filled checkbox, when false displays the empty checkbox */
  selected: boolean
  /** sets the value of selected on click of the checkbox */
  onSelectionChange: (selected: boolean) => void
  /** label displayed next to the checkbox */
  label: string
}

const CheckBox: FC<CheckBoxProps> = ({ selected, onSelectionChange, label }) => {
  const checkBoxOnPress = (): void => {
    onSelectionChange(!selected)
  }

  const getCheckBoxIcon = (): React.ReactNode => {
    const name = selected ? 'FilledCheckBox' : 'EmptyCheckBox'
    const fill = selected ? 'checkboxEnabledPrimary' : 'checkboxDisabledContrast'
    const stroke = selected ? 'checkboxEnabledPrimary' : 'checkboxDisabled'

    const checkBoxIconProps: VAIconProps = {
      name,
      fill,
      stroke,
      width: 22,
      height: 22,
    }

    return <VAIcon {...checkBoxIconProps} {...testIdProps(name)} />
  }

  return (
    <TouchableWithoutFeedback onPress={checkBoxOnPress} accessibilityState={{ checked: selected }}>
      <Box flexDirection="row">
        <Box {...testIdProps('checkbox-with-label')}>{getCheckBoxIcon()}</Box>
        <TextView variant="MobileBody" ml={10} mr={40}>
          {label}
        </TextView>
      </Box>
    </TouchableWithoutFeedback>
  )
}

export default CheckBox
