"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4275],{7800:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),o=t(9055),a=t(6396),s=t(8215),l=t(2224),u=t(3490),i=function(e){var n=e.props;return n?r.createElement(r.Fragment,null,u.ZP.isEmpty(n)?r.createElement("pre",{className:"preText"},"This component does not have param defined"):r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Param / Return"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,Object.keys(n).map((function(e){return r.createElement("tr",{key:e},r.createElement("td",null,r.createElement("code",null,e)),r.createElement("td",null,"param"===e?n[e].split("\n").map((function(e,n){var t=e.split("-");return r.createElement("div",{key:n},r.createElement("code",null,t[0].trim()+":"),"\ufeff"+t[1])})):n[e]))}))))):null};function c(e){var n=(0,l.N)(e.componentName)[0],t=n.description,u=n.displayName,c=n.tags,m="How to use the "+u+" component";return r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement(s.Z,{value:"description",label:"Description"},r.createElement("pre",{className:"preText"},t)),r.createElement(s.Z,{value:"params",label:"Params and Return"},r.createElement(i,{props:c})),r.createElement(s.Z,{value:"example",label:"Example"},e.example&&r.createElement(o.Z,{title:m,className:"language-tsx test"},e.example))))}},7482:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},exampleString:function(){return E},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=t(7800),l=["components"],u={},i=void 0,c={unversionedId:"Engineering/FrontEnd/CustomHooks/useError",id:"Engineering/FrontEnd/CustomHooks/useError",isDocsHomePage:!1,title:"useError",description:"export const exampleString =`if (useError(ScreenIDTypesConstants.DISABILITYRATINGSCREEN_ID)) {",source:"@site/docs/Engineering/FrontEnd/CustomHooks/useError.mdx",sourceDirName:"Engineering/FrontEnd/CustomHooks",slug:"/Engineering/FrontEnd/CustomHooks/useError",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useError",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useDestructiveAlert",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useDestructiveAlert"},next:{title:"useExternalLink",permalink:"/docs/Engineering/FrontEnd/CustomHooks/useExternalLink"}},m=[],E="if (useError(ScreenIDTypesConstants.DISABILITY_RATING_SCREEN_ID)) {\nreturn <ErrorComponent screenID={ScreenIDTypesConstants.DISABILITY_RATING_SCREEN_ID} />\n}>",p={toc:m,exampleString:E};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{componentName:"useError",example:E,mdxType:"HooksInfo"}))}d.isMDXComponent=!0}}]);