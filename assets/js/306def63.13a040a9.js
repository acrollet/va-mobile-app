"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5087],{29819:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return A},default:function(){return p}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],s={},l="VA App and Redux Toolkit",d={unversionedId:"Engineering/FrontEnd/ReduxToolkit/Overview/VAAppAndReduxToolkit",id:"Engineering/FrontEnd/ReduxToolkit/Overview/VAAppAndReduxToolkit",title:"VA App and Redux Toolkit",description:"Why Redux Toolkit",source:"@site/docs/Engineering/FrontEnd/ReduxToolkit/Overview/VAAppAndReduxToolkit.md",sourceDirName:"Engineering/FrontEnd/ReduxToolkit/Overview",slug:"/Engineering/FrontEnd/ReduxToolkit/Overview/VAAppAndReduxToolkit",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Overview/VAAppAndReduxToolkit",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redux Toolkit Overview",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Overview/ReduxToolkitOverview"},next:{title:"Add a New Feature State",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ReduxToolkit/Tutorials/AddNewStateInReduxToolKit"}},A=[{value:"Why Redux Toolkit",id:"why-redux-toolkit",children:[],level:2},{value:"VA App Redux Architectures",id:"va-app-redux-architectures",children:[{value:"With Standard Redux (older implementation)",id:"with-standard-redux-older-implementation",children:[],level:3},{value:"With Redux Toolkit (current implementation)",id:"with-redux-toolkit-current-implementation",children:[],level:3}],level:2}],c={toc:A};function p(t){var e=t.components,s=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"va-app-and-redux-toolkit"},"VA App and Redux Toolkit"),(0,r.kt)("h2",{id:"why-redux-toolkit"},"Why Redux Toolkit"),(0,r.kt)("p",null,"The reasons the VA mobile team decided to move to Redux toolkit from the regular Redux implementation are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redux Toolkit is the new modern way of writing Redux and is the new standard which most Redux's guides and documentation are moving to or suggesting to use."),(0,r.kt)("li",{parentName:"ul"},"The standard Redux has too much boiler plate and to add a new state you have to modify or add files in many different locations. With Redux Toolkit everything is in one file."),(0,r.kt)("li",{parentName:"ul"},"With Redux Toolkit we have devtools for debugging and the thunk middleware out of the box without extra configurations.")),(0,r.kt)("h2",{id:"va-app-redux-architectures"},"VA App Redux Architectures"),(0,r.kt)("p",null,"This section will show the difference from using the standard Redux and Redux Toolkit in our VA App. We will be using the disability rating as an example."),(0,r.kt)("h3",{id:"with-standard-redux-older-implementation"},"With Standard Redux (older implementation)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Folder Structure:")," With the standard Redux you would need three folders actions, reducers, and types. To add a new state you would have to add a file in each of those different sections."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard Redux Folders",src:i(6599).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actions Folder:")," Here is where the actions file would go. The action file would define the sync and async actions for a feature. Also the created file would need to be added to the actions index file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard Redux Action Folder",src:i(90371).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/actions/disabilityRating.ts',title:'"/src/store/actions/disabilityRating.ts'},"import * as api from 'store/api'\nimport { AsyncReduxAction, ReduxAction } from 'store/types'\nimport { RatingData, ScreenIDTypes } from '../api'\nimport { dispatchClearErrors, dispatchSetError, dispatchSetTryAgainFunction } from './errors'\nimport { getCommonErrorFromAPIError } from 'utils/errors'\nimport { isErrorObject } from 'utils/common'\n\n/**\n * Redux action to start disability ratings fetch\n *\n * @returns ReduxAction\n */\nconst dispatchStartGetRating = (): ReduxAction => {\n  return {\n    type: 'DISABILITY_RATING_START_GET_RATING',\n    payload: {},\n  }\n}\n\n/**\n * Redux action to set disability ratings data or error after fetch\n *\n * @returns ReduxAction\n */\nconst dispatchFinishGetRating = (ratingData?: RatingData, error?: Error): ReduxAction => {\n  return {\n    type: 'DISABILITY_RATING_FINISH_GET_RATING',\n    payload: {\n      ratingData,\n      error,\n    },\n  }\n}\n\n/**\n * Redux action to reset disability ratings on logout\n *\n * @returns ReduxAction\n */\nexport const dispatchDisabilityRatingLogout = (): ReduxAction => {\n  return {\n    type: 'DISABILITY_RATING_ON_LOGOUT',\n    payload: {},\n  }\n}\n\n/**\n * Redux action to get the users disability ratings\n *\n * @returns AsyncReduxAction\n */\nexport const getDisabilityRating = (screenID?: ScreenIDTypes): AsyncReduxAction => {\n  return async (dispatch, _getState): Promise<void> => {\n    dispatch(dispatchClearErrors(screenID))\n    dispatch(dispatchSetTryAgainFunction(() => dispatch(getDisabilityRating(screenID))))\n\n    try {\n      dispatch(dispatchStartGetRating())\n      const ratingData = await api.get<api.DisabilityRatingData>('/v0/disability-rating')\n\n      dispatch(dispatchFinishGetRating(ratingData?.data.attributes))\n    } catch (err) {\n      if (isErrorObject(err)) {\n        dispatch(dispatchFinishGetRating(undefined, err))\n        dispatch(dispatchSetError(getCommonErrorFromAPIError(err), screenID))\n      }\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/actions/index.ts',title:'"/src/store/actions/index.ts'},"export * from './auth'\nexport * from './directDeposit'\nexport * from './disabilityRating'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reducers Folder:")," Here is where the reducer file would go. The reducer file would define the initial state and reducer functions for a feature. Also the created file would need to be added to the reducers index file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard Redux Reducers Folder",src:i(78025).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/reducers/disabilityRating.ts',title:'"/src/store/reducers/disabilityRating.ts'},"import { RatingData } from 'store/api'\nimport createReducer from './createReducer'\n\nexport type DisabilityRatingState = {\n  ratingData?: RatingData\n  error?: Error\n  loading: boolean\n  needsDataLoad: boolean\n  preloadComplete: boolean\n}\n\nexport const initialDisabilityRatingState: DisabilityRatingState = {\n  loading: false,\n  needsDataLoad: true,\n  preloadComplete: false,\n}\n\nexport default createReducer<DisabilityRatingState>(initialDisabilityRatingState, {\n  DISABILITY_RATING_START_GET_RATING: (state, payload) => {\n    return {\n      ...state,\n      ...payload,\n      loading: true,\n    }\n  },\n  DISABILITY_RATING_FINISH_GET_RATING: (state, { ratingData, error }) => {\n    return {\n      ...state,\n      error,\n      ratingData,\n      needsDataLoad: error ? true : false,\n      preloadComplete: true,\n      loading: false,\n    }\n  },\n  DISABILITY_RATING_ON_LOGOUT: (_state, _payload) => {\n    return {\n      ...initialDisabilityRatingState,\n    }\n  },\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/reducers/index.ts',title:'"/src/store/reducers/index.ts'},"import { combineReducers } from 'redux'\nimport { ReduxAction } from 'store/types'\nimport auth, { AuthState, initialAuthState } from './auth'\nimport directDeposit, { DirectDepositState, initialDirectDepositState } from './directDeposit'\nimport disabilityRating, { DisabilityRatingState, initialDisabilityRatingState } from './disabilityRating'\n\nexport * from './auth'\nexport * from './directDeposit'\nexport * from './disabilityRating'\n\nexport interface StoreState {\n  auth: AuthState\n  directDeposit: DirectDepositState\n  disabilityRating: DisabilityRatingState\n}\n\nexport const InitialState: StoreState = {\n  auth: initialAuthState,\n  directDeposit: initialDirectDepositState,\n  disabilityRating: initialDisabilityRatingState,\n}\n\nconst allReducers = combineReducers<StoreState, ReduxAction>({\n  auth,\n  directDeposit,\n  disabilityRating,\n})\n\nexport default allReducers\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Types Folder:")," Here is where the type file would go. The type file would define the action's payload type and action creators definitions. Also the created file would need to be added to the types index file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard Redux Types Folder",src:i(8032).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/types/disabilityRating.ts',title:'"/src/store/types/disabilityRating.ts'},"import { ActionDef, EmptyPayload } from './index'\nimport { RatingData } from 'store/api'\n\n/**\n * Redux payload for DISABILITY_RATING_START_GET_RATING action\n */\nexport type DisabilityRatingStartGetRatingPayload = Record<string, unknown>\n\n/**\n *  Redux payload for DISABILITY_RATING_FINISH_GET_RATING action\n */\nexport type DisabilityRatingPayload = {\n  ratingData?: RatingData\n  error?: Error\n}\n\n/**\n *  All disability rating actions\n */\nexport interface DisabilityRatingActions {\n  /** Redux action to signify the initial start of getting the disablity rating*/\n  DISABILITY_RATING_START_GET_RATING: ActionDef<'DISABILITY_RATING_START_GET_RATING', DisabilityRatingPayload>\n  /** Redux action to signify that the disability rating is being retrieved */\n  DISABILITY_RATING_FINISH_GET_RATING: ActionDef<'DISABILITY_RATING_FINISH_GET_RATING', DisabilityRatingPayload>\n  /** Redux action to clear disability rating data on logout **/\n  DISABILITY_RATING_ON_LOGOUT: ActionDef<'DISABILITY_RATING_ON_LOGOUT', EmptyPayload>\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/types/index.ts',title:'"/src/store/types/index.ts'},"import { ThunkAction } from 'redux-thunk'\n\nimport { AuthActions } from './auth'\nimport { DirectDepositActions } from './directDeposit'\nimport { DisabilityRatingActions } from './disabilityRating'\n\nexport * from './auth'\nexport * from './directDeposit'\nexport * from './disabilityRating'\n\ntype ActObjs<T extends keyof AllActionDefs> = AllActionDefs[T]\ntype ActObjsPayload<T extends keyof AllActionDefs> = AllActionDefs[T]['payload']\n\nexport interface ActionDef<T extends string, P extends ActObjsPayload<AllActionTypes>> {\n  type: T\n  payload: P\n}\n\nexport type EmptyPayload = unknown\n\nexport type StoreStateFn = () => StoreState\n\nexport type AllActionDefs = AuthActions &\n  DirectDepositActions &\n  DisabilityRatingActions \n\ntype AllActionTypes = keyof AllActionDefs\n\nexport type ReduxAction = ActObjs<AllActionTypes>\n\nexport type AsyncReduxAction = ThunkAction<Promise<void>, StoreState, undefined, ReduxAction>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Store File:")," Here is where the store would be configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/index.tsx',title:'"/src/store/index.tsx'},"import { ReduxAction } from './types'\nimport { Store, applyMiddleware, createStore } from 'redux'\nimport logger from 'redux-logger'\nimport rootReducer, { StoreState } from './reducers'\nimport thunk from 'redux-thunk'\n\nexport * from './reducers'\nexport * from './actions'\nexport * from './types'\n\nconst configureStore = (state?: StoreState): Store<StoreState, ReduxAction> => {\n  const middleware = applyMiddleware(thunk, logger)\n\n  return createStore(rootReducer, state, middleware) as Store<StoreState, ReduxAction>\n}\n\nexport default configureStore\n")),(0,r.kt)("h3",{id:"with-redux-toolkit-current-implementation"},"With Redux Toolkit (current implementation)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Folder Structure:")," With Redux Toolkit you would need one folder slices. To add a new state you would have to add one file to the slices folder."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Redux Toolkit Folders",src:i(18622).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Slices Folder:")," Here is where you will define your slice file. This file is where everything will be added. With redux toolkit actions creators, types and reducers are created for you in the slice. Also the creted file needs to be added to the slices index file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Redux Toolkit Slices Folder",src:i(13973).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/slices/disabilityRatingSlice.ts',title:'"/src/store/slices/disabilityRatingSlice.ts'},"import { PayloadAction, createSlice } from '@reduxjs/toolkit'\n\nimport * as api from 'store/api'\nimport { AppThunk } from 'store'\nimport { RatingData, ScreenIDTypes } from 'store/api'\nimport { dispatchClearErrors, dispatchSetError, dispatchSetTryAgainFunction } from './errorSlice'\nimport { getCommonErrorFromAPIError } from 'utils/errors'\nimport { isErrorObject } from 'utils/common'\n\nexport type DisabilityRatingState = {\n  ratingData?: RatingData\n  error?: Error\n  loading: boolean\n  needsDataLoad: boolean\n  preloadComplete: boolean\n}\n\nexport const initialDisabilityRatingState: DisabilityRatingState = {\n  loading: false,\n  needsDataLoad: true,\n  preloadComplete: false,\n}\n\n/**\n * Redux action to get the users disability ratings\n */\nexport const getDisabilityRating =\n  (screenID?: ScreenIDTypes): AppThunk =>\n  async (dispatch) => {\n    dispatch(dispatchClearErrors(screenID))\n    dispatch(dispatchSetTryAgainFunction(() => dispatch(getDisabilityRating(screenID))))\n\n    try {\n      dispatch(dispatchStartGetRating())\n      const ratingData = await api.get<api.DisabilityRatingData>('/v0/disability-rating')\n\n      dispatch(dispatchFinishGetRating({ ratingData: ratingData?.data.attributes }))\n    } catch (error) {\n      if (isErrorObject(error)) {\n        dispatch(dispatchFinishGetRating({ error }))\n        dispatch(dispatchSetError({ errorType: getCommonErrorFromAPIError(error), screenID }))\n      }\n    }\n  }\n\n/**\n * Redux slice that will create the actions and reducers\n */\nconst disabilitRatingSlice = createSlice({\n  name: 'disabilityRating',\n  initialState: initialDisabilityRatingState,\n  reducers: {\n    dispatchStartGetRating: (state) => {\n      state.loading = true\n    },\n\n    dispatchFinishGetRating: (state, action: PayloadAction<{ ratingData?: RatingData; error?: Error }>) => {\n      const { ratingData, error } = action.payload\n      state.ratingData = ratingData\n      state.error = error\n      state.needsDataLoad = error ? true : false\n      state.preloadComplete = true\n      state.loading = false\n    },\n\n    dispatchDisabilityRatingLogout: () => {\n      return { ...initialDisabilityRatingState }\n    },\n  },\n})\n\nexport const { dispatchDisabilityRatingLogout, dispatchFinishGetRating, dispatchStartGetRating } = disabilitRatingSlice.actions\nexport default disabilitRatingSlice.reducer\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/slices/index.tsx',title:'"/src/store/slices/index.tsx'},"import { RootState } from 'store'\nimport { initialAuthState } from 'store/slices/authSlice'\nimport { initialDirectDepositState } from 'store/slices/directDepositSlice'\nimport { initialDisabilityRatingState } from 'store/slices/disabilityRatingSlice'\n\nexport * from './authSlice'\nexport * from './directDepositSlice'\nexport * from './disabilityRatingSlice'\n\nexport const InitialState: RootState = {\n  auth: initialAuthState,\n  directDeposit: initialDirectDepositState,\n  disabilityRating: initialDisabilityRatingState,\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Store File:")," Here is where the store would be configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/index.tsx',title:'"/src/store/index.tsx'},"import { AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'\nimport authReducer from 'store/slices/authSlice'\nimport directDepositReducer from 'store/slices/directDepositSlice'\nimport disabilityRatingReducer from 'store/slices/disabilityRatingSlice'\n\n// Creates the store\nconst store = configureStore({\n  reducer: {\n    auth: authReducer,\n    directDeposit: directDepositReducer,\n    disabilityRating: disabilityRatingReducer,\n  },\n  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }).concat(logger),\n  devTools: process.env.NODE_ENV !== 'production',\n})\n\n//creates the typed dispatch to work with the thunk actions\nexport type AppDispatch = typeof store.dispatch\n\n// creates the types root state\nexport type RootState = ReturnType<typeof store.getState>\n\n// creates the types thunk action creator\nexport type AppThunk<ReturnType = Promise<void>> = ThunkAction<ReturnType, RootState, unknown, AnyAction>\n")))}p.isMDXComponent=!0},18622:function(t,e){e.Z="data:image/png;base64,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"},13973:function(t,e,i){e.Z=i.p+"assets/images/redux_toolkit_slices_folder-3432096f167742cf06a8bab1a3558376.png"},90371:function(t,e,i){e.Z=i.p+"assets/images/standard_redux_actions_folder-0fa26dc52abd2e6d6983fab962b37990.png"},6599:function(t,e){e.Z="data:image/png;base64,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"},78025:function(t,e,i){e.Z=i.p+"assets/images/standard_redux_reducers_folder-36d6a7d17302a2031f9d977eb5a54585.png"},8032:function(t,e,i){e.Z=i.p+"assets/images/standard_redux_types_folder-5e41aa93fd60a192c3c221f9b7971795.png"}}]);