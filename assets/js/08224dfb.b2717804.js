"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3540],{6156:function(t,n,e){e.r(n),e.d(n,{contentTitle:function(){return d},default:function(){return m},exampleString:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var o=e(7462),r=e(3366),s=(e(7294),e(3905)),i=(e(9055),e(8909)),a=["components"],u={},d=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/VAButton",id:"Engineering/FrontEnd/ComponentsSection/VAButton",isDocsHomePage:!1,title:"VAButton",description:"export const exampleString = `<VAButton",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/VAButton.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/VAButton",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/VAButton",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VABulletList",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/VABulletList"},next:{title:"VADatePicker",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/VADatePicker"}},l=[],p="<VAButton \nonPress={() => { console.log('button pressed') }} \nlabel={'my button'} \ntextColor=\"primaryContrast\" \nbackgroundColor=\"button\" \ndisabledText=\"my instructions to enable this button\" \niconProps={{ name: 'PaperClip', width: 16, height: 18 }} />",b={toc:l,exampleString:p};function m(t){var n=t.components,e=(0,r.Z)(t,a);return(0,s.kt)("wrapper",(0,o.Z)({},b,e,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{componentName:"VAButton",example:p,codeString:"import { AccessibilityState, Pressable } from 'react-native'\nimport React, { FC, useState } from 'react'\n\nimport { Box, BoxProps, TextView, TextViewProps, VAIcon, VAIconProps } from './index'\nimport { VAButtonBackgroundColors, VAButtonTextColors } from 'styles/theme'\nimport { a11yHintProp, testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\n\nexport type VAButtonBackgroundColorsVariant = keyof VAButtonBackgroundColors\n\nexport const ButtonTypesConstants: {\n  buttonPrimary: ButtonTypes\n  buttonSecondary: ButtonTypes\n  buttonImportant: ButtonTypes\n  buttonWhite: ButtonTypes\n} = {\n  buttonPrimary: 'buttonPrimary',\n  buttonSecondary: 'buttonSecondary',\n  buttonImportant: 'buttonImportant',\n  buttonWhite: 'buttonWhite',\n}\nexport type ButtonTypes = 'buttonPrimary' | 'buttonSecondary' | 'buttonImportant' | 'buttonWhite'\n\n/**\n * Props for the {@link VAButton}\n */\nexport type VAButtonProps = {\n  /** function called when button is pressed */\n  onPress: () => void\n  /** text appearing in the button */\n  label: string\n  /** specifies how the button will look - buttonPrimary has non white background, buttonSecondary has white background w/ colored border  */\n  buttonType: ButtonTypes\n  /** a string value used to set the buttons testID/accessibility label */\n  testID?: string\n  /** text to use as the accessibility hint */\n  a11yHint?: string\n  /** optional prop that disables the button when set to true */\n  disabled?: boolean\n  /** optional prop for text to display under the button if it is disabled **/\n  disabledText?: string\n  /** hides the border if set to true */\n  hideBorder?: boolean\n  /** optional accessibility state */\n  accessibilityState?: AccessibilityState\n  /** props for optional icon to display before text */\n  iconProps?: VAIconProps\n}\n\n/**\n * A common component to show a button that takes the full width of the view with gutters\n */\nconst VAButton: FC<VAButtonProps> = ({ onPress, label, disabled, buttonType, hideBorder, a11yHint, testID, accessibilityState, disabledText, iconProps }) => {\n  const theme = useTheme()\n\n  const textViewProps: TextViewProps = {\n    variant: 'MobileBodyBold',\n    color: (disabled ? 'buttonDisabled' : buttonType) as keyof VAButtonTextColors,\n  }\n\n  const [isPressed, setIsPressed] = useState(false)\n\n  const _onPressIn = (): void => {\n    setIsPressed(true)\n  }\n\n  const _onPressOut = (): void => {\n    setIsPressed(false)\n  }\n\n  const getBorderOrBackgroundColor = (): VAButtonBackgroundColorsVariant => {\n    if (disabled) {\n      return 'buttonDisabled'\n    }\n\n    // animate 'buttonPrimary' when active\n    if (isPressed) {\n      if (buttonType === ButtonTypesConstants.buttonPrimary) {\n        return 'buttonPrimaryActive'\n      } else if (buttonType === ButtonTypesConstants.buttonImportant) {\n        return 'buttonImportantActive'\n      } else if (buttonType === ButtonTypesConstants.buttonWhite) {\n        return 'buttonWhiteActive'\n      } else {\n        return 'buttonSecondaryActive'\n      }\n    }\n\n    return buttonType\n  }\n\n  const hideButtonBorder = hideBorder || buttonType === ButtonTypesConstants.buttonPrimary || disabled\n\n  const boxProps: BoxProps = {\n    borderRadius: 5,\n    backgroundColor: getBorderOrBackgroundColor(),\n    alignItems: 'center',\n    p: theme.dimensions.buttonPadding,\n    borderWidth: hideButtonBorder ? undefined : theme.dimensions.buttonBorderWidth,\n    borderColor: hideButtonBorder ? undefined : getBorderOrBackgroundColor(),\n  }\n\n  const hintProps = a11yHint ? a11yHintProp(a11yHint) : {}\n\n  const showDisabledText = disabled && disabledText\n\n  const disabledTextProps: TextViewProps = {\n    variant: 'HelperText',\n  }\n\n  return (\n    <>\n      <Pressable\n        onPress={onPress}\n        onPressIn={_onPressIn}\n        onPressOut={_onPressOut}\n        disabled={disabled}\n        {...testIdProps(testID || label)}\n        {...hintProps}\n        accessibilityRole=\"button\"\n        accessible={true}\n        accessibilityState={accessibilityState || {}}>\n        <Box {...boxProps}>\n          <Box display=\"flex\" flexDirection=\"row\" alignItems=\"center\">\n            {iconProps && (\n              <Box mr={theme.dimensions.textIconMargin}>\n                <VAIcon {...iconProps} />\n              </Box>\n            )}\n            <TextView {...textViewProps}>{label}</TextView>\n          </Box>\n        </Box>\n      </Pressable>\n      {showDisabledText && (\n        <Box my={theme.dimensions.condensedMarginBetween}>\n          <TextView {...disabledTextProps}>{disabledText}</TextView>\n        </Box>\n      )}\n    </>\n  )\n}\n\nexport default VAButton\n",mdxType:"ComponentTopInfo"}))}m.isMDXComponent=!0}}]);