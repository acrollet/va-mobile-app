"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6594],{38909:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(67294),r=t(19055),i=t(26396),l=t(58215),a=t(82224),c=t(36005),m=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,c.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function s(e){var n=(0,a.N)(e.componentName)[0],t=n.description,c=n.displayName,s=n.props,p="How to use the "+c+" component",u="Full code for the "+c+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(i.Z,null,o.createElement(l.Z,{value:"props",label:"Properties"},o.createElement(m,{props:s})),o.createElement(l.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:p,className:"language-tsx test"},e.example)),o.createElement(l.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:u,className:"language-tsx"},e.codeString)),o.createElement(l.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},5161:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return m},default:function(){return b},exampleString:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=(t(19055),t(38909)),a=["components"],c={},m=void 0,s={unversionedId:"Engineering/FrontEnd/ComponentsSection/ClickToCallPhoneNumber",id:"Engineering/FrontEnd/ComponentsSection/ClickToCallPhoneNumber",title:"ClickToCallPhoneNumber",description:"export const exampleString = ``",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/ClickToCallPhoneNumber.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/ClickToCallPhoneNumber",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/ClickToCallPhoneNumber",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClickForActionLink",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/ClickForActionLink"},next:{title:"CollapsibleView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/CollapsibleView"}},p=[],u='<ClickToCallPhoneNumber phone="555-555-5555"/>',d={toc:p,exampleString:u};function b(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{componentName:"ClickToCallPhoneNumber",example:u,codeString:"import { useTranslation } from 'react-i18next'\nimport React, { FC } from 'react'\n\nimport { AppointmentPhone } from 'store/api/types'\nimport { Box, ClickForActionLink, LinkButtonProps, LinkTypeOptionsConstants, TextView } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { a11yHintProp } from 'utils/accessibility'\nimport { getNumberAccessibilityLabelFromString, getNumbersFromString } from 'utils/formattingUtils'\nimport { useTheme } from 'utils/hooks'\n\ntype ClickToCallPhoneNumberProps = {\n  /**sets the phone information */\n  phone?: AppointmentPhone | string\n  /**sets the text that will be displayed */\n  displayedText?: string\n  /** boolean to align items to the center */\n  center?: boolean\n}\n\n/**A common component for a blue underlined phone number with a phone icon beside it - clicking brings up phone app - automatically renders TTY info*/\nconst ClickToCallPhoneNumber: FC<ClickToCallPhoneNumberProps> = ({ phone, displayedText, center }) => {\n  const { t } = useTranslation(NAMESPACE.HOME)\n  const theme = useTheme()\n\n  if (!phone) {\n    return <></>\n  }\n\n  const phoneNumber = typeof phone === 'string' ? phone : `${phone.areaCode}-${phone.number}`\n\n  const clickToCallProps: LinkButtonProps = {\n    displayedText: displayedText || phoneNumber,\n    linkType: LinkTypeOptionsConstants.call,\n    numberOrUrlLink: getNumbersFromString(phoneNumber),\n    accessibilityLabel: getNumberAccessibilityLabelFromString(phoneNumber),\n  }\n\n  const ttyProps: LinkButtonProps = {\n    displayedText: t('contactVA.tty.number'),\n    linkType: LinkTypeOptionsConstants.callTTY,\n    numberOrUrlLink: t('contactVA.tty.number'),\n    accessibilityLabel: t('contactVA.tty.number.a11yLabel'),\n  }\n\n  return (\n    <Box alignItems={center ? 'center' : undefined} mt={theme.dimensions.standardMarginBetween}>\n      <ClickForActionLink {...clickToCallProps} {...a11yHintProp(t('contactVA.number.a11yHint'))} />\n      <Box accessible={true}>\n        <TextView textAlign={center ? 'center' : undefined} variant=\"MobileBody\" my={theme.dimensions.condensedMarginBetween} focusable={true} importantForAccessibility=\"yes\">\n          {t('contactVA.tty.body')}\n        </TextView>\n      </Box>\n      <ClickForActionLink {...ttyProps} {...a11yHintProp(t('contactVA.number.a11yHint'))} />\n      <Box accessible={true}>\n        <TextView textAlign={center ? 'center' : undefined} variant=\"HelperText\" mt={theme.dimensions.condensedMarginBetween}>\n          {t('contactVA.tty.hintText')}\n        </TextView>\n      </Box>\n    </Box>\n  )\n}\n\nexport default ClickToCallPhoneNumber\n",mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0}}]);