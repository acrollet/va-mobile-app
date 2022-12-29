"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5139],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(r),y=i,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(m,a(a({ref:e},p),{},{components:r})):n.createElement(m,a({ref:e},p))}));function y(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21095:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={},c="Updating or Adding to an Existing Feature State",l={unversionedId:"Engineering/FrontEnd/ReduxToolkit/Tutorials/UpdatingExistingStateFeature",id:"Engineering/FrontEnd/ReduxToolkit/Tutorials/UpdatingExistingStateFeature",title:"Updating or Adding to an Existing Feature State",description:"Intro",source:"@site/docs/Engineering/FrontEnd/ReduxToolkit/Tutorials/UpdatingExistingStateFeature.md",sourceDirName:"Engineering/FrontEnd/ReduxToolkit/Tutorials",slug:"/Engineering/FrontEnd/ReduxToolkit/Tutorials/UpdatingExistingStateFeature",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Tutorials/UpdatingExistingStateFeature",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add a New Feature State",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Tutorials/AddNewStateInReduxToolKit"},next:{title:"Development Setup Instructions",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/DevSetupInstructions/DevSetupProcess"}},p=[{value:"Intro",id:"intro",children:[],level:2},{value:"Adding a New State",id:"adding-a-new-state",children:[],level:2}],d={toc:p};function u(t){var e=t.components,r=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-or-adding-to-an-existing-feature-state"},"Updating or Adding to an Existing Feature State"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"This tutorial will consists of adding state to an existing feature state. "),(0,o.kt)("h2",{id:"adding-a-new-state"},"Adding a New State"),(0,o.kt)("p",null,"Here we are going to add a new reducer to clear the data on logout to the existing militaryServiceSlice.ts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Current Slice Code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/slices/militaryServiceSlice.ts"',title:'"/src/store/slices/militaryServiceSlice.ts"'},"import { PayloadAction, createSlice } from '@reduxjs/toolkit'\n\nimport * as api from 'store/api'\nimport { AppThunk } from 'store'\nimport { ScreenIDTypes, ServiceData } from '../api'\nimport { dispatchClearErrors, dispatchSetError, dispatchSetTryAgainFunction } from './errorSlice'\nimport { getCommonErrorFromAPIError } from 'utils/errors'\nimport { getDateFromString } from 'utils/formattingUtils'\nimport { isErrorObject } from 'utils/common'\nimport { max } from 'underscore'\n\nexport type MilitaryServiceState = {\n  serviceHistory: api.ServiceHistoryData\n  loading: boolean\n  error?: Error\n  mostRecentBranch?: string\n  needsDataLoad: boolean\n  preloadComplete: boolean\n}\n\nexport const initialMilitaryServiceState: MilitaryServiceState = {\n  serviceHistory: [] as api.ServiceHistoryData,\n  loading: false,\n  needsDataLoad: true,\n  preloadComplete: false,\n}\n\n/**\n * Redux action to get service history for user\n */\nexport const getServiceHistory =\n  (screenID?: ScreenIDTypes): AppThunk =>\n  async (dispatch) => {\n    dispatch(dispatchClearErrors(screenID))\n    dispatch(dispatchSetTryAgainFunction(() => dispatch(getServiceHistory(screenID))))\n\n    try {\n      dispatch(dispatchStartGetHistory())\n      const mshData = await api.get<api.MilitaryServiceHistoryData>('/v0/military-service-history')\n\n      dispatch(dispatchFinishGetHistory({ serviceHistory: mshData?.data.attributes.serviceHistory }))\n    } catch (error) {\n      if (isErrorObject(error)) {\n        dispatch(dispatchFinishGetHistory({ error }))\n        dispatch(dispatchSetError({ errorType: getCommonErrorFromAPIError(error), screenID }))\n      }\n    }\n  }\n\n/**\n * Redux slice that will create the actions and reducers\n */\nconst militaryServiceSlice = createSlice({\n  name: 'militaryService',\n  initialState: initialMilitaryServiceState,\n  reducers: {\n    dispatchStartGetHistory: (state) => {\n      state.loading = true\n    },\n\n    dispatchFinishGetHistory: (state, action: PayloadAction<{ serviceHistory?: api.ServiceHistoryData; error?: Error }>) => {\n      const { serviceHistory, error } = action.payload\n      const history = serviceHistory || state.serviceHistory\n\n      const latestHistory = max(history, (historyItem) => {\n        return getDateFromString(historyItem.endDate)\n      }) as ServiceData\n\n      return {\n        ...state,\n        error,\n        mostRecentBranch: latestHistory?.branchOfService,\n        serviceHistory: history,\n        loading: false,\n        needsDataLoad: !!error,\n        preloadComplete: true,\n      }\n    },\n  },\n})\n\nexport const { dispatchFinishGetHistory, dispatchStartGetHistory } = militaryServiceSlice.actions\nexport default militaryServiceSlice.reducer\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code after adding the logout reducer")),(0,o.kt)("p",null,"Here we added the ",(0,o.kt)("strong",{parentName:"p"},"dispatchMilitaryHistoryLogout")," reducer function which we will extract an action to be dispatch on the logout Redux thunk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/slices/militaryServiceSlice.ts"',title:'"/src/store/slices/militaryServiceSlice.ts"'},"import { PayloadAction, createSlice } from '@reduxjs/toolkit'\n\nimport * as api from 'store/api'\nimport { AppThunk } from 'store'\nimport { ScreenIDTypes, ServiceData } from '../api'\nimport { dispatchClearErrors, dispatchSetError, dispatchSetTryAgainFunction } from './errorSlice'\nimport { getCommonErrorFromAPIError } from 'utils/errors'\nimport { getDateFromString } from 'utils/formattingUtils'\nimport { isErrorObject } from 'utils/common'\nimport { max } from 'underscore'\n\nexport type MilitaryServiceState = {\n  serviceHistory: api.ServiceHistoryData\n  loading: boolean\n  error?: Error\n  mostRecentBranch?: string\n  needsDataLoad: boolean\n  preloadComplete: boolean\n}\n\nexport const initialMilitaryServiceState: MilitaryServiceState = {\n  serviceHistory: [] as api.ServiceHistoryData,\n  loading: false,\n  needsDataLoad: true,\n  preloadComplete: false,\n}\n\n/**\n * Redux action to get service history for user\n */\nexport const getServiceHistory =\n  (screenID?: ScreenIDTypes): AppThunk =>\n  async (dispatch) => {\n    dispatch(dispatchClearErrors(screenID))\n    dispatch(dispatchSetTryAgainFunction(() => dispatch(getServiceHistory(screenID))))\n\n    try {\n      dispatch(dispatchStartGetHistory())\n      const mshData = await api.get<api.MilitaryServiceHistoryData>('/v0/military-service-history')\n\n      dispatch(dispatchFinishGetHistory({ serviceHistory: mshData?.data.attributes.serviceHistory }))\n    } catch (error) {\n      if (isErrorObject(error)) {\n        dispatch(dispatchFinishGetHistory({ error }))\n        dispatch(dispatchSetError({ errorType: getCommonErrorFromAPIError(error), screenID }))\n      }\n    }\n  }\n\n/**\n * Redux slice that will create the actions and reducers\n */\nconst militaryServiceSlice = createSlice({\n  name: 'militaryService',\n  initialState: initialMilitaryServiceState,\n  reducers: {\n    dispatchStartGetHistory: (state) => {\n      state.loading = true\n    },\n\n    dispatchFinishGetHistory: (state, action: PayloadAction<{ serviceHistory?: api.ServiceHistoryData; error?: Error }>) => {\n      const { serviceHistory, error } = action.payload\n      const history = serviceHistory || state.serviceHistory\n\n      const latestHistory = max(history, (historyItem) => {\n        return getDateFromString(historyItem.endDate)\n      }) as ServiceData\n\n      return {\n        ...state,\n        error,\n        mostRecentBranch: latestHistory?.branchOfService,\n        serviceHistory: history,\n        loading: false,\n        needsDataLoad: !!error,\n        preloadComplete: true,\n      }\n    },\n\n     dispatchMilitaryHistoryLogout: () => {\n      return {\n        ...initialMilitaryServiceState,\n      }\n    },\n\n  },\n})\n\nexport const { dispatchFinishGetHistory, dispatchMilitaryHistoryLogout, dispatchStartGetHistory } = militaryServiceSlice.actions\nexport default militaryServiceSlice.reducer\n")),(0,o.kt)("p",null,"That is all it takes to add a new state to an existing slice file. Now the ",(0,o.kt)("strong",{parentName:"p"},"dispatchMilitaryHistoryLogout")," could be imported to any file and be dispatched."))}u.isMDXComponent=!0}}]);