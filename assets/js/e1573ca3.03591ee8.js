"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6683],{78574:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));i(95657);const l={},r="Apple Signing Keys",o={unversionedId:"Engineering/DevOps/Automation Code Docs/Signing Keys/Apple",id:"Engineering/DevOps/Automation Code Docs/Signing Keys/Apple",title:"Apple Signing Keys",description:"Overview",source:"@site/docs/Engineering/DevOps/Automation Code Docs/Signing Keys/Apple.md",sourceDirName:"Engineering/DevOps/Automation Code Docs/Signing Keys",slug:"/Engineering/DevOps/Automation Code Docs/Signing Keys/Apple",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/Signing Keys/Apple",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Signing Keys",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/Signing Keys/"},next:{title:"Firebase Signing Keys",permalink:"/va-mobile-app/docs/Engineering/DevOps/Automation Code Docs/Signing Keys/Firebase"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Fastlane Match and Apple Signing",id:"fastlane-match-and-apple-signing",children:[],level:2},{value:"Renewing Certificates",id:"renewing-certificates",children:[{value:"Provisioning Profile",id:"provisioning-profile",children:[],level:4},{value:"Certificate",id:"certificate",children:[],level:4},{value:"Provisioning Profiles",id:"provisioning-profiles",children:[],level:4}],level:2},{value:"Location in the CI",id:"location-in-the-ci",children:[{value:"ENV Constants for the keys",id:"env-constants-for-the-keys",children:[],level:3}],level:2},{value:"More Documentation",id:"more-documentation",children:[],level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apple-signing-keys"},"Apple Signing Keys"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Apple Signing and Distribution keys are obtained through the Apple Developer Portal ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/certificates/list"},"Certificates, Identifiers, and Profiles")),(0,a.kt)("p",null,"Developers will each need to have a development certificate created for them, or else a team will need a shared key for each machine. "),(0,a.kt)("p",null,"Apple and iOS Distribution certificates are limited in the organization. Currently, the Health and Benefits App has its own certificate for Apple Distribution. In the future, it may be that teams have a shared signing path with different provisioning profiles, but at this time it is not necessary."),(0,a.kt)("p",null,"Apple Certificates expire every year and need to be renewed. This process is linked below and requires updating both the Certificates' area in the Developer Portal, and work to update the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools/actions/match"},"Fastlane Match")," system used to sign apple builds. "),(0,a.kt)("h2",{id:"fastlane-match-and-apple-signing"},"Fastlane Match and Apple Signing"),(0,a.kt)("p",null,"Apple Signing in our build system is managed with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools/actions/match/"},"Fastlane match"),". Match manages and stores the certificates so that a single Distribution certificate can be shared with the team through GitHub authorization to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va-mobile-app-private"},"private, encrypted repository"),"."),(0,a.kt)("p",null,"Match can be called from a local machine to download the certificates and provisioning profiles for distribution or development. It is also used to sign certificates in the CI during Fastlane scripts. "),(0,a.kt)("h2",{id:"renewing-certificates"},"Renewing Certificates"),(0,a.kt)("p",null,"In order to renew certificates you will need to delete the old certificates from Apple, as well as delete them from the private key repository. "),(0,a.kt)("p",null,"In the repository, you will need to delete the following files:"),(0,a.kt)("h4",{id:"provisioning-profile"},"Provisioning Profile"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/profiles/appstore/<filename>.mobileprovision")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/certs/distribution/<filename>.cer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/certs/distribution/<filename>.p12"))),(0,a.kt)("p",null,"You will need to delete the expiring profile and certificates from the Developer Console"),(0,a.kt)("h4",{id:"certificate"},(0,a.kt)("a",{parentName:"h4",href:"https://developer.apple.com/account/resources/certificates/list"},"Certificate")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"NAME"),(0,a.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:null},"PLATFORM"),(0,a.kt)("th",{parentName:"tr",align:null},"CREATED BY"),(0,a.kt)("th",{parentName:"tr",align:null},"EXPIRATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"US Department of Veterans Affairs (VA)"),(0,a.kt)("td",{parentName:"tr",align:null},"Distribution"),(0,a.kt)("td",{parentName:"tr",align:null},"All"),(0,a.kt)("td",{parentName:"tr",align:null},"UserName"),(0,a.kt)("td",{parentName:"tr",align:null},"07/13/2023")))),(0,a.kt)("h4",{id:"provisioning-profiles"},(0,a.kt)("a",{parentName:"h4",href:"https://developer.apple.com/account/resources/profiles/list"},"Provisioning Profiles")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"NAME"),(0,a.kt)("th",{parentName:"tr",align:null},"PLATFORM"),(0,a.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:null},"EXPIRATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"match AppStore gov.va.vamobileapp"),(0,a.kt)("td",{parentName:"tr",align:null},"iOS"),(0,a.kt)("td",{parentName:"tr",align:null},"App Store"),(0,a.kt)("td",{parentName:"tr",align:null},"07/13/2023")))),(0,a.kt)("p",null,"Once the certificates have been deleted from both locations you can ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools/actions/match/#run"},"run match in your terminal")," to renew the certs\nnavigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/VAMobile/ios/fastlane")," and then run ",(0,a.kt)("inlineCode",{parentName:"p"},"fastlane match appstore"),". You should be able to follow the prompt to create a new Distribution Certificate and Provisioning Profile that will be uploaded to the private repository and can then be used for signing apps."),(0,a.kt)("p",null,"You should be able to test locally by building with the On-demand Script. If the signing part doesn't fail before build everything should be good to go. You can PR any file changes that may have happened. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE: You may need to update the configs and profiles in the VAMobile.plist with xCode if the name strings are changed. If you receive a build error about not finding a cert, double check this first")),(0,a.kt)("h2",{id:"location-in-the-ci"},"Location in the CI"),(0,a.kt)("p",null,"Apple certificates are encrypted by Fastlane match into a private repository and fetched at build time. "),(0,a.kt)("p",null,"On your local machine they can be found in the Keychain Access application."),(0,a.kt)("h3",{id:"env-constants-for-the-keys"},"ENV Constants for the keys"),(0,a.kt)("p",null,"All keys are stored in match"),(0,a.kt)("h2",{id:"more-documentation"},"More Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/support/code-signing/"},"Apple Codesigning Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.fastlane.tools/codesigning/getting-started/"},"Fastlane Codesigning Documentation"))))}c.isMDXComponent=!0}}]);