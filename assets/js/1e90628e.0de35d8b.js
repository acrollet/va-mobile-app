"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8201],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return h}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),d=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,g=p["".concat(o,".").concat(h)]||p[h]||u[h]||a;return n?t.createElement(g,l(l({ref:r},c),{},{components:n})):t.createElement(g,l({ref:r},c))}));function h(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87983:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],s={sidebar_position:4,sidebar_label:"Workflows"},o=void 0,d={unversionedId:"Engineering/DevOps/Automation Code Docs/CircleCI/Workflows",id:"Engineering/DevOps/Automation Code Docs/CircleCI/Workflows",title:"Workflows",description:"pr",source:"@site/docs/Engineering/DevOps/Automation Code Docs/CircleCI/Workflows.md",sourceDirName:"Engineering/DevOps/Automation Code Docs/CircleCI",slug:"/Engineering/DevOps/Automation Code Docs/CircleCI/Workflows",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/CircleCI/Workflows",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Workflows"},sidebar:"tutorialSidebar",previous:{title:"Jobs",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/CircleCI/Jobs"},next:{title:"Overview",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/GitHub Actions/Overview"}},c=[{value:"<code>pr</code>",id:"pr",children:[{value:"Description",id:"description",children:[],level:3},{value:"Triggers",id:"triggers",children:[],level:3},{value:"Jobs",id:"jobs",children:[],level:3}],level:2},{value:"<code>qa_build</code>",id:"qa_build",children:[{value:"Description",id:"description-1",children:[],level:3},{value:"Triggers",id:"triggers-1",children:[],level:3},{value:"Jobs",id:"jobs-1",children:[],level:3}],level:2},{value:"<code>release_build</code>",id:"release_build",children:[{value:"Description",id:"description-2",children:[],level:3},{value:"Triggers",id:"triggers-2",children:[],level:3},{value:"Jobs",id:"jobs-2",children:[],level:3}],level:2},{value:"<code>feature_build</code>",id:"feature_build",children:[{value:"Description",id:"description-3",children:[],level:3},{value:"Triggers",id:"triggers-3",children:[],level:3},{value:"Jobs",id:"jobs-3",children:[],level:3}],level:2},{value:"<code>release_candidate_build</code>",id:"release_candidate_build",children:[{value:"Description",id:"description-4",children:[],level:3},{value:"Triggers",id:"triggers-4",children:[],level:3},{value:"Jobs",id:"jobs-4",children:[],level:3}],level:2},{value:"<code>new_release_branch</code>",id:"new_release_branch",children:[{value:"Description",id:"description-5",children:[],level:3},{value:"Triggers",id:"triggers-5",children:[],level:3},{value:"Jobs",id:"jobs-5",children:[],level:3}],level:2},{value:"<code>go_live</code>",id:"go_live",children:[{value:"Description",id:"description-6",children:[],level:3},{value:"Triggers",id:"triggers-6",children:[],level:3},{value:"Jobs",id:"jobs-6",children:[],level:3}],level:2}],u={toc:c};function p(e){var r=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"pr"},(0,a.kt)("inlineCode",{parentName:"h2"},"pr")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This Workflow is run on PRs. It runs the lint and test jobs in order to make sure no breaking changes are merged. Fails should block the PR merging in GitHub."),(0,a.kt)("h3",{id:"triggers"},"Triggers"),(0,a.kt)("p",null,"Currently runs on every commit. Can be reviewed to see if this can be moved to GH Actions, which has triggers for only PR updates and would run less."),(0,a.kt)("h3",{id:"jobs"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- lint\n- test\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"qa_build"},(0,a.kt)("inlineCode",{parentName:"h2"},"qa_build")),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("p",null,"This workflow runs every night to create and upload the QA version of the app configured for the staging environment for both Android and iOS."),(0,a.kt)("p",null,"Creates a Slack thread in the channel and updates the thread with the results of each build job."),(0,a.kt)("h3",{id:"triggers-1"},"Triggers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cron: '0 5 * * 1,2,3,4,5'\n")),(0,a.kt)("p",null,"Runs every Weekday at 0500 UTC on only the develop branch"),(0,a.kt)("h3",{id:"jobs-1"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- start_slack_thread:\n    message: 'QA build process starting. Please see :thread: for results. This process may take a while.'\n- build_android_qa:\n      requires:\n        - start_slack_thread\n- build_ios_qa:\n    requires:\n      - start_slack_thread\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"release_build"},(0,a.kt)("inlineCode",{parentName:"h2"},"release_build")),(0,a.kt)("h3",{id:"description-2"},"Description"),(0,a.kt)("p",null,"This workflow runs every time a tag with v",(0,a.kt)("inlineCode",{parentName:"p"},"int.int.int")," pattern is pushed to the orgin. It builds production versions for both Android and iOS."),(0,a.kt)("p",null,"Creates a Slack thread in the channel and updates the thread with the results of each build job."),(0,a.kt)("h3",{id:"triggers-2"},"Triggers"),(0,a.kt)("p",null,"tags matching the regular expression ",(0,a.kt)("inlineCode",{parentName:"p"},"/^vd+.d+.d+/")),(0,a.kt)("h3",{id:"jobs-2"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- start_slack_thread:\n    message: 'Automation starting release build for the app. This build will be sent to the app stores for review upon completion. Please see :thread: for results. This process may take a while.'\n    filters:\n      tags:\n        only: /^v\\d+\\.\\d+\\.\\d+/\n      branches:\n        ignore: /.*/\n- build_android_release:\n    requires:\n      - start_slack_thread\n    filters:\n      tags:\n        only: /^v\\d+\\.\\d+\\.\\d+/\n      branches:\n        ignore: /.*/\n- build_ios_release:\n    requires:\n     - start_slack_thread\n    filters:\n      tags:\n        only: /^v\\d+\\.\\d+\\.\\d+/\n      branches:\n        ignore: /.*/\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"feature_build"},(0,a.kt)("inlineCode",{parentName:"h2"},"feature_build")),(0,a.kt)("h3",{id:"description-3"},"Description"),(0,a.kt)("p",null,"This workflow runs every time a tag with feature-build- pattern is pushed to the orgin. It builds staging versions for both Android and iOS."),(0,a.kt)("p",null,"Creates a Slack thread in the channel and updates the thread with the results of each build job."),(0,a.kt)("h3",{id:"triggers-3"},"Triggers"),(0,a.kt)("p",null,"tags matching the regular expression ",(0,a.kt)("inlineCode",{parentName:"p"},"/^feature-build-+/")),(0,a.kt)("h3",{id:"jobs-3"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- start_slack_thread:\n    message: 'On-demand feature build process starting. Please see :thread: for results. This process may take a while.'\n    filters:\n      tags:\n        only: /^feature-build-.+/\n    branches:\n      ignore: /.*/\n- build_android_feature:\n    requires:\n      - start_slack_thread\n    filters:\n      tags:\n        only: /^feature-build-.+/\n      branches:\n        ignore: /.*/\n- build_ios_feature:\n    requires:\n      - start_slack_thread\n    filters:\n      tags:\n        only: /^feature-build-.+/\n      branches:\n        ignore: /.*/\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"release_candidate_build"},(0,a.kt)("inlineCode",{parentName:"h2"},"release_candidate_build")),(0,a.kt)("h3",{id:"description-4"},"Description"),(0,a.kt)("p",null,"This workflow runs every time a tag with RC-v",(0,a.kt)("inlineCode",{parentName:"p"},"int.int.int")," pattern is pushed to the orgin. It builds staging versions for both Android and iOS."),(0,a.kt)("p",null,"Creates a Slack thread in the channel and updates the thread with the results of each build job."),(0,a.kt)("h3",{id:"triggers-4"},"Triggers"),(0,a.kt)("p",null,"tags matching the regular expression ",(0,a.kt)("inlineCode",{parentName:"p"},"/^RC-v.d+.d+.d+$/")),(0,a.kt)("h3",{id:"jobs-4"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- start_slack_thread:\n    message: 'Release Candidate build process starting. This build is a staging build for QA to validate and do regression testing on. Please see :thread: for results. This process may take a while.'\n    filters:\n      tags:\n        only: /^RC-v\\d+\\.\\d+\\.\\d+-\\d+-\\d+$/\n      branches:\n        ignore: /.*/\n- build_android_release_candidate:\n    requires:\n      - start_slack_thread\n    filters:\n      tags:\n        only: /^RC-v\\d+\\.\\d+\\.\\d+-\\d+-\\d+$/\n      branches:\n        ignore: /.*/\n- build_ios_release_candidate:\n    requires:\n      - start_slack_thread\n    filters:\n      tags:\n        only: /^^RC-v\\d+\\.\\d+\\.\\d+-\\d+-\\d+$/\n      branches:\n        ignore: /.*/\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"new_release_branch"},(0,a.kt)("inlineCode",{parentName:"h2"},"new_release_branch")),(0,a.kt)("h3",{id:"description-5"},"Description"),(0,a.kt)("p",null,"Workflow runs in order to create the release branch and kick off the release ticket process."),(0,a.kt)("h3",{id:"triggers-5"},"Triggers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"}," cron: '30 6 * * 3'\n")),(0,a.kt)("p",null,"Runs every Wednesday at 0630 UTC on only the develop branch"),(0,a.kt)("h3",{id:"jobs-5"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- cut_release_branch\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"go_live"},(0,a.kt)("inlineCode",{parentName:"h2"},"go_live")),(0,a.kt)("h3",{id:"description-6"},"Description"),(0,a.kt)("p",null,"Job runs on release day to send approved versions to the stores"),(0,a.kt)("h3",{id:"triggers-6"},"Triggers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cron: '0 14 * * 2'\n")),(0,a.kt)("p",null,"Runs every Tuesday at 1400 UTC on only the main branch"),(0,a.kt)("h3",{id:"jobs-6"},"Jobs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- run_release_lanes\n")),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);