"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4713],{38909:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(67294),o=n(19055),r=n(26396),s=n(58215),l=n(82224),a=n(36005),c=function(e){var t=e.props;return t?i.createElement(i.Fragment,null,a.ZP.isEmpty(t)?i.createElement("pre",{className:"preText"},"This component does not have props defined"):i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default Value"),i.createElement("th",null,"Required"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,Object.keys(t).map((function(e){var n;return i.createElement("tr",{key:e},i.createElement("td",null,i.createElement("code",null,e)),i.createElement("td",{style:{minWidth:200}},null==(n=t[e].type)?void 0:n.name),i.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),i.createElement("td",null,t[e].required?"Yes":"No"),i.createElement("td",null,t[e].description))}))))):null};function m(e){var t=(0,l.N)(e.componentName)[0],n=t.description,a=t.displayName,m=t.props,p="How to use the "+a+" component",u="Full code for the "+a+" component";return i.createElement(i.Fragment,null,n,i.createElement("br",null),i.createElement("br",null),i.createElement(r.Z,null,i.createElement(s.Z,{value:"props",label:"Properties"},i.createElement(c,{props:m})),i.createElement(s.Z,{value:"example",label:"Example"},e.example&&i.createElement(o.Z,{title:p,className:"language-tsx test"},e.example)),i.createElement(s.Z,{value:"code",label:"Source Code"},e.codeString&&i.createElement(o.Z,{title:u,className:"language-tsx"},e.codeString)),i.createElement(s.Z,{value:"accessibility",label:"Accessibility"},i.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,t,n){n.d(t,{N:function(){return o}});var i=n(28084),o=function(e){return(0,i.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(t){return t.displayName===e}))}},22397:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},exampleString:function(){return u},frontMatter:function(){return a},metadata:function(){return m},toc:function(){return p}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),s=(n(19055),n(38909)),l=["components"],a={},c=void 0,m={unversionedId:"Engineering/FrontEnd/ComponentsSection/List/List",id:"Engineering/FrontEnd/ComponentsSection/List/List",title:"List",description:"const listExample: Array = [",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/List/List.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/List",slug:"/Engineering/FrontEnd/ComponentsSection/List/",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/List/",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VAIcon",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Icons/VAIcon"},next:{title:"BaseListItem",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/List/BaseListItem"}},p=[],u="import { List, ListItemObj } from 'components'\n    const listExample: Array<ListItemObj> = [\n        { content: <TextView>'My Title 1'</TextView>, a11yHintText: 'Hint 1', onPress: () => { console.log('button 1 pressed') } },\n        { content: <TextView>'My Title 2'</TextView>, a11yHintText: 'Hint 2', onPress: () => { console.log('button 2 pressed') } },\n    ]\n\n<List items={listExample} />",d={toc:p,exampleString:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{componentName:"List",example:u,codeString:"import React, { FC } from 'react'\n\nimport { SwitchProps } from './Switch'\nimport { TextView } from './index'\nimport { TextViewProps } from './TextView'\nimport { testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\nimport BaseListItem, { BaseListItemProps } from './BaseListItem'\nimport Box from './Box'\n\n/**\n * Signifies each item in the list of items in {@link ListProps}\n */\nexport type ListItemObj = {\n  /** optional text to use as the button's accessibility hint */\n  a11yHintText?: string\n\n  /** display content for the item */\n  content?: React.ReactNode\n\n  /** on press event */\n  onPress?: () => void\n\n  /** request file number for file indicator */\n  requestNumber?: number\n\n  /** request file if file was loaded */\n  fileUploaded?: boolean\n} & Partial<BaseListItemProps>\n\n/**\n * Props for {@link List}\n */\nexport type ListProps = {\n  /** list of items of which a button will be rendered per item */\n  items: Array<ListItemObj>\n\n  /** optional title to use for the list */\n  title?: string\n\n  /**optional a11y hint for the title */\n  titleA11yLabel?: string\n}\n\n/**\n * A common component for showing a list of <ListItem>.\n */\nconst List: FC<ListProps> = ({ items, title, titleA11yLabel }) => {\n  const theme = useTheme()\n  const { gutter, condensedMarginBetween, standardMarginBetween } = theme.dimensions\n\n  const titleProps: TextViewProps = {\n    variant: 'TableHeaderBold',\n    mx: gutter,\n    mb: condensedMarginBetween,\n    mt: standardMarginBetween,\n    accessibilityRole: 'header',\n  }\n\n  const buttons = items.map((item, index) => {\n    const { content, a11yHintText, decoratorProps } = item\n    const dProps = decoratorProps as Partial<SwitchProps>\n\n    return (\n      <BaseListItem key={index} a11yHint={a11yHintText || dProps?.a11yHint || ''} {...item}>\n        {content}\n      </BaseListItem>\n    )\n  })\n\n  return (\n    <Box>\n      {title && (\n        <Box accessible={true} accessibilityRole={'header'}>\n          <TextView {...titleProps} {...testIdProps(titleA11yLabel ? titleA11yLabel : title)}>\n            {title}\n          </TextView>\n        </Box>\n      )}\n      <Box borderTopWidth={theme.dimensions.borderWidth} borderStyle=\"solid\" borderColor=\"primary\">\n        <Box backgroundColor={'list'}>{buttons}</Box>\n      </Box>\n    </Box>\n  )\n}\n\nexport default List\n",mdxType:"ComponentTopInfo"}))}f.isMDXComponent=!0}}]);