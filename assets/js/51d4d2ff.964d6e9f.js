"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[490],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53156:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={sidebar_position:1,sidebar_label:"Overview"},l="GitHub Actions",c={unversionedId:"Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",id:"Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",title:"GitHub Actions",description:"Overview",source:"@site/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview.md",sourceDirName:"Engineering/DevOps/Automation Code Docs/GitHub Actions",slug:"/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/CircleCI/Workflows"},next:{title:"Workflows",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/Workflows"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Automation Robot",id:"automation-robot",children:[],level:2},{value:"Workflows",id:"workflows",children:[],level:2},{value:"Local Testing",id:"local-testing",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"GitHub Actions is used to do most of our non-build operations and automation. It can be much easier to tune the triggers and has most of the tools we need pre-installed to do the work within GitHub and doesn't require a complicated connection from CircleCI to authorize. "),(0,i.kt)("h2",{id:"automation-robot"},"Automation Robot"),(0,i.kt)("p",null,"We use our GitHub automation robot account to do any work in Actions. ",(0,i.kt)("inlineCode",{parentName:"p"},"va-mobile-automation-robot")," account credentials are located in the VA Mobile vault in 1Password."),(0,i.kt)("p",null,"I would recommend that you use this account in a separate browser from your every-day browser. It's easier to have the two accounts at hand if one is running in Chrome and the other is only used in say Safari. "),(0,i.kt)("p",null,"Access in Actions is granted with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Personal Access Tokens"),". "),(0,i.kt)("h2",{id:"workflows"},"Workflows"),(0,i.kt)("p",null,"This is the current list of things automated by GitHub Workflows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding a new user to the ",(0,i.kt)("inlineCode",{parentName:"li"},"va-mobile-team")," in GitHub to grant write access in the repository and ZenHub."),(0,i.kt)("li",{parentName:"ul"},"Automated updates for bundler and Fastlane plugins to keep the build system up to date. "),(0,i.kt)("li",{parentName:"ul"},"Code QL scanning of commits."),(0,i.kt)("li",{parentName:"ul"},"Test building of documentation site changes."),(0,i.kt)("li",{parentName:"ul"},"Automated build and deploy of the documentation site."),(0,i.kt)("li",{parentName:"ul"},"Ability to create ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," (slash) commands that will run from any GitHub issue."),(0,i.kt)("li",{parentName:"ul"},"Automated creation of release tickets when a new release branch is created. Uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"release_ticket.md")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/.github/ISSUE_TEMPLATE/release_ticket.md"},"template"),".  "),(0,i.kt)("li",{parentName:"ul"},"Automated creation of a TestRail run when a release ticket is created for QA regression testing."),(0,i.kt)("li",{parentName:"ul"},"Automated creation of TestRail Milestone to track testing completion"),(0,i.kt)("li",{parentName:"ul"},"Automated updating of the QA run mermaid chart in release tickets when a TestRail run updates (There are limitations to this due to TestRail events API)"),(0,i.kt)("li",{parentName:"ul"},"Approve slash command that merges release branch to ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," and creates a PR from the release branch to merge any changes back to ",(0,i.kt)("inlineCode",{parentName:"li"},"develop"),", then comments on the issue and closed it."),(0,i.kt)("li",{parentName:"ul"},"Workflow that checks merges to main for a message that matches the version format from the slash merge and then tags the commit with that version number, kicking off the ",(0,i.kt)("a",{parentName:"li",href:"/va-mobile-app/docs/Engineering/DevOps/Automation%20Code%20Docs/CircleCI/Workflows/#release_build"},"CircleCI workflow"))),(0,i.kt)("h2",{id:"local-testing"},"Local Testing"),(0,i.kt)("p",null,"You can test GitHub Actions on your local machine using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nektos/act"},"act CLI tool")),(0,i.kt)("p",null,"You can find saved test data used in my local testing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app/tree/develop/.github/test-data"},"here")))}m.isMDXComponent=!0}}]);