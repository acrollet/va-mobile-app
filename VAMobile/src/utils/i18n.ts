import * as appointmentEN from 'translations/en/appointments.json'
import * as claimsEN from 'translations/en/claims.json'
import * as commonEN from 'translations/en/common.json'
import * as homeEN from 'translations/en/home.json'
import * as loginEN from 'translations/en/login.json'
import * as profileEN from 'translations/en/profile.json'
import * as secureMessagingEN from 'translations/en/secureMessaging.json'
import * as settingsEN from 'translations/en/settings.json'

import { NAMESPACE } from 'constants/namespaces'

import * as RNLocalize from 'react-native-localize'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const fallbackLanguage = { languageTag: 'en', isRTL: false }
const defaultLanguage = RNLocalize.findBestAvailableLanguage(['en']) || fallbackLanguage

const resources = {
  en: {
    common: commonEN,
    appointments: appointmentEN,
    claims: claimsEN,
    home: homeEN,
    login: loginEN,
    profile: profileEN,
    secureMessaging: secureMessagingEN,
    settings: settingsEN,
  },
}

// Initialize the internationalization library
i18n.use(initReactI18next).init({
  lng: defaultLanguage.languageTag,
  resources,
  defaultNS: NAMESPACE.COMMON,
  nsSeparator: ':',
  keySeparator: false,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    useSuspense: true,
  },
})

export default i18n
