"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2460],{33095:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={title:"Haptic Feedback"},l="Haptic Feedback",o={unversionedId:"UX/Patterns/haptics",id:"UX/Patterns/haptics",title:"Haptic Feedback",description:"Haptic feedback, or \u201chaptics\u201d, is a mobile touch experience that responds to a user's action with vibration patterns. Implementation of haptics should help to enhance a user\u2019s experience throughout the app by providing vibrational feedback in response to a user\u2019s actions. Haptics can also be combined with visual and audio feedback.",source:"@site/docs/UX/Patterns/haptics.md",sourceDirName:"UX/Patterns",slug:"/UX/Patterns/haptics",permalink:"/va-mobile-app/docs/UX/Patterns/haptics",tags:[],version:"current",frontMatter:{title:"Haptic Feedback"},sidebar:"tutorialSidebar",previous:{title:"Confirmation Messages",permalink:"/va-mobile-app/docs/UX/Patterns/confirmation-messages"},next:{title:"How We Work",permalink:"/va-mobile-app/docs/UX/How-We-Work/"}},s=[{value:"Principles",id:"principles",children:[],level:2},{value:"Support",id:"support",children:[],level:2},{value:"Implementation",id:"implementation",children:[],level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"haptic-feedback"},"Haptic Feedback"),(0,i.kt)("p",null,"Haptic feedback, or \u201chaptics\u201d, is a mobile touch experience that responds to a user's action with vibration patterns. Implementation of haptics should help to enhance a user\u2019s experience throughout the app by providing vibrational feedback in response to a user\u2019s actions. Haptics can also be combined with visual and audio feedback."),(0,i.kt)("h2",{id:"principles"},"Principles"),(0,i.kt)("p",null,"When it comes to haptics, less is more. Too much vibration can become annoying, distracting or desensitizing. When haptics are implemented in a thoughtful way, they can provide valuable feedback and a better overall experience for users. Haptics should be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Complementary:")," By establishing a clear relationship between haptics and their corresponding triggers, users will understand their usage. When the app's visual, auditory, and tactile feedback sync, the user experience is more consistent and natural."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Voluntary:")," We allow users the option to turn off haptics within their device settings if they choose to do so. The app is still usable when haptics are turned off."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Purposeful:")," We avoid needless alerts. Haptics are powerful and should only be used to provide valuable and actionable information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Understated:")," We want to ensure the users can get valuable information without interrupting their actions. Haptics should not complement content, not compete with it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mild:")," We do not rely on the intensity of the haptic feedback alone. The intensity of the haptics should compliment the trigger."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple:")," Keep it simple for accessibility. While haptics greatly benefit deaf and low vision users, they may also  trigger issues for those with sensory disabilities or PTSD. ")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Not all devices or operating systems support haptics. "),(0,i.kt)("li",{parentName:"ul"},"Each device and operating system have their own location and verbiage for haptic settings."),(0,i.kt)("li",{parentName:"ul"},"Not all operating systems support the same haptic patterns. ")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Haptics in the VA Health and Benefits app work if the Veteran's device haptic settings are enabled."),(0,i.kt)("li",{parentName:"ul"},"Haptics are implemented on a component level."),(0,i.kt)("li",{parentName:"ul"},"We use a 3 pattern since it is available in our React Native library and available across multiple operating systems.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component"),(0,i.kt)("th",{parentName:"tr",align:null},"Occurrence"),(0,i.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,i.kt)("th",{parentName:"tr",align:null},"OS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snackbar"),(0,i.kt)("td",{parentName:"tr",align:null},"Appearance"),(0,i.kt)("td",{parentName:"tr",align:null},"3 Pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"Android / iOS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle"),(0,i.kt)("td",{parentName:"tr",align:null},"Interaction"),(0,i.kt)("td",{parentName:"tr",align:null},"Heavy Toggle"),(0,i.kt)("td",{parentName:"tr",align:null},"Android / iOS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Error Alert Box"),(0,i.kt)("td",{parentName:"tr",align:null},"Appearance"),(0,i.kt)("td",{parentName:"tr",align:null},"3 Pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"Android / iOS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Warning Alert Box"),(0,i.kt)("td",{parentName:"tr",align:null},"Appearance"),(0,i.kt)("td",{parentName:"tr",align:null},"3 Pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"Android / iOS")))))}d.isMDXComponent=!0}}]);