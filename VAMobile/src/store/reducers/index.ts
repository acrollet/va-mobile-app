import { combineReducers } from 'redux'

import { ReduxAction } from 'store/types'
import accessibility, { AccessibilityState, initialAccessibilityState } from './accessibility'
import analytics, { AnalyticsState, initialAnalyticsState } from './analytics'
import appointments, { AppointmentsState, initialAppointmentsState } from './appointments'
import auth, { AuthState, initialAuthState } from './auth'
import authorizedServices, { AuthorizedServicesState, initialAuthorizedServicesState } from './authorizedServices'
import claimsAndAppeals, { ClaimsAndAppealsState, initialClaimsAndAppealsState } from './claimsAndAppeals'
import demo, { DemoState, initialDemoState } from './demo'
import directDeposit, { DirectDepositState, initialDirectDepositState } from './directDeposit'
import disabilityRating, { DisabilityRatingState, initialDisabilityRatingState } from './disabilityRating'
import errors, { ErrorsState, initialErrorsState } from './errors'
import letters, { LettersState, initialLettersState } from './letters'
import militaryService, { MilitaryServiceState, initialMilitaryServiceState } from './militaryService'
import notifications, { NotificationsState, initialNotificationsState } from './notifications'
import patient, { PatientState, initialPatientState } from './patient'
import personalInformation, { PersonalInformationState, initialPersonalInformationState } from './personalInformation'
import secureMessaging, { SecureMessagingState, initialSecureMessagingState } from './secureMessaging'
import snackBar, { SnackBarState, initialSnackBarState } from './snackBar'
import vaccine, { VaccineState, initialVaccineState } from './vaccine'

export * from './auth'
export * from './directDeposit'
export * from './militaryService'
export * from './personalInformation'
export * from './letters'
export * from './appointments'
export * from './claimsAndAppeals'
export * from './authorizedServices'
export * from './errors'
export * from './accessibility'
export * from './notifications'
export * from './secureMessaging'
export * from './demo'
export * from './analytics'
export * from './disabilityRating'
export * from './vaccine'
export * from './patient'
export * from './snackBar'

export interface StoreState {
  auth: AuthState
  directDeposit: DirectDepositState
  militaryService: MilitaryServiceState
  personalInformation: PersonalInformationState
  letters: LettersState
  appointments: AppointmentsState
  claimsAndAppeals: ClaimsAndAppealsState
  authorizedServices: AuthorizedServicesState
  errors: ErrorsState
  accessibility: AccessibilityState
  notifications: NotificationsState
  secureMessaging: SecureMessagingState
  demo: DemoState
  analytics: AnalyticsState
  disabilityRating: DisabilityRatingState
  vaccine: VaccineState
  patient: PatientState
  snackBar: SnackBarState
}

export const InitialState: StoreState = {
  auth: initialAuthState,
  directDeposit: initialDirectDepositState,
  militaryService: initialMilitaryServiceState,
  personalInformation: initialPersonalInformationState,
  letters: initialLettersState,
  appointments: initialAppointmentsState,
  claimsAndAppeals: initialClaimsAndAppealsState,
  authorizedServices: initialAuthorizedServicesState,
  errors: initialErrorsState,
  accessibility: initialAccessibilityState,
  notifications: initialNotificationsState,
  secureMessaging: initialSecureMessagingState,
  demo: initialDemoState,
  analytics: initialAnalyticsState,
  disabilityRating: initialDisabilityRatingState,
  vaccine: initialVaccineState,
  patient: initialPatientState,
  snackBar: initialSnackBarState,
}

const allReducers = combineReducers<StoreState, ReduxAction>({
  auth,
  directDeposit,
  militaryService,
  personalInformation,
  letters,
  appointments,
  claimsAndAppeals,
  authorizedServices,
  errors,
  accessibility,
  notifications,
  secureMessaging,
  demo,
  analytics,
  disabilityRating,
  vaccine,
  patient,
  snackBar,
})

export default allReducers
