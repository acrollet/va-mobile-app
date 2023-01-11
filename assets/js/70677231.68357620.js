"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2645],{38909:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(67294),o=n(19055),r=n(26396),l=n(58215),s=n(82224),a=n(36005),m=function(e){var t=e.props;return t?i.createElement(i.Fragment,null,a.ZP.isEmpty(t)?i.createElement("pre",{className:"preText"},"This component does not have props defined"):i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default Value"),i.createElement("th",null,"Required"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,Object.keys(t).map((function(e){var n;return i.createElement("tr",{key:e},i.createElement("td",null,i.createElement("code",null,e)),i.createElement("td",{style:{minWidth:200}},null==(n=t[e].type)?void 0:n.name),i.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),i.createElement("td",null,t[e].required?"Yes":"No"),i.createElement("td",null,t[e].description))}))))):null};function c(e){var t=(0,s.N)(e.componentName)[0],n=t.description,a=t.displayName,c=t.props,p="How to use the "+a+" component",u="Full code for the "+a+" component";return i.createElement(i.Fragment,null,n,i.createElement("br",null),i.createElement("br",null),i.createElement(r.Z,null,i.createElement(l.Z,{value:"props",label:"Properties"},i.createElement(m,{props:c})),i.createElement(l.Z,{value:"example",label:"Example"},e.example&&i.createElement(o.Z,{title:p,className:"language-tsx test"},e.example)),i.createElement(l.Z,{value:"code",label:"Source Code"},e.codeString&&i.createElement(o.Z,{title:u,className:"language-tsx"},e.codeString)),i.createElement(l.Z,{value:"accessibility",label:"Accessibility"},i.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,t,n){n.d(t,{N:function(){return o}});var i=n(28084),o=function(e){return(0,i.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(t){return t.displayName===e}))}},97408:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return L},exampleString:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),l=(n(19055),n(38909)),s=["components"],a={},m=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/Layout and Organization/List/SimpleList",id:"Engineering/FrontEnd/ComponentsSection/Layout and Organization/List/SimpleList",title:"SimpleList",description:"export const exampleString = `const exampleList: Array =",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/List/SimpleList.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Layout and Organization/List",slug:"/Engineering/FrontEnd/ComponentsSection/Layout and Organization/List/SimpleList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/List/SimpleList",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SelectionList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Layout and Organization/List/SelectionList"},next:{title:"Carousel",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Navigation/Carousel"}},p=[],u="const exampleList: Array<SimpleListItemObj> = \n[\n    {\n      text: 'the button',\n      a11yHintText: 'press this button to do something',\n      onPress: () => { console.log('button 1 pressed') },\n      testId: 'line-1-on-the-button',\n    },\n    {\n      text: 'the second button',\n      a11yHintText: 'press this button to do something',\n      onPress: () => { console.log('button 2 pressed') },\n      testId: 'line-1-on-the-second-button',\n    },\n]\n\n<SimpleList items={exampleList} />",d={toc:p,exampleString:u};function L(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{componentName:"SimpleList",example:u,codeString:"import React, { FC } from 'react'\n\nimport { List, ListItemObj, ListProps } from './index'\nimport { TextLine } from './types'\nimport { TextLines } from './TextLines'\nimport { generateTestIDForTextList } from 'utils/common'\n\n/**\n * Signifies each item in the list of items in {@link SimpleListProps}\n */\nexport type SimpleListItemObj = {\n  /** lines of text to display */\n  text: string\n} & Partial<ListItemObj>\n\n/**\n * Props for {@link SimpleList}\n */\nexport type SimpleListProps = {\n  items: Array<SimpleListItemObj>\n} & Partial<ListProps>\n\n/**Component to show a list with one line of text per item*/\nconst SimpleList: FC<SimpleListProps> = ({ items, title, titleA11yLabel }) => {\n  const listItemObjs: Array<ListItemObj> = items.map((item: SimpleListItemObj) => {\n    // Move all of the properties except text lines to the standard list item object\n    const { text, testId, ...listItemObj } = { ...item }\n\n    const textLine: Array<TextLine> = [{ text } as TextLine]\n\n    const testIdToUse = testId ? testId : generateTestIDForTextList(textLine)\n    const content = <TextLines listOfText={textLine} />\n\n    return { ...listItemObj, content, testId: testIdToUse }\n  })\n\n  return <List items={listItemObjs} title={title} titleA11yLabel={titleA11yLabel} />\n}\n\nexport default SimpleList\n",mdxType:"ComponentTopInfo"}))}L.isMDXComponent=!0}}]);