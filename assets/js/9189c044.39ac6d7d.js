"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7025],{6304:function(t,n,e){e.r(n),e.d(n,{contentTitle:function(){return x},default:function(){return c},exampleString:function(){return u},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return p}});var o=e(7462),i=e(3366),r=(e(7294),e(3905)),l=(e(9055),e(8909)),s=["components"],a={},x=void 0,d={unversionedId:"FrontEnd/ComponentsSection/VABulletList",id:"FrontEnd/ComponentsSection/VABulletList",isDocsHomePage:!1,title:"VABulletList",description:"",source:"@site/docs/FrontEnd/ComponentsSection/VABulletList.mdx",sourceDirName:"FrontEnd/ComponentsSection",slug:"/FrontEnd/ComponentsSection/VABulletList",permalink:"/va-mobile-app/index.html/docs/FrontEnd/ComponentsSection/VABulletList",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextView",permalink:"/va-mobile-app/index.html/docs/FrontEnd/ComponentsSection/TextView"},next:{title:"VAButton",permalink:"/va-mobile-app/index.html/docs/FrontEnd/ComponentsSection/VAButton"}},p=[],u="<VABulletList listOfText={['first line', 'second line']} />",m={toc:p,exampleString:u};function c(t){var n=t.components,e=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{componentName:"VABulletList",example:u,codeString:"import React, { FC } from 'react'\n\nimport _ from 'underscore'\n\nimport { VAIconColors, VATextColors } from 'styles/theme'\nimport { testIdProps } from 'utils/accessibility'\nimport { useExternalLink, useTheme } from 'utils/hooks'\nimport Box from './Box'\nimport TextView, { FontVariant, TextViewProps } from './TextView'\nimport VAIcon from './VAIcon'\n\n/**\n * Props for item in {@link listOfText}\n */\nexport type VABulletListText = {\n  /** string to display */\n  text: string\n\n  /** optional parameter that if exists, will make the text a link */\n  linkToRedirect?: string\n\n  /** optional parameter to display given bolded text after main text */\n  boldedText?: string\n\n  /** optional variant for text, defaults to regular */\n  variant?: FontVariant\n\n  /** optional color */\n  color?: keyof VATextColors\n\n  /** optional accessibility label for text */\n  a11yLabel?: string\n}\n\n/**\n * Props for {@link VABulletList}\n */\nexport type VABulletListProps = {\n  /** list of text to display in a bulleted list*/\n  listOfText: Array<string | VABulletListText>\n\n  /** optional bullet color */\n  bulletColor?: keyof VAIconColors\n}\n\n/**\n * Displays the list of text as a bulleted list\n */\nconst VABulletList: FC<VABulletListProps> = ({ listOfText, bulletColor = 'dark' }) => {\n  const theme = useTheme()\n  const launchExternalLink = useExternalLink()\n\n  const getUpdatedListOfText = (): Array<VABulletListText> => {\n    if (_.isString(listOfText[0])) {\n      const updatedListOfTextItem: Array<VABulletListText> = []\n      _.forEach(listOfText, (text) => {\n        updatedListOfTextItem.push({ text: text as string })\n      })\n      return updatedListOfTextItem\n    }\n\n    return listOfText as Array<VABulletListText>\n  }\n\n  const onPress = async (linkToRedirect: string): Promise<void> => {\n    launchExternalLink(linkToRedirect)\n  }\n\n  return (\n    <Box>\n      {_.map(getUpdatedListOfText(), (textItem, index) => {\n        const { variant, color, linkToRedirect, text, boldedText, a11yLabel } = textItem\n\n        const textViewProps: TextViewProps = {\n          variant: variant || 'MobileBody',\n          color: color || 'primary',\n          onPress: linkToRedirect ? async (): Promise<void> => onPress(linkToRedirect) : undefined,\n          flexWrap: 'wrap',\n          flex: 1,\n        }\n\n        return (\n          <Box display=\"flex\" flexDirection=\"row\" alignItems=\"flex-start\" key={index}>\n            <Box mr={theme.dimensions.textXPadding} mt={theme.dimensions.bulletMargin}>\n              <VAIcon name=\"Bullet\" fill={bulletColor} />\n            </Box>\n            <TextView {...textViewProps} {...testIdProps(a11yLabel || text)}>\n              {text.trim()}\n              {!!boldedText && <TextView variant=\"MobileBodyBold\">{boldedText}</TextView>}\n            </TextView>\n          </Box>\n        )\n      })}\n    </Box>\n  )\n}\n\nexport default VABulletList\n",mdxType:"ComponentTopInfo"}))}c.isMDXComponent=!0}}]);