"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8943],{38909:function(e,n,t){t.d(n,{Z:function(){return d}});var i=t(67294),o=t(19055),r=t(26396),a=t(58215),c=t(82224),l=t(36005),s=function(e){var n=e.props;return n?i.createElement(i.Fragment,null,l.ZP.isEmpty(n)?i.createElement("pre",{className:"preText"},"This component does not have props defined"):i.createElement("table",null,i.createElement("thead",null,i.createElement("tr",null,i.createElement("th",null,"Name"),i.createElement("th",null,"Type"),i.createElement("th",null,"Default Value"),i.createElement("th",null,"Required"),i.createElement("th",null,"Description"))),i.createElement("tbody",null,Object.keys(n).map((function(e){var t;return i.createElement("tr",{key:e},i.createElement("td",null,i.createElement("code",null,e)),i.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),i.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),i.createElement("td",null,n[e].required?"Yes":"No"),i.createElement("td",null,n[e].description))}))))):null};function d(e){var n=(0,c.N)(e.componentName)[0],t=n.description,l=n.displayName,d=n.props,u="How to use the "+l+" component",p="Full code for the "+l+" component";return i.createElement(i.Fragment,null,t,i.createElement("br",null),i.createElement("br",null),i.createElement(r.Z,null,i.createElement(a.Z,{value:"props",label:"Properties"},i.createElement(s,{props:d})),i.createElement(a.Z,{value:"example",label:"Example"},e.example&&i.createElement(o.Z,{title:u,className:"language-tsx test"},e.example)),i.createElement(a.Z,{value:"code",label:"Source Code"},e.codeString&&i.createElement(o.Z,{title:p,className:"language-tsx"},e.codeString)),i.createElement(a.Z,{value:"accessibility",label:"Accessibility"},i.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,n,t){t.d(n,{N:function(){return o}});var i=t(28084),o=function(e){return(0,i.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},90658:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},exampleString:function(){return f},default:function(){return m}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=(t(19055),t(48035)),c=t(38909),l=["components"],s={},d=void 0,u={unversionedId:"Engineering/FrontEnd/ComponentsSection/Uncategorized/NotificationManager",id:"Engineering/FrontEnd/ComponentsSection/Uncategorized/NotificationManager",title:"NotificationManager",description:"export const exampleString =`return (",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/NotificationManager.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Uncategorized",slug:"/Engineering/FrontEnd/ComponentsSection/Uncategorized/NotificationManager",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/NotificationManager",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CollapsibleView",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/CollapsibleView"},next:{title:"VAImage",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Uncategorized/VAImage"}},p=[],f='return (\n    <ActionSheetProvider>\n      <ThemeProvider theme={theme}>\n        <Provider store={store}>\n          <I18nextProvider i18n={i18n}>\n            <NavigationContainer ref={navigationRef} onReady={navOnReady} onStateChange={onNavStateChange}>\n              <NotificationManager>\n                <SafeAreaProvider>\n                  <StatusBar barStyle="light-content" backgroundColor={theme.colors.icon.active} />\n                  <AuthGuard />\n                </SafeAreaProvider>\n              </NotificationManager>\n            </NavigationContainer>\n          </I18nextProvider>\n        </Provider>\n      </ThemeProvider>\n    </ActionSheetProvider>\n  )',g={toc:p,exampleString:f};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(c.Z,{componentName:"NotificationManager",example:f,codeString:a.Z,mdxType:"ComponentTopInfo"}))}m.isMDXComponent=!0},48035:function(e,n){n.Z="import { AuthState } from 'store/slices'\nimport { NotificationBackgroundFetchResult, Notifications } from 'react-native-notifications'\nimport { RootState } from 'store'\nimport { View } from 'react-native'\nimport { dispatchSetTappedForegroundNotification, registerDevice } from 'store/slices/notificationSlice'\nimport { useAppDispatch } from 'utils/hooks'\nimport { useSelector } from 'react-redux'\nimport React, { FC, useEffect, useState } from 'react'\n\nconst foregroundNotifications: Array<string> = []\n\n/**\n * notification manager component to handle all push logic\n */\nconst NotificationManager: FC = ({ children }) => {\n  const { loggedIn } = useSelector<RootState, AuthState>((state) => state.auth)\n  const dispatch = useAppDispatch()\n  const [eventsRegistered, setEventsRegistered] = useState(false)\n  useEffect(() => {\n    const register = () => {\n      Notifications.events().registerRemoteNotificationsRegistered((event) => {\n        console.debug('Device Token Received', event.deviceToken)\n        dispatch(registerDevice(event.deviceToken))\n      })\n      Notifications.events().registerRemoteNotificationsRegistrationFailed((event) => {\n        //TODO: Log this error in crashlytics?\n        console.error(event)\n        dispatch(registerDevice())\n      })\n      Notifications.registerRemoteNotifications()\n    }\n\n    if (loggedIn) {\n      register()\n    }\n  }, [dispatch, loggedIn])\n\n  const registerNotificationEvents = () => {\n    // Register callbacks for notifications that happen when the app is in the foreground\n    Notifications.events().registerNotificationReceivedForeground((notification, completion) => {\n      console.debug('Notification Received - Foreground', notification)\n      foregroundNotifications.push(notification.identifier)\n      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.\n      completion({ alert: true, sound: true, badge: true })\n    })\n\n    // Register callback for opened notifications\n    Notifications.events().registerNotificationOpened((notification, completion) => {\n      /** this should be logged in firebase automatically. Anything here should be actions the app takes when it\n       * opens like deep linking, etc\n       */\n      if (foregroundNotifications.includes(notification.identifier)) {\n        dispatch(dispatchSetTappedForegroundNotification())\n      }\n      console.debug('Notification opened by device user', notification)\n      console.debug(`Notification opened with an action identifier: ${notification.identifier}`)\n      completion()\n    })\n\n    // Register callbacks for notifications that happen when the app is in the background\n    Notifications.events().registerNotificationReceivedBackground((notification, completion) => {\n      console.debug('Notification Received - Background', notification)\n      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.\n      completion(NotificationBackgroundFetchResult.NEW_DATA)\n    })\n\n    // Callback in case there is need to do something with initial notification before it goes to system tray\n    Notifications.getInitialNotification()\n      .then((notification) => {\n        console.debug('Initial notification was:', notification || 'N/A')\n      })\n      .catch((err) => console.error('getInitialNotification() failed', err))\n  }\n\n  if (!eventsRegistered) {\n    registerNotificationEvents()\n    setEventsRegistered(true)\n  }\n\n  const s = { flex: 1 }\n  return <View style={s}>{children}</View>\n}\n\nexport default NotificationManager\n"}}]);