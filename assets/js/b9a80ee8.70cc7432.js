"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7140],{38909:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(67294),l=t(19055),a=t(26396),r=t(58215),i=t(82224),c=t(36005);const s=e=>{let{props:n}=e;return n?o.createElement(o.Fragment,null,c.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((e=>o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},n[e].type?.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))))))):null};function m(e){const n=(0,i.N)(e.componentName),{description:t,displayName:c,props:m}=n[0],p=`How to use the ${c} component`,u=`Full code for the ${c} component`;return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(a.Z,null,o.createElement(r.Z,{value:"props",label:"Properties"},o.createElement(s,{props:m})),o.createElement(r.Z,{value:"example",label:"Example"},e.example&&o.createElement(l.Z,{title:p,className:"language-tsx test"},e.example)),o.createElement(r.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(l.Z,{title:u,className:"language-tsx"},e.codeString)),o.createElement(r.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:(e,n,t)=>{t.d(n,{N:()=>l});var o=t(28084);const l=e=>(0,o.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((n=>n.displayName===e))},71222:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>b,exampleString:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(87462),l=(t(67294),t(3905));t(95657),t(19055);const a="import { useTranslation } from 'react-i18next'\nimport React, { FC } from 'react'\n\nimport { AppointmentPhone } from 'store/api/types'\nimport { Box, ClickForActionLink, LinkButtonProps, LinkTypeOptionsConstants } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { a11yHintProp } from 'utils/accessibility'\nimport { getNumberAccessibilityLabelFromString, getNumbersFromString } from 'utils/formattingUtils'\n\ntype ClickToCallPhoneNumberProps = {\n  /**sets the phone information */\n  phone?: AppointmentPhone | string\n  /**sets the text that will be displayed */\n  displayedText?: string\n  /** boolean to align items to the center */\n  center?: boolean\n  /** accessibility label - otherwise; defaults to the actual phone number */\n  a11yLabel?: string\n}\n\n/**A common component for a blue underlined phone number with a phone icon beside it - clicking brings up phone app - automatically renders TTY info*/\nconst ClickToCallPhoneNumber: FC<ClickToCallPhoneNumberProps> = ({ phone, displayedText, center, a11yLabel }) => {\n  const { t } = useTranslation(NAMESPACE.HOME)\n\n  if (!phone) {\n    return <></>\n  }\n\n  const phoneNumber = typeof phone === 'string' ? phone : `${phone.areaCode}-${phone.number}`\n\n  const clickToCallProps: LinkButtonProps = {\n    displayedText: displayedText || phoneNumber,\n    linkType: LinkTypeOptionsConstants.call,\n    numberOrUrlLink: getNumbersFromString(phoneNumber),\n    a11yLabel: a11yLabel || getNumberAccessibilityLabelFromString(phoneNumber),\n  }\n\n  const ttyProps: LinkButtonProps = {\n    displayedText: t('contactVA.tty.displayText'),\n    linkType: LinkTypeOptionsConstants.callTTY,\n    numberOrUrlLink: t('contactVA.tty.number'),\n    a11yLabel: t('contactVA.tty.number.a11yLabel'),\n  }\n\n  return (\n    <Box alignItems={center ? 'center' : undefined}>\n      <ClickForActionLink {...clickToCallProps} {...a11yHintProp(t('contactVA.number.a11yHint'))} />\n      <ClickForActionLink {...ttyProps} {...a11yHintProp(t('contactVA.number.a11yHint'))} />\n    </Box>\n  )\n}\n\nexport default ClickToCallPhoneNumber\n";var r=t(38909);const i={},c=void 0,s={unversionedId:"UX/ComponentsSection/Buttons and Links/ClickToCallPhoneNumber",id:"UX/ComponentsSection/Buttons and Links/ClickToCallPhoneNumber",title:"ClickToCallPhoneNumber",description:"export const exampleString = ``",source:"@site/docs/UX/ComponentsSection/Buttons and Links/ClickToCallPhoneNumber.mdx",sourceDirName:"UX/ComponentsSection/Buttons and Links",slug:"/UX/ComponentsSection/Buttons and Links/ClickToCallPhoneNumber",permalink:"/va-mobile-app/docs/UX/ComponentsSection/Buttons and Links/ClickToCallPhoneNumber",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClickForActionLink",permalink:"/va-mobile-app/docs/UX/ComponentsSection/Buttons and Links/ClickForActionLink"},next:{title:"CrisisLineCta",permalink:"/va-mobile-app/docs/UX/ComponentsSection/Buttons and Links/CrisisLineCta"}},m=[],p='<ClickToCallPhoneNumber phone="555-555-5555"/>',u={toc:m,exampleString:p},d="wrapper";function b(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{componentName:"ClickToCallPhoneNumber",example:p,codeString:a,mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0}}]);