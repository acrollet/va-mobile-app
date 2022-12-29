"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1499],{77800:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(67294),a=t(19055),i=t(26396),o=t(58215),l=t(82224),s=t(36005),u=function(e){var n=e.props;return n?r.createElement(r.Fragment,null,s.ZP.isEmpty(n)?r.createElement("pre",{className:"preText"},"This component does not have param defined"):r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Param / Return"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return r.createElement("div",{key:n},r.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function c(e){var n=(0,l.N)(e.componentName)[0],t=n.description,s=n.displayName,c=n.tags,m="How to use the "+s+" component";return r.createElement(r.Fragment,null,r.createElement(i.Z,null,r.createElement(o.Z,{value:"description",label:"Description"},r.createElement("pre",{className:"preText"},t)),r.createElement(o.Z,{value:"params",label:"Params and Return"},r.createElement(u,{props:c})),r.createElement(o.Z,{value:"example",label:"Example"},e.example&&r.createElement(a.Z,{title:m,className:"language-tsx test"},e.example))))}},82224:function(e,n,t){t.d(n,{N:function(){return a}});var r=t(28084),a=function(e){return(0,r.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},42788:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},exampleString:function(){return p},default:function(){return E}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(77800),l=["components"],s={},u=void 0,c={unversionedId:"Engineering/FrontEnd/CustomHooks/useHasCernerFacilities",id:"Engineering/FrontEnd/CustomHooks/useHasCernerFacilities",title:"useHasCernerFacilities",description:"export const exampleString = `const hasCernerFacilities = useHasCernerFacilities()\\n",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useHasCernerFacilities.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useHasCernerFacilities",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useHasCernerFacilities",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFontScale",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useFontScale"},next:{title:"useHeaderStyles",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/CustomHooks/useHeaderStyles"}},m=[],p="const hasCernerFacilities = useHasCernerFacilities()\n \n<Box mb={hasCernerFacilities ? theme.dimensions.contentMarginBottom : 0}>\n   <CernerAlert />\n</Box>",d={toc:m,exampleString:p};function E(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{componentName:"useHasCernerFacilities",example:p,mdxType:"HooksInfo"}))}E.isMDXComponent=!0}}]);