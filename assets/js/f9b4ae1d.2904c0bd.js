"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90],{38909:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(67294),r=t(19055),a=t(26396),l=t(58215),s=t(82224),i=t(36005);const c=e=>{let{props:n}=e;return n?o.createElement(o.Fragment,null,i.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((e=>o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},n[e].type?.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))))))):null};function d(e){const n=(0,s.N)(e.componentName),{description:t,displayName:i,props:d}=n[0],p=`How to use the ${i} component`,m=`Full code for the ${i} component`;return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(a.Z,null,o.createElement(l.Z,{value:"props",label:"Properties"},o.createElement(c,{props:d})),o.createElement(l.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:p,className:"language-tsx test"},e.example)),o.createElement(l.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:m,className:"language-tsx"},e.codeString)),o.createElement(l.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:(e,n,t)=>{t.d(n,{N:()=>r});var o=t(28084);const r=e=>(0,o.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((n=>n.displayName===e))},58725:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>b,exampleString:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));t(95657),t(19055);const a="import { Pressable, PressableProps, View } from 'react-native'\nimport { useTranslation } from 'react-i18next'\nimport React, { FC, ReactNode, Ref, useState } from 'react'\n\nimport { Box, BoxProps, TextArea, VAIcon, VA_ICON_MAP } from './index'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\n\nexport type AccordionCollapsibleProps = {\n  /** component to display as header of accordion */\n  header: ReactNode\n  /** component to display only when the accordion is expanded */\n  expandedContent: ReactNode\n  /** testID for the header */\n  testID?: string\n  /** a11yHint for the header */\n  a11yHint?: string\n  /** component to display on when the accordion is collapsed */\n  collapsedContent?: ReactNode\n  /** if true hides the accordion arrow and only displays header & collapsed content */\n  hideArrow?: boolean\n  /** custom on press call if more action is needed when expanding/collapsing the accordion */\n  customOnPress?: (expandedValue?: boolean) => void\n  /** sets the initial value of expanded if an accordion should already be expanded on render */\n  expandedInitialValue?: boolean\n  /** gets rid of border of TextArea so the top and bottom borders don't double up in message threads when accordion is opened */\n  noBorder?: boolean\n  /** Ref for the header section */\n  headerRef?: Ref<View>\n}\n\n/**\n * A common component to show content inside of a collapsible accordion.\n */\nconst AccordionCollapsible: FC<AccordionCollapsibleProps> = ({\n  header,\n  expandedContent,\n  collapsedContent,\n  hideArrow,\n  testID,\n  customOnPress,\n  expandedInitialValue,\n  noBorder,\n  children,\n  a11yHint,\n  headerRef,\n}) => {\n  const { t } = useTranslation(NAMESPACE.COMMON)\n  const theme = useTheme()\n  const [expanded, setExpanded] = useState(expandedInitialValue || false)\n\n  const onPress = (): void => {\n    if (customOnPress) {\n      customOnPress(!expanded)\n    }\n\n    setExpanded(!expanded)\n  }\n\n  const pressableProps: PressableProps = {\n    onPress,\n    accessibilityState: { expanded },\n    accessibilityHint: a11yHint || t('viewMoreDetails'),\n    accessibilityRole: 'tab',\n  }\n\n  const iconName: keyof typeof VA_ICON_MAP = expanded ? 'ArrowUp' : 'ArrowDown'\n\n  const renderHeader = () => {\n    const data = (\n      <Box flexDirection=\"row\">\n        <Box flex={1}>{header}</Box>\n        {!hideArrow && (\n          <Box mt={theme.dimensions.condensedMarginBetween}>\n            <VAIcon name={iconName} fill={theme.colors.icon.chevronCollapsible} width={16} height={10} />\n          </Box>\n        )}\n      </Box>\n    )\n\n    const labelProps = testID\n      ? {\n          accessibilityLabel: testID,\n        }\n      : {}\n\n    if (hideArrow) {\n      return (\n        <Box {...labelProps} accessible={true}>\n          {data}\n        </Box>\n      )\n    }\n\n    return (\n      <Pressable {...pressableProps} {...labelProps} ref={headerRef}>\n        {data}\n      </Pressable>\n    )\n  }\n\n  const boxProps: BoxProps = {\n    borderBottomColor: 'primary',\n    borderBottomWidth: theme.dimensions.borderWidth,\n    accessibilityRole: 'tablist',\n  }\n\n  return (\n    <Box {...boxProps} {...testIdProps('accordion-wrapper', true)} importantForAccessibility={'no'}>\n      <TextArea noBorder={noBorder}>\n        {renderHeader()}\n        {!expanded && collapsedContent}\n        {expanded && expandedContent}\n        {children}\n      </TextArea>\n    </Box>\n  )\n}\n\nexport default AccordionCollapsible\n";var l=t(38909);const s={},i=void 0,c={unversionedId:"UX/ComponentsSection/Alerts and Progress/AccordionCollapsible",id:"UX/ComponentsSection/Alerts and Progress/AccordionCollapsible",title:"AccordionCollapsible",description:"export const exampleString =`<AccordionCollapsible",source:"@site/docs/UX/ComponentsSection/Alerts and Progress/AccordionCollapsible.mdx",sourceDirName:"UX/ComponentsSection/Alerts and Progress",slug:"/UX/ComponentsSection/Alerts and Progress/AccordionCollapsible",permalink:"/va-mobile-app/docs/UX/ComponentsSection/Alerts and Progress/AccordionCollapsible",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alerts and progress",permalink:"/va-mobile-app/docs/UX/ComponentsSection/Alerts and Progress/"},next:{title:"AlertBox",permalink:"/va-mobile-app/docs/UX/ComponentsSection/Alerts and Progress/AlertBox"}},d=[],p="<AccordionCollapsible \n header={accordionHeader()} \n expandedContent={accordionContent()} \n testID={'headerText'} \n alertBorder={'warning'} \n a11yHint={'a11yHint'} />\n ",m={toc:d,exampleString:p},u="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{componentName:"AccordionCollapsible",example:p,codeString:a,mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0}}]);