"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7548],{19503:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return c}});var i=o(87462),a=o(63366),n=(o(67294),o(3905)),s=["components"],r={sidebar_position:1},l="Engineering Philosophy",h={unversionedId:"Engineering/Philosphy",id:"Engineering/Philosphy",title:"Engineering Philosophy",description:"How we work is as important as what we work on",source:"@site/docs/Engineering/Philosphy.md",sourceDirName:"Engineering",slug:"/Engineering/Philosphy",permalink:"/va-mobile-app/docs/Engineering/Philosphy",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/va-mobile-app/docs/Product/Intro"},next:{title:"Releases",permalink:"/va-mobile-app/docs/Engineering/Releases"}},d=[{value:"How we work is as important as what we work on",id:"how-we-work-is-as-important-as-what-we-work-on",children:[{value:"Slow is smooth; Smooth is fast",id:"slow-is-smooth-smooth-is-fast",children:[],level:3},{value:"Engineers should practice second-order thinking when approaching problems and tasks. (Think then Act, etc)",id:"engineers-should-practice-second-order-thinking-when-approaching-problems-and-tasks-think-then-act-etc",children:[],level:3},{value:"Do not accept technical debt in exchange for speed",id:"do-not-accept-technical-debt-in-exchange-for-speed",children:[],level:3},{value:"Communication is your primary concern",id:"communication-is-your-primary-concern",children:[],level:3},{value:"Document everything.",id:"document-everything",children:[],level:3},{value:"Our work should be as atomic as possible",id:"our-work-should-be-as-atomic-as-possible",children:[],level:3},{value:"Global components and utilities are created or updated on the develop branch and pulled into other branches.",id:"global-components-and-utilities-are-created-or-updated-on-the-develop-branch-and-pulled-into-other-branches",children:[],level:3},{value:"Single-responsibility",id:"single-responsibility",children:[],level:3},{value:"ALL THE TESTS",id:"all-the-tests",children:[],level:3},{value:"Before using a 3rd party lib, first see if there is a way to adopt our own version of the needed functionality.",id:"before-using-a-3rd-party-lib-first-see-if-there-is-a-way-to-adopt-our-own-version-of-the-needed-functionality",children:[],level:3},{value:"Always consider ALL of the accessibility services when building things",id:"always-consider-all-of-the-accessibility-services-when-building-things",children:[],level:3},{value:"Engineers should be able to defend their decisions to good-faithed questions",id:"engineers-should-be-able-to-defend-their-decisions-to-good-faithed-questions",children:[],level:3},{value:"All of our work should have a ticket, be estimated and be planned into a sprint.",id:"all-of-our-work-should-have-a-ticket-be-estimated-and-be-planned-into-a-sprint",children:[],level:3},{value:"Tickets should always have an output",id:"tickets-should-always-have-an-output",children:[],level:3},{value:"Engineers should feel empowered to provide feedback to Product and UX teams about what we are building.",id:"engineers-should-feel-empowered-to-provide-feedback-to-product-and-ux-teams-about-what-we-are-building",children:[],level:3},{value:"Engineers should have the power to suggest process and implementation changes",id:"engineers-should-have-the-power-to-suggest-process-and-implementation-changes",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,o=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"engineering-philosophy"},"Engineering Philosophy"),(0,n.kt)("h2",{id:"how-we-work-is-as-important-as-what-we-work-on"},"How we work is as important as what we work on"),(0,n.kt)("p",null,"Engineering is not a solitary pursuit. We work together as a team to build something that we share into the world and that people will download and use. We strive to build things that make our end-users' lives better or are useful to them in some manner. How we build a thing has effects on how fast we build, how well the thing we are building works, and how straightforward it is to build on in the future. Often we can overlook the downstream effects of our work in order to complete our tasks in a defined timeline. We should take the time to consider how taking the easy or fastest route can complicate our team\u2019s work in the future."),(0,n.kt)("p",null,"Our team strives to create fast, good code that deploys to high-uptime applications and services. We work to make the codebase better every time we touch it and to make the final product better as a result. Our team\u2019s philosophy is to build in ways that are smart, accurate, skillful, articulate, safe, and understandable\u2013and as a result: faster. Here are our guiding principles that help us reach those objectives."),(0,n.kt)("h3",{id:"slow-is-smooth-smooth-is-fast"},"Slow is smooth; Smooth is fast"),(0,n.kt)("p",null,"This is one of our guiding principles on this team. We should endeavor to be slow and precise in our work. Precision leads to better and more accurate results, which leads to faster ship times. Taking time to do the right things makes the right things more repeatable, and will pay more dividends in the long run than cutting a corner now to meet a deadline."),(0,n.kt)("h3",{id:"engineers-should-practice-second-order-thinking-when-approaching-problems-and-tasks-think-then-act-etc"},"Engineers should practice second-order thinking when approaching problems and tasks. (Think then Act, etc)"),(0,n.kt)("p",null,"Engineering is more than just tickets and tasks and getting things out the door. Engineering is the implementation of a product, which means that there are higher levels of consideration that we need to be aware of and practice. Engineers should always take the time to think about where their work sits within the system of things and not as if it exists in a vacuum."),(0,n.kt)("p",null,"Second-order thinking involves solving problems and asking ourselves \u201cWhat is next?\u201d Thinking about how our changes and work interact with the larger work is paramount to building good software and not making mistakes that we could have prevented. When removing something, we should first know why it was there in the first place in order to understand its reason for being there. Only after we understand this context can we be sure that removing it won\u2019t cause more harm than good."),(0,n.kt)("p",null,"Chesterton\u2019s Fence is the most common metaphor for this, but any quick search about second order thinking provides a wealth of information if you would like to improve your ability to think in this way."),(0,n.kt)("h3",{id:"do-not-accept-technical-debt-in-exchange-for-speed"},"Do not accept technical debt in exchange for speed"),(0,n.kt)("p",null,"We should avoid doing things later in order to merge something now. It seems logical that we will eventually get back to fixing our small omissions or mistakes. This not only assumes that time will be allocated immediately to address this, but it also assumes that technical debt of this kind is value-neutral. Technical debt that is purposely accrued because you believe it can be addressed later is still technical debt. "),(0,n.kt)("p",null,"We should not accrue this debt without careful consideration, and getting work out the door is not a valid reason to accrue such debt. We should work to make sure we address the small issues and fix those inaccuracies the first time, rather than expect a teammate to come by later and clean up the debt we are creating in our code. Not only does this avoid work in the future, it is also being a good steward and teammate."),(0,n.kt)("h3",{id:"communication-is-your-primary-concern"},"Communication is your primary concern"),(0,n.kt)("p",null,"Our team works tirelessly to make the best product possible. In order to do that, we must maintain clear communication between ourselves and our cross-functional peers. Good communication is the bedrock of any good team. It engenders trust, accountability, understanding and fosters an environment of partnership, creativity and problem solving that is necessary for success in any field."),(0,n.kt)("p",null,"We communicate our wins, as well as our sticking points and blockers. We communicate issues quickly and work to find solutions within the team. No engineer is alone, and you should trust in our team to help you find a way through any obstacle."),(0,n.kt)("h3",{id:"document-everything"},"Document everything."),(0,n.kt)("p",null,"Better yet, OVER-document. If it is more complex than a tsdoc or API doc, add an .md file to the docs site. Assume you will never touch this again. Make everything abundantly clear as to how it works. If you are reviewing something and have a question about how something works, ask the person to add some quick comments to clarify. There are few things worse than looking at something complicated with no or almost no documentation. I have personally gone back to work from many years ago, not realizing it was mine and became extremely irritated with the code; it was not documented at all and was extremely abstract. Taking two hours to remember your own work is a sure-fire way to realize how hard it would be for people without your memories to grok a thing. Be kind to future-you and all your coworkers."),(0,n.kt)("h3",{id:"our-work-should-be-as-atomic-as-possible"},"Our work should be as atomic as possible"),(0,n.kt)("p",null,"Whatever we do, we should make sure that what we push onto develop can be pulled out. If we are building things in a fashion that is tightly coupled, we make reversing that change in case of emergency easier if we add it to the code base in multiple, decoupled pushes. Atomic-ness also creates smaller pull requests, which are then easier to review and update. This makes the review process faster, which helps overcome the \u201ctediousness\u201d we may feel. An easier review process should lead to faster merge times."),(0,n.kt)("h3",{id:"global-components-and-utilities-are-created-or-updated-on-the-develop-branch-and-pulled-into-other-branches"},"Global components and utilities are created or updated on the develop branch and pulled into other branches."),(0,n.kt)("p",null,"One of the tenets of good software is reusability. When we create or update reusable components and utilities, we should be pushing that work on to develop first, then pulling those changes back into the branch we are using. This is an extension of the rule about work being as atomic as possible. If we are building a thing that everyone will use, we should add it to the code base by itself then add it to our branch and build the specific use. This allows us to roll back the implementation if it breaks without removing the component from the code. Having specific use decoupled from the implementation makes debugging, identifying and addressing issues faster and safer to manage."),(0,n.kt)("h3",{id:"single-responsibility"},"Single-responsibility"),(0,n.kt)("p",null,"This is another tenet of good software engineering I like to call out because it dovetails with other areas discussed above about working in small, atomic chunks and how we do it. Components in any app can start to morph and take on multiple responsibilities. We should always be reviewing the changes we make to ensure we follow this guideline in order to have a usable code base. If you come across changes that seem to be violating this, you should be comfortable calling this out, explaining your diagnosis and formulating a plan to uncouple the responsibilities. Making sure things are only doing one thing helps us reuse them in ways that make building larger applications faster and easier as a developer."),(0,n.kt)("h3",{id:"all-the-tests"},"ALL THE TESTS"),(0,n.kt)("p",null,"Cover all your code with tests (of course this is silly, you can\u2019t cover it all with tests, but you should shoot for this and land in a really good place if you miss). Tests should be a part of the process that helps us make sure we don\u2019t break other parts of the code with our additions and to make sure any down-stream dependencies are still operating within the correct bounds in our app."),(0,n.kt)("h3",{id:"before-using-a-3rd-party-lib-first-see-if-there-is-a-way-to-adopt-our-own-version-of-the-needed-functionality"},"Before using a 3rd party lib, first see if there is a way to adopt our own version of the needed functionality."),(0,n.kt)("p",null,"Third-party libraries can be super useful, but can often come at costs to security and application file size. When we find a library we would like to use to create a thing, we should take the time to see if we need the whole thing or if we can take the parts we like from it and make our own implementation. This gives us greater control over the code, makes us less dependent on code we don\u2019t control,  and gives us much more flexibility if their implementation ever runs up against our business rules."),(0,n.kt)("h3",{id:"always-consider-all-of-the-accessibility-services-when-building-things"},"Always consider ALL of the accessibility services when building things"),(0,n.kt)("p",null,"Remember that accessibility is a set of services layered over the app by the operating system. Accessibility is not just Voice Over or TalkBack, but a large set of services that provide alternate feedback to users. Beyond system services, things like haptic feedback, font scaling and landscape orientation (the latter being an accessibility concern for wheelchair mounted devices). We should endeavor to think comprehensively about how our changes affect accessibility as a whole, to test against all these things when we are writing code, and to provide feedback if we see implementations that break these services for users."),(0,n.kt)("h3",{id:"engineers-should-be-able-to-defend-their-decisions-to-good-faithed-questions"},"Engineers should be able to defend their decisions to good-faithed questions"),(0,n.kt)("p",null,"Engineers are people, and people make mistakes or miss other avenues of approach. When confronted with good-faith questions of why we choose an approach or questions to consider other things, we should also show good faith and give a logical rationale for our decisions. We may have more insights than someone else and our logic can help them understand our thought process and can help them learn a new way to approach problems."),(0,n.kt)("p",null,"The flip side is that our logic may be flawed and that someone else can help us correct that logic in order to find new ways for us to think. Good engineers know why they are doing something. The higher we are promoted in engineering, the more we will be asked to explain our rationale and to defend our architecture decisions. Practicing this at every level of our work not only makes the team better through collaboration, but improves the skills we need as our careers progress."),(0,n.kt)("h3",{id:"all-of-our-work-should-have-a-ticket-be-estimated-and-be-planned-into-a-sprint"},"All of our work should have a ticket, be estimated and be planned into a sprint."),(0,n.kt)("p",null,"Working in sprints requires planning for work and executing against that plan. A plan is only as good as our ability to estimate the amount of work we can accomplish in a time period. Not accomplishing tasks because we didn\u2019t estimate correctly, or we had \u201chidden\u201d work that took up our time has downstream effects on our team\u2019s ability to make commitments to deliver. We should make sure that we are taking credit for all of our work by insisting that we always have a ticket for anything that we are doing, including discovery work. Whether it\u2019s coding a screen, a spike for feasibility, or just googling for possible libraries we should be accounting for this work."),(0,n.kt)("p",null,"This protects us by showing how much work we are actually doing that may not have an obvious delivery purpose. It also makes sure that we have accurate target dates for the whole project and can show progress when there may not be explicit code to point to. Engineering is about 10% writing code and 90% other stuff (including just thinking and planning). Represent all the work you actually do to help other people understand everything that goes into engineering."),(0,n.kt)("h3",{id:"tickets-should-always-have-an-output"},"Tickets should always have an output"),(0,n.kt)("p",null,"Whether it's code, an artifact or a ticket comment, a ticket should indicate the required output and where it lives in order to provide an audit trail for another engineer later."),(0,n.kt)("p",null,"If we are making sure there is always a task trail for our work, we should also make sure that we are providing an output for everything we do. Most often this is pull requests for the code we wrote. When this is not the case, we should make sure that the tickets are explicit about what the output is and that we create and document the correct output. Sometimes this will be a documentation page. Sometimes this might be a writeup of our discovery or spike findings and our proposed solution."),(0,n.kt)("p",null,"A strong engineering team is capable of many things beyond coding and we should be creating artifacts that showcase our work on non-code problems. This allows us to be creative and collaborative with the team and creates a permanent record for anyone picking up our work later that doesn\u2019t require us to personally rehash the entire work."),(0,n.kt)("h3",{id:"engineers-should-feel-empowered-to-provide-feedback-to-product-and-ux-teams-about-what-we-are-building"},"Engineers should feel empowered to provide feedback to Product and UX teams about what we are building."),(0,n.kt)("p",null,"Engineers have valuable experience in how things work when we build them. We spend countless hours clicking through our apps and testing all the calls which gives us a first-row seat to the good and the bad parts of solutions. We should endeavor to provide constructive, effective feedback to the other teams. This feedback should not be limited to things where we see issues, but also where we appreciate the design and product solutions."),(0,n.kt)("p",null,"The inverse of this is that we should trust that after we provide feedback that the other teams are evaluating our feedback and using it to inform their decisions. If their decisions go against what we as engineers suggested, we should accept that in all but the most limited situations. Software is a collaborative process, but is also a process that frequently requires compromise in order to avoid spinning in circles on features."),(0,n.kt)("h3",{id:"engineers-should-have-the-power-to-suggest-process-and-implementation-changes"},"Engineers should have the power to suggest process and implementation changes"),(0,n.kt)("p",null,"Developer experience is a real thing, I promise. How we work can be as important as what we work on. When engineers see an area for improvement, they should feel enabled to make process improvement suggestions. Remember that identifying the problem is only the beginning, we also need to have a plan on how to overcome the issue. Learning to create proposals and plans for implementing solutions is a very important skill for engineers as they progress in their careers, and we should be practicing those skills whenever we have the chance. We gain skills for thinking about a project above the code, we learn creative ways to solve problems and learn how to give and receive feedback from others, and then learn to incorporate that feedback into our own work to become better engineers and teammates. The idea of a player-led team starts with empowering the players to make suggestions and to learn from feedback in a safe space."),(0,n.kt)("p",null,"While this is not a promise to implement all solutions that are offered up\u2013sometimes ideas may not work for the project or for the context or may just not work yet. We promise to review all of the ideas and to communicate the why or why not so that we all can understand the context. There is still valuable insight and skill to be gained in the process and can help level-up our ability to influence people."))}c.isMDXComponent=!0}}]);