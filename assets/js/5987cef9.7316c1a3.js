"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3273],{38909:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(67294),r=t(19055),i=t(26396),l=t(58215),a=t(82224),s=t(36005),u=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,s.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function c(e){var n=(0,a.N)(e.componentName)[0],t=n.description,s=n.displayName,c=n.props,m="How to use the "+s+" component",p="Full code for the "+s+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(i.Z,null,o.createElement(l.Z,{value:"props",label:"Properties"},o.createElement(u,{props:c})),o.createElement(l.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:m,className:"language-tsx test"},e.example)),o.createElement(l.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:p,className:"language-tsx"},e.codeString)),o.createElement(l.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,n,t){t.d(n,{N:function(){return r}});var o=t(28084),r=function(e){return(0,o.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},48229:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return g},exampleString:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=(t(19055),t(38909)),a=["components"],s={},u=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/Uncategorized/AppVersionAndBuild",id:"Engineering/FrontEnd/ComponentsSection/Uncategorized/AppVersionAndBuild",title:"AppVersionAndBuild",description:"",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/AppVersionAndBuild.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Uncategorized",slug:"/Engineering/FrontEnd/ComponentsSection/Uncategorized/AppVersionAndBuild",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/AppVersionAndBuild",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TextView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Text Views/TextView"},next:{title:"CollapsibleView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/CollapsibleView"}},m=[],p="<AppVersionAndBuild textColor={'primaryContrast'} />",d={toc:m,exampleString:p};function g(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{componentName:"AppVersionAndBuild",example:p,codeString:"import { useTranslation } from 'react-i18next'\nimport React, { FC, useEffect, useState } from 'react'\n\nimport { Box, TextView } from 'components'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { VATextColors, VATypographyThemeVariants } from 'styles/theme'\nimport { getBuildNumber, getVersionName } from 'utils/deviceData'\nimport { useTheme } from 'utils/hooks'\n\nexport type AppVersionAndBuildProps = {\n  /** color of the text */\n  textColor?: keyof VATextColors\n  /** font weight of the text */\n  textWeight?: keyof VATypographyThemeVariants\n}\n\n/**\n * Common component to display the apps version and build number\n */\nconst AppVersionAndBuild: FC<AppVersionAndBuildProps> = ({ textColor = 'bodyText', textWeight = 'MobileBody' }) => {\n  const { t } = useTranslation(NAMESPACE.COMMON)\n  const theme = useTheme()\n  const [versionName, setVersionName] = useState<string>()\n  const [buildNumber, setBuildNumber] = useState<number>()\n\n  useEffect(() => {\n    async function getVersionAndBuild() {\n      const version = await getVersionName()\n      const build = await getBuildNumber()\n      setVersionName(version)\n      setBuildNumber(build)\n    }\n\n    getVersionAndBuild()\n  }, [])\n\n  return (\n    <Box mb={theme.dimensions.contentMarginBottom} justifyContent={'center'} alignItems={'center'}>\n      <TextView variant={textWeight} flexDirection=\"row\" color={textColor}>\n        {t('versionAndBuild', { versionName, buildNumber })}\n      </TextView>\n    </Box>\n  )\n}\n\nexport default AppVersionAndBuild\n",mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);