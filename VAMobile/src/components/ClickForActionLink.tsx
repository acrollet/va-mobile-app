import { AccessibilityProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native'
import Box from './Box'
import React, { FC } from 'react'

import { addToCalendar, checkCalendarPermission, requestCalendarPermission } from 'utils/rnCalendar'
import { useExternalLink, useTheme } from 'utils/hooks'
import TextView, { ColorVariant, TextViewProps } from './TextView'
import VAIcon, { VA_ICON_MAP } from './VAIcon'

/** Icon type for links, defaults to Chat */
export enum LinkUrlIconType {
  /** Signifies icon with chat bubbles */
  Chat = 'Chat',
  /** Signifies icon with right pointing arrow */
  Arrow = 'Arrow',
}

export const LinkTypeOptionsConstants: {
  text: LinkTypeOptions
  call: LinkTypeOptions
  callTTY: LinkTypeOptions
  url: LinkTypeOptions
  calendar: LinkTypeOptions
  directions: LinkTypeOptions
  externalLink: LinkTypeOptions
} = {
  text: 'text',
  call: 'call',
  callTTY: 'callTTY',
  url: 'url',
  calendar: 'calendar',
  directions: 'directions',
  externalLink: 'externalLink',
}
type LinkTypeOptions = 'text' | 'call' | 'callTTY' | 'url' | 'calendar' | 'directions' | 'externalLink'

export type CalendarMetaData = {
  title: string
  startTime: number
  endTime: number
  location: string
  latitude: number
  longitude: number
}

export type ActionLinkMetaData = CalendarMetaData

/**
 *  Signifies the props that need to be passed in to {@link ClickForActionLink}
 */
export type LinkButtonProps = AccessibilityProps & {
  /** phone number or text for url that is displayed to the user, may be different than actual number or url used */
  displayedText: string

  /** string signifying the type of link it is (click to call/text/go to website/add to calendar) */
  linkType: LinkTypeOptions

  /** signifies actual link or number used for link, may be different than text displayed */
  numberOrUrlLink?: string

  /** signifies icon type of link */
  linkUrlIconType?: LinkUrlIconType

  /** object with additional data needed to perform the given action */
  metaData?: ActionLinkMetaData

  /** Accessibility label for the link, mandatory for every element with a link role */
  a11yLabel: string

  /** optional function to fire analytic events when the link is clicked */
  fireAnalytic?: () => void
  /** color bypass */
  colorOverride?: string
  /** Optional TestID */
  testID?: string
}

/**
 * Reusable component used for opening native calling app, texting app, or opening a url in the browser
 */
const ClickForActionLink: FC<LinkButtonProps> = ({
  displayedText,
  linkType,
  numberOrUrlLink,
  linkUrlIconType,
  metaData,
  a11yLabel,
  fireAnalytic,
  colorOverride,
  testID,
  ...props
}) => {
  const theme = useTheme()
  const launchExternalLink = useExternalLink()

  const onCalendarPress = async (): Promise<void> => {
    const { title, endTime, startTime, location, latitude, longitude } = metaData as ActionLinkMetaData

    let hasPermission = await checkCalendarPermission()
    if (!hasPermission) {
      hasPermission = await requestCalendarPermission()
    }

    if (hasPermission) {
      await addToCalendar(title, startTime, endTime, location, latitude, longitude)
    }
  }

  const _onPress = async (): Promise<void> => {
    if (fireAnalytic) {
      fireAnalytic()
    }

    if (linkType === LinkTypeOptionsConstants.calendar) {
      await onCalendarPress()
      return
    }

    let openUrlText = numberOrUrlLink || ''
    if (linkType === LinkTypeOptionsConstants.call || linkType === LinkTypeOptionsConstants.callTTY) {
      openUrlText = `tel:${numberOrUrlLink}`
    } else if (linkType === LinkTypeOptionsConstants.text) {
      openUrlText = `sms:${numberOrUrlLink}`
    }

    // ex. numbers: tel:${8008271000}, sms:${8008271000} (number must have no dashes)
    // ex. url: https://google.com (need https for url)
    launchExternalLink(openUrlText)
  }

  const getUrlIcon = (): keyof typeof VA_ICON_MAP => {
    switch (linkUrlIconType) {
      case LinkUrlIconType.Arrow:
        return 'RightArrowInCircle'
      default:
        return 'Chat'
    }
  }

  const getIconName = (): keyof typeof VA_ICON_MAP => {
    switch (linkType) {
      case 'call':
        return 'CirclePhone'
      case 'callTTY':
        return 'PhoneTTY'
      case 'text':
        return 'Text'
      case 'url':
        return getUrlIcon()
      case 'calendar':
        return 'Calendar'
      case 'directions':
        return 'Directions'
      case 'externalLink':
        return 'CircleExternalLink'
    }
  }

  const textViewProps: TextViewProps = {
    color: colorOverride ? (colorOverride as ColorVariant) : 'link',
    variant: 'MobileBody',
    ml: 4,
    textDecoration: 'underline',
    textDecorationColor: colorOverride ? (colorOverride as ColorVariant) : 'link',
  }

  const pressableProps: TouchableWithoutFeedbackProps = {
    onPress: _onPress,
    accessibilityLabel: a11yLabel,
    accessibilityRole: 'link',
    accessible: true,
    ...props,
  }

  return (
    <TouchableWithoutFeedback testID={testID} {...pressableProps}>
      <Box flexDirection={'row'} py={theme.dimensions.buttonPadding} alignItems={'center'}>
        <VAIcon name={getIconName()} fill={colorOverride ? (colorOverride as ColorVariant) : 'link'} fill2={colorOverride ? 'transparent' : ''} width={25} height={25} />
        <Box flexShrink={1}>
          <TextView {...textViewProps}>{displayedText}</TextView>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  )
}

export default ClickForActionLink
