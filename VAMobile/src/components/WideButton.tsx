import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native'
import React, { FC } from 'react'

import _ from 'underscore'

import { TextLine } from './types'
import { a11yHintProp, testIdProps } from 'utils/accessibility'
import { generateTestID } from 'utils/common'
import { isIOS } from 'utils/platform'
import { useTheme } from 'utils/hooks'
import Box, { BoxProps } from './Box'
import SwitchComponent, { SwitchProps } from './Switch'
import TextView from './TextView'
import VAIcon, { VAIconProps } from './VAIcon'

/** Decorator type for the button, defaults to Navigation (right arrow) */
export enum ButtonDecoratorType {
  /** Switch button decorator */
  Switch = 'Switch',
  /** Navigation arrow decorator */
  Navigation = 'Navigation',
}

export type WideButtonDecoratorProps = Partial<VAIconProps> | Partial<SwitchProps>

/**
 * Props for WideButton
 */
export type WideButtonProps = {
  /** List of text for the button */
  listOfText?: Array<TextLine>

  /** optional test id string, if not supplied will generate one from first line of text */
  testId?: string

  /** The ally1 hint text */
  a11yHint: string

  /** onPress callback */
  onPress?: () => void

  /** Decorator Type to use */
  decorator?: ButtonDecoratorType

  /** Optional props to be passed to the decorator */
  decoratorProps?: WideButtonDecoratorProps

  /** Optional child elements to use insetead of listOfText if you need to do special styling */
  children?: React.ReactNode
}

const ButtonDecorator: FC<{ decorator?: ButtonDecoratorType; decoratorProps?: WideButtonDecoratorProps; onPress: () => void }> = ({ decorator, decoratorProps, onPress }) => {
  const theme = useTheme()

  switch (decorator) {
    case ButtonDecoratorType.Switch:
      return (
        <Box ml={theme.dimensions.switchMarginLeft}>
          <SwitchComponent onPress={onPress} {...decoratorProps} />
        </Box>
      )
    default:
      return <VAIcon name={'ArrowRight'} fill="#999999" width={10} height={15} {...decoratorProps} />
  }
}

/**
 * Reusable component for menu items that take up the full width of the screen that is touchable.
 * @returns WideButton component
 */
const WideButton: FC<WideButtonProps> = (props) => {
  const { listOfText, onPress, a11yHint, decorator, decoratorProps, testId, children } = props

  const isSwitchRow = decorator === ButtonDecoratorType.Switch

  const listOfTextID: Array<string> = []
  if (listOfText) {
    _.forEach(listOfText, (listOfTextItem) => {
      listOfTextID.push(listOfTextItem.text)
    })
  }

  const viewTestId = testId ? testId : generateTestID(listOfText ? listOfTextID.join(' ') : '', '')

  const onOuterPress = (): void => {
    // nooop for switch types, need to press on the switch specifically
    if (onPress && !(isSwitchRow && isIOS())) {
      onPress()
    }
  }

  const onDecoratorPress = (): void => {
    // if we're a switch type, need to handle the press on the decorator specifically
    if (isSwitchRow && onPress) {
      onPress()
    }
  }

  const touchableProps: TouchableWithoutFeedbackProps = {
    disabled: isSwitchRow && isIOS(),
    onPress: onOuterPress,
    accessible: true,
    accessibilityRole: 'menuitem',
  }

  const boxProps: BoxProps = {
    width: '100%',
    minHeight: 44,
    py: 10,
    px: 20,
    borderBottomWidth: 1,
    borderColor: 'primary',
    borderStyle: 'solid',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  }

  return (
    <TouchableWithoutFeedback {...testIdProps(viewTestId)} {...a11yHintProp(a11yHint)} {...touchableProps}>
      <Box {...boxProps}>
        <Box flex={1}>
          <Box flexDirection="column">
            {listOfText?.map((textObj, index) => {
              const { text, isBold } = textObj

              const variant = isBold ? 'MobileBodyBold' : undefined

              return (
                <TextView variant={variant} {...testIdProps(text + '-title')} key={index}>
                  {text}
                </TextView>
              )
            })}
          </Box>
        </Box>
        {children}
        {onPress && <ButtonDecorator decorator={decorator} onPress={onDecoratorPress} decoratorProps={decoratorProps} />}
      </Box>
    </TouchableWithoutFeedback>
  )
}

export default WideButton
