"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7223],{38909:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(67294),r=t(19055),a=t(26396),i=t(58215),s=t(82224),l=t(36005),c=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,l.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function u(e){var n=(0,s.N)(e.componentName)[0],t=n.description,l=n.displayName,u=n.props,d="How to use the "+l+" component",m="Full code for the "+l+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(a.Z,null,o.createElement(i.Z,{value:"props",label:"Properties"},o.createElement(c,{props:u})),o.createElement(i.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:d,className:"language-tsx test"},e.example)),o.createElement(i.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:m,className:"language-tsx"},e.codeString)),o.createElement(i.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,n,t){t.d(n,{N:function(){return r}});var o=t(28084),r=function(e){return(0,o.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},52264:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},exampleString:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=(t(19055),t(38909)),s=["components"],l={},c=void 0,u={unversionedId:"Engineering/FrontEnd/ComponentsSection/Layout and Organization/LargeNavButton",id:"Engineering/FrontEnd/ComponentsSection/Layout and Organization/LargeNavButton",title:"LargeNavButton",description:"export const exampleString = ` <LargeNavButton",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/LargeNavButton.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Layout and Organization",slug:"/Engineering/FrontEnd/ComponentsSection/Layout and Organization/LargeNavButton",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/LargeNavButton",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CollapsibleView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/CollapsibleView"},next:{title:"MultiTouchCard",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/MultiTouchCard"}},d=[],m=" <LargeNavButton\n title={'appointments.title'}\n subText={'appointments.subText'}\n a11yHint={'appointments.a11yHint'}\n onPress={() => {}}\n borderWidth={theme.dimensions.buttonBorderWidth}\n borderColor={'secondary'}\n borderColorActive={'primaryDarkest'}\n borderStyle={'solid'}\n/>",g={toc:d,exampleString:m};function p(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{componentName:"LargeNavButton",example:m,codeString:"import { Pressable, ViewStyle } from 'react-native'\nimport React, { FC, useState } from 'react'\n\nimport { BackgroundVariant, BorderColorVariant, BorderStyles, BorderWidths, Box, BoxProps, TextView, VAIcon } from 'components'\nimport { VAIconColors, VATextColors } from 'styles/theme'\nimport { a11yHintProp } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\nimport MessagesCountTag from './MessagesCountTag'\n\ninterface HomeNavButtonProps {\n  /**string for header and used to create testID for accessibility*/\n  title: string\n  /**string secondary text that seats on the second row */\n  subText: string\n  /**a11y string secondary text that seats on the second row */\n  subTextA11yLabel?: string\n  /**string for accessibility hint */\n  a11yHint?: string\n  /**function to be called when press occurs */\n  onPress: () => void\n  /**BackgroundVariant color for background */\n  backgroundColor?: BackgroundVariant\n  /**BackgroundVariant color for active state */\n  backgroundColorActive?: BackgroundVariant\n  /**VATextColors color for text */\n  textColor?: keyof VATextColors\n  /** VAIconColors icon color*/\n  iconColor?: keyof VAIconColors\n  /**BorderWidths possible widths for HomeNavButton*/\n  borderWidth?: BorderWidths\n  /**BorderColorVariant color for the borders*/\n  borderColor?: BorderColorVariant\n  /**BorderColorVariant color for active state for the borders*/\n  borderColorActive?: BorderColorVariant\n  /**BorderStyles denotes the styling of the borders*/\n  borderStyle?: BorderStyles\n  /**number for the tag */\n  tagCount?: number\n  /**a11y for the tag */\n  tagCountA11y?: string\n}\n\n/**\n * Reusable large navigation button\n * @returns LargeNavButton component\n */\nconst LargeNavButton: FC<HomeNavButtonProps> = ({\n  title,\n  subText,\n  subTextA11yLabel,\n  a11yHint,\n  onPress,\n  backgroundColor,\n  backgroundColorActive,\n  textColor,\n  iconColor,\n  borderWidth,\n  borderColor,\n  borderColorActive,\n  borderStyle,\n  tagCount,\n  tagCountA11y,\n}: HomeNavButtonProps) => {\n  const theme = useTheme()\n  const [isPressed, setIsPressed] = useState(false)\n\n  const _onPressIn = (): void => {\n    setIsPressed(true)\n  }\n\n  const _onPressOut = (): void => {\n    setIsPressed(false)\n  }\n\n  const _onPress = (): void => {\n    onPress()\n  }\n\n  const getBorderColor = (): BorderColorVariant | undefined => {\n    // animate borderColor\n    if (isPressed && borderColorActive) {\n      return borderColorActive\n    }\n    return borderColor\n  }\n\n  const getBackgroundColor = (): BackgroundVariant => {\n    // animate backgroundColor\n    if (isPressed && backgroundColorActive) {\n      return backgroundColorActive\n    }\n\n    return backgroundColor ? backgroundColor : 'textBox'\n  }\n\n  const boxProps: BoxProps = {\n    minHeight: 81,\n    borderRadius: 6,\n    p: theme.dimensions.cardPadding,\n    mb: theme.dimensions.condensedMarginBetween,\n    backgroundColor: getBackgroundColor(),\n    borderWidth,\n    borderColor: getBorderColor(),\n    borderStyle,\n  }\n\n  const pressableStyles: ViewStyle = {\n    width: '100%',\n    justifyContent: 'space-between',\n    flexDirection: 'row',\n    alignItems: 'center',\n  }\n  const accessibilityLabel = `${title} ${tagCountA11y || ''} ${subTextA11yLabel || subText}`.trim()\n\n  return (\n    <Box {...boxProps}>\n      <Pressable\n        style={pressableStyles}\n        onPress={_onPress}\n        onPressIn={_onPressIn}\n        onPressOut={_onPressOut}\n        accessible={true}\n        accessibilityRole={'menuitem'}\n        testID={title}\n        accessibilityLabel={accessibilityLabel}\n        {...a11yHintProp(a11yHint || '')}>\n        <Box flex={1}>\n          <Box flexDirection={'row'} flexWrap={'wrap'} mb={theme.dimensions.condensedMarginBetween}>\n            <TextView mr={theme.dimensions.condensedMarginBetween} variant=\"BitterBoldHeading\" color={textColor}>\n              {title}\n            </TextView>\n            {!!tagCount && <MessagesCountTag unread={tagCount} />}\n          </Box>\n          <TextView variant={'MobileBody'} color={textColor}>\n            {subText}\n          </TextView>\n        </Box>\n        <VAIcon name=\"ArrowRight\" fill={`${iconColor ? iconColor : 'largeNav'}`} width={10} height={15} ml={theme.dimensions.listItemDecoratorMarginLeft} />\n      </Pressable>\n    </Box>\n  )\n}\n\nexport default LargeNavButton\n",mdxType:"ComponentTopInfo"}))}p.isMDXComponent=!0}}]);