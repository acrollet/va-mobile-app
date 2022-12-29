"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9432],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},69323:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={},l="Redux Toolkit Overview",c={unversionedId:"Engineering/FrontEnd/ReduxToolkit/Overview/ReduxToolkitOverview",id:"Engineering/FrontEnd/ReduxToolkit/Overview/ReduxToolkitOverview",title:"Redux Toolkit Overview",description:"Purpose",source:"@site/docs/Engineering/FrontEnd/ReduxToolkit/Overview/ReduxToolkitOverview.md",sourceDirName:"Engineering/FrontEnd/ReduxToolkit/Overview",slug:"/Engineering/FrontEnd/ReduxToolkit/Overview/ReduxToolkitOverview",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Overview/ReduxToolkitOverview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Webview",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/Icons/webviewIcons"},next:{title:"VA App and Redux Toolkit",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Overview/VAAppAndReduxToolkit"}},p=[{value:"Purpose",id:"purpose",children:[],level:2},{value:"Benefits",id:"benefits",children:[],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redux-toolkit-overview"},"Redux Toolkit Overview"),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Redux Toolkit")," package was built with the intention on being the standard way of writing Redux logic. It was mainly created to help address the three common concerns of Redux."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Configuring a Redux store is too complicated"'),(0,i.kt)("li",{parentName:"ul"},'"I have to add a lot of packages to get Redux to do anything useful"'),(0,i.kt)("li",{parentName:"ul"},'"Redux requires too much boilerplate code"')),(0,i.kt)("h2",{id:"benefits"},"Benefits"),(0,i.kt)("p",null,"Some benefits of using ",(0,i.kt)("strong",{parentName:"p"},"Redux Toolkit")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple :"),"  Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Opinionated :"),"  Provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Powerful :"),'  Takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic, and even create entire "slices" of state automatically.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Effective :"),"  Lets you focus on the core logic your app needs, so you can do more work with less code.")),(0,i.kt)("p",null,"More information on the purpose and installation of Redux Toolkit can be found on their ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/introduction/getting-started"},"page"),"."))}s.isMDXComponent=!0}}]);