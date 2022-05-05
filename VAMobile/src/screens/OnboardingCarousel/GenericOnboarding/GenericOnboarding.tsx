import { View, ViewStyle } from 'react-native'
import React, { FC } from 'react'

import { Box, TextView, TextViewProps, VABulletList, VABulletListText, VAIcon, VAScrollView } from 'components'
import { testIdProps } from 'utils/accessibility'
import { useAccessibilityFocus, useTheme } from 'utils/hooks'
import { useFocusEffect } from '@react-navigation/native'

export type GenericOnboardingProps = {
  header: string
  headerA11yLabel?: string
  text?: string
  textA11yLabel?: string
  // optional list of text for using bullet points instead of plain text
  listOfText?: Array<string | VABulletListText>
  testID: string
  displayLogo?: boolean
  centerHeader?: boolean
}

const GenericOnboarding: FC<GenericOnboardingProps> = ({ header, text, testID, displayLogo, headerA11yLabel, textA11yLabel, listOfText, centerHeader }) => {
  const theme = useTheme()
  const [focusRef, setFocus] = useAccessibilityFocus<View>()

  useFocusEffect(setFocus)

  const headerProps: TextViewProps = {
    variant: 'MobileBodyBold',
    color: 'primaryContrast',
    accessibilityRole: 'header',
    mt: displayLogo ? theme.dimensions.standardMarginBetween : 0,
  }

  const containerStyle: ViewStyle = {
    flexGrow: 1,
    backgroundColor: theme.colors.background.splashScreen,
    justifyContent: 'center',
  }

  return (
    <VAScrollView {...testIdProps(testID)} contentContainerStyle={containerStyle} alwaysBounceVertical={false}>
      <Box mt={theme.dimensions.contentMarginTop} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        {displayLogo && (
          <Box my={theme.dimensions.standardMarginBetween} alignItems={'center'}>
            <VAIcon name="Logo" />
          </Box>
        )}
        <Box alignItems={centerHeader ? 'center' : 'flex-start'}>
          <View ref={focusRef} accessible={true}>
            <TextView {...headerProps} {...testIdProps(headerA11yLabel || header)}>
              {header}
            </TextView>
          </View>
        </Box>
        {text && (
          <TextView {...testIdProps(textA11yLabel || text)} variant="MobileBody" color="primaryContrast" mt={theme.dimensions.standardMarginBetween}>
            {text}
          </TextView>
        )}
        {listOfText && (
          <Box mt={theme.dimensions.standardMarginBetween}>
            <VABulletList listOfText={listOfText} />
          </Box>
        )}
      </Box>
    </VAScrollView>
  )
}

export default GenericOnboarding
