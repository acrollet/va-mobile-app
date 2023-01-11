"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[195],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,v=u["".concat(c,".").concat(d)]||u[d]||l[d]||i;return t?a.createElement(v,o(o({ref:n},g),{},{components:t})):a.createElement(v,o({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},30279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return g},default:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={},c="Staging Instances",p={unversionedId:"Engineering/BackEnd/Testing/StagingInstances",id:"Engineering/BackEnd/Testing/StagingInstances",title:"Staging Instances",description:"API Calls",source:"@site/docs/Engineering/BackEnd/Testing/StagingInstances.md",sourceDirName:"Engineering/BackEnd/Testing",slug:"/Engineering/BackEnd/Testing/StagingInstances",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Testing/StagingInstances",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing the Mobile App on Staging",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Testing/StagingApps"},next:{title:"Front End",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/"}},g=[{value:"API Calls",id:"api-calls",children:[],level:2},{value:"Console Access",id:"console-access",children:[],level:2}],l={toc:g};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"staging-instances"},"Staging Instances"),(0,i.kt)("h2",{id:"api-calls"},"API Calls"),(0,i.kt)("p",null,"API calls are made in a similar way to the review instances above. Note that your API client may not connect to staging if going through the SOCKS proxy. The API URL for staging is ",(0,i.kt)("a",{parentName:"p",href:"http://staging-api.va.gov/mobile"},"http://staging-api.va.gov/mobile"),". Staging uses the same ",(0,i.kt)("a",{parentName:"p",href:"/va-mobile-app/docs/Engineering/BackEnd/Testing/ApiTokens#fetching-api-tokens"},"API tokens")," as review instances."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl --request GET \\\n  --url https://staging-api.va.gov/mobile/v1/user \\\n  --header 'Authorization: Bearer 6qdITmRgDqEmsdGyzNj7' \\\n  --header 'X-Key-Inflection: camel'\n")),(0,i.kt)("h2",{id:"console-access"},"Console Access"),(0,i.kt)("p",null,"To connect to a staging instance, open a terminal locally and enter 'mfa' followed by a code from a 2FA tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://authy.com/"},"Authy"),". Change into the devops repo dir, and run the SSM script with 'staging' as an argument. The script will return a numbered list of available instances."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mfa {2fa code}\nAWS Session credentials saved. Will expire in 12 hours\ncd {path to devops checkout dir}\nsh utilities/ssm.sh vets-api-server staging\nFinding apps for vets-api-server staging\n-e Found the following instances:\nInstance ID        Private Ip    Name\ni-0cb43936846956681    10.247.34.198    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-002a2d845a9bbfb47    10.247.34.238    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-09bf54f2024d20400    10.247.34.61    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-0900c0675f349b4b5    10.247.34.15    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-0304e9c0fc5d4c4e3    10.247.35.117    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\ni-0a9d52a236730155f    10.247.35.40    dsva-vagov-staging-deployment-vagov-staging-vets-api-server-20211201-221337-asg\n\nWhat instance do you want to connect to? (input only the number eg: 1, 2, 4)\nType 'q' to exit\n1) -n              5) -n               9) -n\n2) i-0cb43936846956681      6) i-09bf54f2024d20400  10) i-0304e9c0fc5d4c4e3\n3) -n              7) -n              11) -n\n4) i-002a2d845a9bbfb47      8) i-0900c0675f349b4b5  12) i-0a9d52a236730155f\n#?\n")),(0,i.kt)("p",null,"Select an instance by typing its number, e.g. 2. Then change to a super user and run the Docker command to launch the Rails console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#? 2\nStarting session to:  i-0cb43936846956681\n\nStarting session with SessionId: First.Last-09fdb960f34e99c93\nsh-4.2$ sudo su\n[root@ip-10-247-34-198 /]# docker exec -it vets-api bundle exec rails c\n{"host":"0fca69c2c0fa","application":"vets-api-server","environment":"production","timestamp":"2021-12-02T16:32:05.979827Z","level":"info","level_index":2,"pid":632,"thread":"65000","name":"Rails","message":"Raven 2.13.0 ready to catch errors"}\n2021-12-02 16:32:08.420676 W [632:65000] SemanticLogger::Appenders -- Ignoring attempt to add a second console appender: SemanticLogger::Appender::File since it would result in duplicate console output.\nLoading production environment (Rails 6.1.4.1)\nirb(main):001:0>\n')),(0,i.kt)("p",null,"You can then fetch an ",(0,i.kt)("a",{parentName:"p",href:"/va-mobile-app/docs/Engineering/BackEnd/Testing/ApiTokens#fetching-api-tokens"},"api token")," and use that token to create either an IAM user session:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"irb(main):001:0> user = IAMSSOeOAuth::SessionManager.new('EESBp0xiLD6p1g86q4g1').find_or_create_user\n")),(0,i.kt)("p",null,"or an SIS user session:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"irb(main):001:0> token = SignIn::AccessTokenJwtDecoder.new(access_token_jwt: 'crazylongsistoken').perform(with_validation: true)\nirb(main):001:0> user = User.find(token.user_uuid)\n")))}u.isMDXComponent=!0}}]);