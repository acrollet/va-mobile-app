"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7938],{38909:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(67294),a=t(19055),r=t(26396),i=t(58215),s=t(82224),l=t(36005),u=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,l.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function c(e){var n=(0,s.N)(e.componentName)[0],t=n.description,l=n.displayName,c=n.props,m="How to use the "+l+" component",p="Full code for the "+l+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(r.Z,null,o.createElement(i.Z,{value:"props",label:"Properties"},o.createElement(u,{props:c})),o.createElement(i.Z,{value:"example",label:"Example"},e.example&&o.createElement(a.Z,{title:m,className:"language-tsx test"},e.example)),o.createElement(i.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(a.Z,{title:p,className:"language-tsx"},e.codeString)),o.createElement(i.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},91717:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return g},exampleString:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=(t(19055),t(38909)),s=["components"],l={},u=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/MessagesCountTag",id:"Engineering/FrontEnd/ComponentsSection/MessagesCountTag",title:"MessagesCountTag",description:"",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/MessagesCountTag.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection",slug:"/Engineering/FrontEnd/ComponentsSection/MessagesCountTag",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/MessagesCountTag",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessageList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/MessageList"},next:{title:"NavigationTabBar",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/NavigationTabBar"}},m=[],p="<MessagesCountTag unread={tagCount} />",d={toc:m,exampleString:p};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{componentName:"MessagesCountTag",example:p,codeString:"import { testIdProps } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport React, { FC } from 'react'\nimport TextView from './TextView'\n\nexport type CountTagProps = {\n  /**number to be shown on the tag */\n  unread: number\n}\n\n/**A common component to show a count of a particular item within a page before clicking to enter that page. For example, this tag would be used to display the number of unread messages in one's inbox. */\nconst MessagesCountTag: FC<CountTagProps> = ({ unread }) => {\n  const theme = useTheme()\n  return (\n    <Box\n      minWidth={theme.dimensions.tagCountMinWidth}\n      justifyContent={'center'}\n      alignSelf={'center'}\n      backgroundColor=\"unreadMessagesTag\"\n      borderRadius={theme.dimensions.tagCountCurvedBorder}\n      {...testIdProps(unread.toString())}\n      accessible={true}>\n      <TextView flexWrap={'wrap'} color=\"primaryContrast\" variant=\"UnreadMessagesTag\" px={theme.dimensions.condensedMarginBetween} pt={theme.dimensions.tagCountTopPadding}>\n        {unread}\n      </TextView>\n    </Box>\n  )\n}\n\nexport default MessagesCountTag\n",mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);