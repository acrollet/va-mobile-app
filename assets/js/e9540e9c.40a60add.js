"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7339],{38909:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(67294),r=t(19055),i=t(26396),l=t(58215),c=t(82224),a=t(36005),s=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,a.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function u(e){var n=(0,c.N)(e.componentName)[0],t=n.description,a=n.displayName,u=n.props,p="How to use the "+a+" component",m="Full code for the "+a+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(i.Z,null,o.createElement(l.Z,{value:"props",label:"Properties"},o.createElement(s,{props:u})),o.createElement(l.Z,{value:"example",label:"Example"},e.example&&o.createElement(r.Z,{title:p,className:"language-tsx test"},e.example)),o.createElement(l.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(r.Z,{title:m,className:"language-tsx"},e.codeString)),o.createElement(l.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,n,t){t.d(n,{N:function(){return r}});var o=t(28084),r=function(e){return(0,o.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},60089:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return h},exampleString:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=(t(19055),t(38909)),c=["components"],a={},s=void 0,u={unversionedId:"Engineering/FrontEnd/ComponentsSection/Selection and Input/Switch",id:"Engineering/FrontEnd/ComponentsSection/Selection and Input/Switch",title:"Switch",description:"",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/Switch.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Selection and Input",slug:"/Engineering/FrontEnd/ComponentsSection/Selection and Input/Switch",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/Switch",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RadioGroup",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/RadioGroup"},next:{title:"VADatePicker",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/VADatePicker"}},p=[],m="<Switch onPress={() => { console.log('update on press') }} on={false} />",d={toc:p,exampleString:m};function h(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{componentName:"Switch",example:m,codeString:"import { AccessibilityProps, Switch as RNSwitch } from 'react-native'\nimport React, { FC } from 'react'\n\nimport { a11yHintProp } from 'utils/accessibility'\nimport { useTheme } from 'utils/hooks'\nimport styled from 'styled-components'\n\nconst StyledRNSwitch = styled(RNSwitch)`\n  shadow-opacity: 0.3;\n  shadow-radius: 1px;\n  shadow-offset: 0px 0.5px;\n  min-width: 51px;\n`\n/**\n * Signifies props passed into {@link Switch}\n */\nexport type SwitchProps = AccessibilityProps & {\n  /** callback called on value change of the switch */\n  onPress: (value: boolean) => void\n  /** optional value of switch, updated with onPress */\n  on?: boolean\n  /** optional testID of switch */\n  testID?: string\n  /** optional accessibilityHint */\n  a11yHint?: string\n}\n\n/**A common component for the react native switch component*/\nconst Switch: FC<SwitchProps> = (props) => {\n  const { onPress, on, testID, a11yHint } = props\n  const theme = useTheme()\n  return (\n    <StyledRNSwitch\n      trackColor={{ false: theme.colors.control.switchOffTrack, true: theme.colors.control.switchOnTrack }}\n      thumbColor={theme.colors.control.switchOnThumb}\n      onValueChange={onPress}\n      value={!!on}\n      testID={testID}\n      {...a11yHintProp(a11yHint || '')}\n    />\n  )\n}\n\nexport default Switch\n",mdxType:"ComponentTopInfo"}))}h.isMDXComponent=!0}}]);