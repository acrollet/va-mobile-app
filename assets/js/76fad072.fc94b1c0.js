"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4781],{38909:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(67294),i=n(19055),r=n(26396),o=n(58215),a=n(82224),s=n(36005),c=function(e){var t=e.props;return t?l.createElement(l.Fragment,null,s.ZP.isEmpty(t)?l.createElement("pre",{className:"preText"},"This component does not have props defined"):l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Default Value"),l.createElement("th",null,"Required"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,Object.keys(t).map((function(e){var n;return l.createElement("tr",{key:e},l.createElement("td",null,l.createElement("code",null,e)),l.createElement("td",{style:{minWidth:200}},null==(n=t[e].type)?void 0:n.name),l.createElement("td",null,t[e].defaultValue&&t[e].defaultValue.value.toString()),l.createElement("td",null,t[e].required?"Yes":"No"),l.createElement("td",null,t[e].description))}))))):null};function u(e){var t=(0,a.N)(e.componentName)[0],n=t.description,s=t.displayName,u=t.props,m="How to use the "+s+" component",p="Full code for the "+s+" component";return l.createElement(l.Fragment,null,n,l.createElement("br",null),l.createElement("br",null),l.createElement(r.Z,null,l.createElement(o.Z,{value:"props",label:"Properties"},l.createElement(c,{props:u})),l.createElement(o.Z,{value:"example",label:"Example"},e.example&&l.createElement(i.Z,{title:m,className:"language-tsx test"},e.example)),l.createElement(o.Z,{value:"code",label:"Source Code"},e.codeString&&l.createElement(i.Z,{title:p,className:"language-tsx"},e.codeString)),l.createElement(o.Z,{value:"accessibility",label:"Accessibility"},l.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,t,n){n.d(t,{N:function(){return i}});var l=n(28084),i=function(e){return(0,l.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(t){return t.displayName===e}))}},76075:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return x},exampleString:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var l=n(87462),i=n(63366),r=(n(67294),n(3905)),o=(n(19055),n(38909)),a=["components"],s={},c=void 0,u={unversionedId:"Engineering/FrontEnd/ComponentsSection/List/VABulletList",id:"Engineering/FrontEnd/ComponentsSection/List/VABulletList",title:"VABulletList",description:"",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/List/VABulletList.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/List",slug:"/Engineering/FrontEnd/ComponentsSection/List/VABulletList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/List/VABulletList",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SimpleList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/List/SimpleList"},next:{title:"FocusedNavHeaderText",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Navigation/FocusedNavHeaderText"}},m=[],p="<VABulletList listOfText={['first line', 'second line']} />",d={toc:m,exampleString:p};function x(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{componentName:"VABulletList",example:p,codeString:"import React, { FC } from 'react'\n\nimport _ from 'underscore'\n\nimport { VATextColors } from 'styles/theme'\nimport { testIdProps } from 'utils/accessibility'\nimport { useExternalLink } from 'utils/hooks'\nimport Box from './Box'\nimport TextView, { FontVariant, TextViewProps } from './TextView'\nimport VAIcon from './VAIcon'\n\n/**\n * Props for item in {@link listOfText}\n */\nexport type VABulletListText = {\n  /** string to display */\n  text: string\n\n  /** optional parameter that if exists, will make the text a link */\n  linkToRedirect?: string\n\n  /** optional parameter to display given bolded text after main text */\n  boldedText?: string\n\n  /** optional variant for text, defaults to regular */\n  variant?: FontVariant\n\n  /** optional color */\n  color?: keyof VATextColors\n\n  /** optional accessibility label for text */\n  a11yLabel?: string\n}\n\n/**\n * Props for {@link VABulletList}\n */\nexport type VABulletListProps = {\n  /** list of text to display in a bulleted list*/\n  listOfText: Array<string | VABulletListText>\n}\n\n/**\n * Displays the list of text as a bulleted list\n */\nconst VABulletList: FC<VABulletListProps> = ({ listOfText }) => {\n  const launchExternalLink = useExternalLink()\n\n  const getUpdatedListOfText = (): Array<VABulletListText> => {\n    if (_.isString(listOfText[0])) {\n      const updatedListOfTextItem: Array<VABulletListText> = []\n      _.forEach(listOfText, (text) => {\n        updatedListOfTextItem.push({ text: text as string })\n      })\n      return updatedListOfTextItem\n    }\n\n    return listOfText as Array<VABulletListText>\n  }\n\n  const onPress = async (linkToRedirect: string): Promise<void> => {\n    launchExternalLink(linkToRedirect)\n  }\n\n  return (\n    <Box>\n      {_.map(getUpdatedListOfText(), (textItem, index) => {\n        const { variant, color, linkToRedirect, text, boldedText, a11yLabel } = textItem\n\n        const textViewProps: TextViewProps = {\n          variant: variant || 'MobileBody',\n          color: color || 'bodyText',\n          onPress: linkToRedirect ? async (): Promise<void> => onPress(linkToRedirect) : undefined,\n          flexWrap: 'wrap',\n          flex: 1,\n        }\n\n        return (\n          <Box display=\"flex\" flexDirection=\"row\" alignItems=\"flex-start\" key={index} accessible={true}>\n            <Box mr={20} mt={12}>\n              <VAIcon name=\"Bullet\" fill={color || 'bodyText'} />\n            </Box>\n            <TextView {...textViewProps} {...testIdProps(a11yLabel || text)}>\n              {text.trim()}\n              {!!boldedText && <TextView variant=\"MobileBodyBold\">{boldedText}</TextView>}\n            </TextView>\n          </Box>\n        )\n      })}\n    </Box>\n  )\n}\n\nexport default VABulletList\n",mdxType:"ComponentTopInfo"}))}x.isMDXComponent=!0}}]);