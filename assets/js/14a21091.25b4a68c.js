"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7542],{47706:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));a(95657);const o={title:"Information Architecture",sidebar_position:5},r=void 0,s={unversionedId:"UX/Foundations/Information-Architecture",id:"UX/Foundations/Information-Architecture",title:"Information Architecture",description:"Defining information architecture",source:"@site/docs/UX/Foundations/Information-Architecture.md",sourceDirName:"UX/Foundations",slug:"/UX/Foundations/Information-Architecture",permalink:"/va-mobile-app/docs/UX/Foundations/Information-Architecture",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Information Architecture",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Design elements",permalink:"/va-mobile-app/docs/UX/Foundations/DesignElements"},next:{title:"Research",permalink:"/va-mobile-app/docs/UX/Foundations/Research"}},l=[{value:"Defining information architecture",id:"defining-information-architecture",children:[],level:2},{value:"Information Architecture principles",id:"information-architecture-principles",children:[],level:2},{value:"When to think about IA",id:"when-to-think-about-ia",children:[],level:2},{value:"IA documentation",id:"ia-documentation",children:[{value:"Sitemap/flow diagram",id:"sitemapflow-diagram",children:[],level:3},{value:"Taxonomy description",id:"taxonomy-description",children:[{value:"Top level categories and contents",id:"top-level-categories-and-contents",children:[],level:4}],level:3},{value:"Adding new items to the app\u2019s Information Architecture",id:"adding-new-items-to-the-apps-information-architecture",children:[],level:3}],level:2},{value:"Background",id:"background",children:[],level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"defining-information-architecture"},"Defining information architecture"),(0,i.kt)("p",null,"Information architecture (IA) is the practice of organizing, structuring, and labeling content in an effective and sustainable way. This guide is intended to help designers and content maintainers make content within the VA mobile app usable and findable to Veterans."),(0,i.kt)("h2",{id:"information-architecture-principles"},"Information Architecture principles"),(0,i.kt)("p",null,"The following guiding principles are used to help Veterans find information and complete tasks within the VA Health and Benefits app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Considers the larger VA system:")," The app\u2019s IA and navigational language consider VA touchpoints, properties and programs outside of the mobile app (digital and physical), with each thing working together as an omnichannel system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Consistent sense of place:")," The app uses multiple wayfinding approaches to communicate where users are ",(0,i.kt)("em",{parentName:"li"},"now")," in the app and ",(0,i.kt)("em",{parentName:"li"},"where they can go from there.")," Examples of this are displaying global navigation on every screen in the hierarchy, screen names that are unique and descriptive, using common screen transitions to communicate a screen's position in the hierarchy, and including descriptive back labels on each screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delivers value at every level:")," Each screen in the app should contain valuable and/or actionable content\u2014no screens that are just lists of links. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Extensible:")," The app\u2019s IA and navigation model leave room to expand its feature set by considering and anticipating future organizational needs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Informed by Veterans:")," IA decisions are based on user research conducted with Veterans, examining their mental models around the organization of common tasks and undertanding of labels, as well as getting feedback on proposed solutions. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keeps it simple:")," Content is prioiritized and includes only what\u2019s absolutely necessary\u2014the fewer elements (number of levels in the hierarchy, number of screens, number of links on a screen) the better.")),(0,i.kt)("p",null,"References:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/69833737d9fe22b8990bb987e7c50de13205c5d5/platform/information-architecture"},"VA.gov Information Architecture (IA) team"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-best-practices.md"},"Best Practices for IA on VA.gov"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://design.va.gov/about/principles"},"VA.gov Design principles"),"  "),(0,i.kt)("h2",{id:"when-to-think-about-ia"},"When to think about IA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launching a new feature in the VA Health and Benefits app"),(0,i.kt)("li",{parentName:"ul"},"Adding a new category or subsection to the VA Health and Benefits app"),(0,i.kt)("li",{parentName:"ul"},"Rewriting content and needing to split or merge an existing screen"),(0,i.kt)("li",{parentName:"ul"},"Looking to improve the findability of an existing feature and/or screen"),(0,i.kt)("li",{parentName:"ul"},"Removing a feature and/or screen"),(0,i.kt)("li",{parentName:"ul"},"Changing the UX of global navigational elements (i.e. tab bar/bottom navigation, top bar, including treatments for back buttons, contextual actions and screen titles)")),(0,i.kt)("h2",{id:"ia-documentation"},"IA documentation"),(0,i.kt)("p",null,"Understanding what\u2019s guiding the app\u2019s current information architecture and make future decisions that are in line with the existing organization, navigation, labeling, and indexing systems."),(0,i.kt)("h3",{id:"sitemapflow-diagram"},"Sitemap/flow diagram"),(0,i.kt)("p",null,"A sitemap is a planning tool that visually shows how information will be grouped and labeled, where content will be located, and how a user will move through the app. This adaptation of a standard sitemap includes the system display logic for screens that have variants, key actions (buttons, links), common processes and points where it makes use of native mobile integrations. ",(0,i.kt)("strong",{parentName:"p"},"This is the source of truth for the app\u2019s IA.")," "),(0,i.kt)("iframe",{width:"800",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTEEgHdlibzCilCj4LviHVF%2FVA-Mobile-app---Detailed-Sitemap-2.0%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3DNOXEk15mCNO0XQ5Q-1",allowfullscreen:!0}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/file/TEEgHdlibzCilCj4LviHVF/VA-Mobile-app---Detailed-Sitemap-2.0?type=whiteboard&node-id=0%3A1&t=NOXEk15mCNO0XQ5Q-1"},"VA Mobile App - Detailed sitemap 2.0 (FigJam)")),(0,i.kt)("h3",{id:"taxonomy-description"},"Taxonomy description"),(0,i.kt)("p",null,"The VA Health and Benefits app\u2019s IA contains four top level categories: Home, Benefits, Health and ","[Payments]",". Each category contains at least two features and/or subcategories. Features within each category should be grouped into subsections if the number of features in a category exceeds six."),(0,i.kt)("h4",{id:"top-level-categories-and-contents"},"Top level categories and contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Home:")," The app\u2019s default screen\u2014displays a combined, personalized view of the information (and tasks) most relevant to the individual Veteran from across the VA, plus persistent access to general VA info (ex: contact and location finder) and lesser used features like Profile and Settings.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Profile (Subcategory):")," Infrequently updated items like personal information (such as contact information, military information, DOB) that isn\u2019t specific to a single category and app settings."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Health:")," All health-related features and statuses.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Features: Appointments, Pharmacy, Medical records, Messaging, COVID-19 updates."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Benefits:")," All benefit-related features and statuses that are not health-related.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Features: Disability rating, Claims, Education, VA Letters"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Payments]",":")," A unified section for managing financial information from across the VA.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Features: Benefit payments, medical copays, bills, travel reimbursements, direct deposit information.")))),(0,i.kt)("h3",{id:"adding-new-items-to-the-apps-information-architecture"},"Adding new items to the app\u2019s Information Architecture"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"A feature\u2019s placement within the app\u2019s navigation and taxonomy should take user mental models, business goals, and the feature type into account.")," ",(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1XQcYxnCifloaBFNKL2C9JNS7KIj6wEhb4VokPGxBZU8/edit#"},"Determining Navigation and Information Architecture Placement for New VA Mobile App Features")," is a guide intended to help teams decide where a new feature belongs in this app\u2019s sitemap and navigation model. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Always try to find a placement in an existing category first")," before proposing a new top-level category for a feature. Confirm new category names and contents with card sort research before adding to the app."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Within a category, keep the hierarchy as flat as possible")," in terms of screens (limit the levels it\u2019s possible to drill down through in order to get to child screens), but without inlcuding too many options on a single screen. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"If there are many features within a category, group the features and label the groups")," at category level before introducing additional levels into the screen hierarchy\u2014this helps avoid cognitive overload."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"All features in the VA mobile app should have a primary placement within the app\u2019s taxonomy"),", even if there are multiple entry points for it at different locations within the app (example of secondary entry points: personalized home screen content, cross-references within other sections)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"When content outgrows the current category structure, conduct card sort research")," to determine new category names and contents (Avoid using \u201chamburger\u201d and \u201cmore\u201d menus as primary navigation).")),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"The VA Health and Benefits app\u2019s Information Architecture and navigation model are based on the findings and output from a multi-stage, collaborative and cross-functional design and research process: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/ux-design/information-architecture-navigation/High%20Level%20Project%20Summary.md"},"Information Architecture and Navigation - High Level Project Summary")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-research/information-architecture"},(0,i.kt)("strong",{parentName:"a"},"Phase I:")," Two rounds of card sorting")," (open and closed) with Veterans"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-design/information-architecture-navigation#phase-ii---navigation-model-exploration--implementation"},(0,i.kt)("strong",{parentName:"a"},"Phase II:")," Navigation model design exploration"),", audit and comparative analysis"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/ux-research/usability-testing/new%20navigation%20usability"},(0,i.kt)("strong",{parentName:"a"},"Phase III:")," Evaluative testing")," with Veterans, including a usability study of the proposed navigation model and sitemap reflected through a low-fidelity prototype")))}m.isMDXComponent=!0}}]);