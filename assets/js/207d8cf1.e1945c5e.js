"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2957],{98480:(a,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));t(95657);const n={},i="Datadog",r={unversionedId:"Engineering/BackEnd/Monitoring/DataDog",id:"Engineering/BackEnd/Monitoring/DataDog",title:"Datadog",description:"This section will share a short overview of how to use Datadog to analyze, and alert on VA metrics",source:"@site/docs/Engineering/BackEnd/Monitoring/DataDog.md",sourceDirName:"Engineering/BackEnd/Monitoring",slug:"/Engineering/BackEnd/Monitoring/DataDog",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Monitoring/DataDog",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maintenance Windows",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Features/MaintenanceWindows"},next:{title:"Logs",permalink:"/va-mobile-app/docs/Engineering/BackEnd/Monitoring/Logs"}},d=[{value:"Integrations",id:"integrations",children:[],level:2},{value:"Exploring Metrics",id:"exploring-metrics",children:[],level:2},{value:"Creating Graphs",id:"creating-graphs",children:[],level:2},{value:"Formulas",id:"formulas",children:[],level:2},{value:"Dashboards",id:"dashboards",children:[],level:2},{value:"Creating Alerts",id:"creating-alerts",children:[],level:2},{value:"Good Places to Get Started",id:"good-places-to-get-started",children:[],level:2},{value:"Existing Mobile Dashboards",id:"existing-mobile-dashboards",children:[],level:2}],l={toc:d},c="wrapper";function g(a){let{components:e,...n}=a;return(0,s.kt)(c,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"datadog"},"Datadog"),(0,s.kt)("p",null,"This section will share a short overview of how to use Datadog to analyze, and alert on VA metrics"),(0,s.kt)("h2",{id:"integrations"},"Integrations"),(0,s.kt)("p",null,"One of the major Pros of Datadog is a plethora of already created integration steps. ",(0,s.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/getting_started/integrations/"},"Datadog integration documentation")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(60129).Z})),(0,s.kt)("h2",{id:"exploring-metrics"},"Exploring Metrics"),(0,s.kt)("p",null,"You can search for existing metrics using Datadog's explore page. Within Datadog navigate to Metrics -> Explore from the sidebar. Selecting a metric from here will automatically create a graph that can be modified and exported to new or existing dashboards. ",(0,s.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/metrics/explorer/"},"Explore documentation")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(79445).Z})),(0,s.kt)("h2",{id:"creating-graphs"},"Creating Graphs"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Navigate to Dashboards -> Quick Graphs or edit a graph from an existing dashboard"),(0,s.kt)("li",{parentName:"ol"},"Choose the metric to graph by searching or selecting it from the dropdown next to 'Metric'")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(12434).Z})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Select filters for the metric")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(32454).Z})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Decide how to aggregate the metric (Max, Min, Avg, Sum)")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(80244).Z})),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"Apply functions to the metric. ",(0,s.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/dashboards/functions/"},"Functions documentation"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(29221).Z})),(0,s.kt)("p",null,"Example: Total requests per second to any mobile endpoint averaged over 5 minutes"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(15824).Z}),"\n",(0,s.kt)("img",{src:t(91500).Z})),(0,s.kt)("h2",{id:"formulas"},"Formulas"),(0,s.kt)("p",null,"You can compare multiple metrics by using formulas.\nExample: Request error rate averaged over 5 minutes"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(80434).Z})),(0,s.kt)("h2",{id:"dashboards"},"Dashboards"),(0,s.kt)("p",null,"Dashboards allow you to display many different widgets. Select the 'Add widgets' button then select the desired widget. ",(0,s.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/dashboards/widgets/"},"Widgets documentation")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(34867).Z})),(0,s.kt)("p",null,"Additionally you can add variables for use across all widgets within a single dashboard. At the top of a dashboard select the pencil icon then fill in the details of your variable. These variables can be accessed from within a widget using ",(0,s.kt)("inlineCode",{parentName:"p"},"$[variable name]"),". ",(0,s.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/dashboards/template_variables/"},"Template variables documentation")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(51603).Z})),(0,s.kt)("h2",{id:"creating-alerts"},"Creating Alerts"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Define a metric to alert on. This works the same as discussed in the graphs section above")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(32804).Z})),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Define alert thresholds. These will dictate when the alert triggers")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(53199).Z})),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Decide how you would like to be notified when the alert triggers")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(48196).Z})),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Define message you want to appear when alert triggers")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6810).Z})),(0,s.kt)("p",null,"To receive alert messages in slack the Datadog slack tool will need to be added to the channel where you want notifications then the channel also needs to be added via the slack integration within Datadog. Once this is complete the channel will be in a dropdown in the 'Notify your team' section shown above. ",(0,s.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/integrations/slack/?tab=slackapplication"},"Slack integration docs")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(18686).Z}),"\n",(0,s.kt)("img",{src:t(17608).Z})),(0,s.kt)("h2",{id:"good-places-to-get-started"},"Good Places to Get Started"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLdh-RwQzDsaOoFo0D8xSEHO0XXOKi1-5J"},"Datadog 101 videos")," and ",(0,s.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/getting_started/"},"Datadog documentation home page")),(0,s.kt)("h2",{id:"existing-mobile-dashboards"},"Existing Mobile Dashboards"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://app.datadoghq.com/dashboard/9nz-cn7-ws6/mobile-api-dashboard"},"Dashboard")," and ",(0,s.kt)("a",{parentName:"p",href:"https://app.datadoghq.com/monitors/manage?q=mobile"},"Alerts"),". If you have issues accessing the dashboard or the VA Datadog site reach out in the shared mobile slack channel"))}g.isMDXComponent=!0},34867:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-add-widgets-939ca71065c886039612d20952dc398e.png"},6810:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-alert-message-a77efadfc6cece0002455b9200aa514c.png"},32804:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-alert-metric-c89090d07cc51940afb4c25923b02aa6.png"},48196:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-alert-notify-cc3322d43eb8a54c574bf5ee7cfb4353.png"},53199:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-alert-threshold-b9e9c3eb058f6873b818030b2f6cb7a1.png"},60129:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-aws-integration-eb269c215a7a1d3bbde4b765e2ba545e.png"},12434:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-create-graphs-1-f9dcf5c108ce7a609b061df23f17e8a5.png"},32454:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-create-graphs-2-2a204fc03e9759f32d65a8847f7518b4.png"},80244:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-create-graphs-3-e01939a70e711309dd3bb09a43dbb8a7.png"},29221:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-create-graphs-4-91ae7f0a29d22bb747ad0c06e368cbba.png"},15824:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-example-graph-query-0da0ced8654a58b7609a5522aff0be27.png"},91500:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-example-graph-b2149fc192fffc8a052b3f5a0bc88834.png"},80434:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-formula-graph-fcb6d95c9733cae18d6d424abee41c37.png"},79445:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-metrics-explorer-abd62072aa731c52840841adac55fb54.png"},51603:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-mobile-api-dashboard-d17f0b52a9ac62bb85b2dc67bfa71dc1.png"},18686:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-slack-integration-1-fbc1c9798b0dba05b2ffb493bbd95a7f.png"},17608:(a,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/datadog-slack-integration-2-becf3971fcf37992b370e3cf6d80860b.png"}}]);