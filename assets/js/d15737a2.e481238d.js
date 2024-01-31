"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9331],{63374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(87462),o=(a(67294),a(3905));a(8209);const n={},s="On-Call Procedure",i={unversionedId:"Engineering/BackEnd/Monitoring/OnCallProcedure",id:"Engineering/BackEnd/Monitoring/OnCallProcedure",title:"On-Call Procedure",description:"This section outlines the steps to take should an alert occur while it's your turn to be on call. There are two sources of alerts: AlertManager and Firebase. Firebase alerts originate from the app. AlertManager alerts originating from Datadog, these alerts are caused by errors or latency from the back-end API.",source:"@site/docs/Engineering/BackEnd/Monitoring/OnCallProcedure.md",sourceDirName:"Engineering/BackEnd/Monitoring",slug:"/Engineering/BackEnd/Monitoring/OnCallProcedure",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Monitoring/OnCallProcedure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logs",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Monitoring/Logs"},next:{title:"Sentry",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Monitoring/Sentry"}},l={},c=[{value:"On-Call Rotation",id:"on-call-rotation",level:2},{value:"Handling Backend Alerts",id:"handling-backend-alerts",level:2},{value:"Other channels to monitor",id:"other-channels-to-monitor",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"on-call-procedure"},"On-Call Procedure"),(0,o.kt)("p",null,"This section outlines the steps to take should an alert occur while it's your turn to be on call. There are two sources of alerts: AlertManager and Firebase. Firebase alerts originate from the app. AlertManager alerts originating from Datadog, these alerts are caused by errors or latency from the back-end API."),(0,o.kt)("h2",{id:"on-call-rotation"},"On-Call Rotation"),(0,o.kt)("p",null,"Each week a backend engineer will be on-call. Their on-call hours are the same as their business hours and a slack reminder will show up in ",(0,o.kt)("a",{parentName:"p",href:"https://dsva.slack.com/archives/C021WCL114J"},"va-mobile-app-alerts")," each Monday tagging whoever is on for that week."),(0,o.kt)("h2",{id:"handling-backend-alerts"},"Handling Backend Alerts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First use tools described above to track down the source of an issue.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Look up the error in ",(0,o.kt)("a",{parentName:"li",href:"http://sentry.vfs.va.gov/vets-gov/"},"Sentry"),". You can find expanded error details, stack traces, and parameters in Sentry. A good query to start with is searching for the 'Mobile' namespace sorted by 'Last Seen'. Add more filters by toggling open the search builder sidebar on the right of the search field."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://vagov.ddog-gov.com/logs"},"Logs in Datadog")," can help you find more data or trace the requests before the error occurred."),(0,o.kt)("li",{parentName:"ol"},"Our ",(0,o.kt)("a",{parentName:"li",href:"https://vagov.ddog-gov.com/apm/services/mobile-app/operations/rack.request/resources?env=eks-prod&panels=qson%3A%28data%3A%28%29%2Cversion%3A%210%29&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap95%29%2CtopN%3A%215%29%2Cversion%3A%211%29&sort=error-rate%2Cdesc&summary=qson%3A%28data%3A%21f%2Cversion%3A%211%29&view=spans&start=1701356709938&end=1701360309938&paused=false"},"Datadog dashboard")," offers a wider metric based view of how often the issue has been occurring. It's also the first place to look for latency issues and to check if an upstream service is down."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://vagov.ddog-gov.com/apm/services/vets-api/operations/rack.request/resources?env=production"},"Datadog's Application Performance Management tool")," is also configured for vets-api. It breaks down the ruby, database, and upstream calls down so you can determine the source latency. The APM also provides p50 and p99 latency data to let us know how slow the worst 50% and 1% of calls are doing."))),(0,o.kt)("li",{parentName:"ol"},"If you've determined that the source of the issue is an upstream service contact the ",(0,o.kt)("a",{parentName:"li",href:"/va-mobile-app/docs/Engineering/BackEnd/Architecture/Services#service_contacts"},"relevant party"),"."),(0,o.kt)("li",{parentName:"ol"},"If you believe a forward proxy is down or having trouble connecting to the service. Then contact the Operations team via DSVA Slack's ",(0,o.kt)("a",{parentName:"li",href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," channel. To open a support ticket type ",(0,o.kt)("inlineCode",{parentName:"li"},"/support"),". This will open a modal window with a form rather than posting a Slack message. For the 'I need help from' field select 'Operations Team'. Then add the details in the 'Summary of request' field. Additionally, if you are unsure of who to contact you can make a support request. "),(0,o.kt)("li",{parentName:"ol"},"Finally if the error is not from the API, a forward proxy connection to an upstream service, or an upstream service itself but rather an issue with infrastructure that we (and VSP/VFS) control then a SNOW ticket should be opened. Only a DSVA team member can do this. Reach out to a stakeholder and have them open a SNOW ticket for you.")),(0,o.kt)("h2",{id:"other-channels-to-monitor"},"Other channels to monitor"),(0,o.kt)("p",null,"There are other slack channels that the on-call enginner should pay attention to in case there are updates to maintenance windows and/or other urgent changes. For these channels, the on-call engineer should only need to pay attention to @here and @channel messages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dsva.slack.com/archives/CBU0KDSB1"},"vfs-platform-support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dsva.slack.com/archives/C03R5SBELQM"},"vfs-change-announcements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dsva.slack.com/archives/CE4304QPK"},"vfs-all-teams"))))}p.isMDXComponent=!0}}]);