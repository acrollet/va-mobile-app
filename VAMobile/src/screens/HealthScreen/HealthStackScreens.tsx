import { ImagePickerResponse } from 'react-native-image-picker'
import { TFunction } from 'i18next'
import { createStackNavigator } from '@react-navigation/stack'
import React, { ReactNode } from 'react'

import { DocumentPickerResponse } from 'screens/ClaimsScreen/ClaimsStackScreens'
import { FormHeaderType } from 'constants/secureMessaging'
import { SecureMessagingFormData } from 'store/api/types'
import { WebviewStackParams } from 'screens/WebviewScreen/WebviewScreen'
import AppointmentCancellationConfirmation from './Appointments/UpcomingAppointments/AppointmentCancellationConfirmation'
import Appointments from './Appointments'
import Attachments from './SecureMessaging/ComposeMessage/Attachments/Attachments'
import AttachmentsFAQ from './SecureMessaging/ComposeMessage/AttachmentsFAQ/AttachmentsFAQ'
import ComposeMessage from './SecureMessaging/ComposeMessage/ComposeMessage'
import EditDraft from './SecureMessaging/EditDraft/EditDraft'
import FolderMessages from './SecureMessaging/FolderMessages/FolderMessages'
import PastAppointmentDetails from './Appointments/PastAppointments/PastAppointmentDetails'
import PharmacyScreen from './Pharmacy'
import PrepareForVideoVisit from './Appointments/UpcomingAppointments/PrepareForVideoVisit/PrepareForVideoVisit'
import PrescriptionDetails from './Pharmacy/PrescriptionDetails/PrescriptionDetails'
import PrescriptionHistory from './Pharmacy/PrescriptionHistory/PrescriptionHistory'
import ReplyMessage from './SecureMessaging/ReplyMessage/ReplyMessage'
import ReplyTriageErrorScreen from './SecureMessaging/SendConfirmation/ReplyTriageErrorScreen'
import SecureMessaging from './SecureMessaging'
import UpcomingAppointmentDetails from './Appointments/UpcomingAppointments/UpcomingAppointmentDetails'
import VaccineDetailsScreen from './Vaccines/VaccineDetails/VaccineDetailsScreen'
import VaccineListScreen from './Vaccines/VaccineList/VaccineListScreen'
import ViewMessageScreen from './SecureMessaging/ViewMessage/ViewMessageScreen'

export type HealthStackParamList = WebviewStackParams & {
  Health: undefined
  Appointments: undefined
  UpcomingAppointmentDetails: {
    appointmentID: string
  }
  PrepareForVideoVisit: undefined
  PastAppointmentDetails: {
    appointmentID: string
  }
  AppointmentCancellationConfirmation: {
    cancelID: string
    appointmentID: string
  }
  Messages: undefined
  SecureMessaging: undefined
  Inbox: {
    messageID: number
  }
  Folders: {
    folderID: number
  }
  FolderMessages: {
    folderID: number
    folderName: string
    draftSaved: boolean
  }
  ViewMessageScreen: {
    messageID: number
    folderID?: number
    currentPage?: number
    messagesLeft?: number
  }
  ComposeMessage: {
    attachmentFileToAdd?: ImagePickerResponse | DocumentPickerResponse
    attachmentFileToRemove?: ImagePickerResponse | DocumentPickerResponse
    saveDraftConfirmFailed?: boolean
  }
  ReplyMessage: {
    messageID: number
    attachmentFileToAdd: ImagePickerResponse | DocumentPickerResponse
    attachmentFileToRemove: ImagePickerResponse | DocumentPickerResponse
  }
  EditDraft: {
    messageID: number
    attachmentFileToAdd: ImagePickerResponse | DocumentPickerResponse
    attachmentFileToRemove: ImagePickerResponse | DocumentPickerResponse
  }
  Attachments: {
    origin: FormHeaderType
    attachmentsList: Array<ImagePickerResponse | DocumentPickerResponse>
    messageID?: number
  }
  AttachmentsFAQ: {
    originHeader: string
  }
  RemoveAttachment: {
    origin: FormHeaderType
    attachmentFileToRemove: ImagePickerResponse | DocumentPickerResponse
    messageID?: number
  }
  SendConfirmation: {
    originHeader: string
    messageData: SecureMessagingFormData
    uploads?: (ImagePickerResponse | DocumentPickerResponse)[]
    replyToID?: number
  }
  SuccessfulSendScreen: undefined
  ReplyTriageErrorScreen: undefined
  VaccineList: undefined
  VaccineDetails: {
    vaccineId: string
  }
  Pharmacy: undefined
  PrescriptionHistory: undefined
  PrescriptionDetails: {
    prescriptionId: string
  }
}

const HealthStack = createStackNavigator<HealthStackParamList>()

export const getHealthScreens = (t: TFunction): Array<ReactNode> => {
  return [
    //TODO add next level of nav
    // <SecureMessagingStack.Screen
    //   key={'InboxMessages'}
    //   name="InboxMessages"
    //   component={InboxMessages}
    //   options={{ title: t('secure_messaging.inbox_messages') }}
    // />,
    <HealthStack.Screen key={'Appointments'} name="Appointments" component={Appointments} options={{ title: t('appointments.appointments') }} />,
    <HealthStack.Screen
      key={'UpcomingAppointmentDetails'}
      name="UpcomingAppointmentDetails"
      component={UpcomingAppointmentDetails}
      options={{ title: t('appointments.appointment') }}
    />,
    <HealthStack.Screen key={'PrepareForVideoVisit'} name="PrepareForVideoVisit" component={PrepareForVideoVisit} />,
    <HealthStack.Screen key={'PastAppointmentDetails'} name="PastAppointmentDetails" component={PastAppointmentDetails} options={{ title: t('pastAppointmentDetails.title') }} />,
    <HealthStack.Screen
      key={'AppointmentCancellationConfirmation'}
      name="AppointmentCancellationConfirmation"
      component={AppointmentCancellationConfirmation}
      options={{ title: t('upcomingAppointmentDetails.cancelAppointment') }}
    />,
    <HealthStack.Screen key={'Messages'} name="Messages" component={SecureMessaging} options={{ title: t('secureMessaging.title') }} />,
    <HealthStack.Screen key={'FolderMessages'} name="FolderMessages" component={FolderMessages} options={{ title: t('secureMessaging.folders') }} />,
    <HealthStack.Screen key={'ViewMessage'} name="ViewMessageScreen" component={ViewMessageScreen} options={{ title: t('secureMessaging.viewMessage.title') }} />,
    <HealthStack.Screen key={'ComposeMessage'} name="ComposeMessage" component={ComposeMessage} options={{ title: t('secureMessaging.composeMessage.compose') }} />,
    <HealthStack.Screen key={'ReplyMessage'} name="ReplyMessage" component={ReplyMessage} options={{ title: t('secureMessaging.reply') }} />,
    <HealthStack.Screen key={'EditDraft'} name="EditDraft" component={EditDraft} options={{ title: t('secureMessaging.drafts.edit') }} />,
    <HealthStack.Screen key={'Attachments'} name="Attachments" component={Attachments} options={{ title: t('secureMessaging.attachments') }} />,
    <HealthStack.Screen key={'AttachmentsFAQ'} name="AttachmentsFAQ" component={AttachmentsFAQ} />,
    <HealthStack.Screen key={'ReplyTriageErrorScreen'} name="ReplyTriageErrorScreen" component={ReplyTriageErrorScreen} options={{ title: t('secureMessaging.reply') }} />,
    <HealthStack.Screen key={'VaccineList'} name="VaccineList" component={VaccineListScreen} options={{ title: t('vaVaccines.title') }} />,
    <HealthStack.Screen key={'VaccineDetails'} name="VaccineDetails" component={VaccineDetailsScreen} options={{ title: t('vaccines.details.title') }} />,
    <HealthStack.Screen key={'Pharmacy'} name="Pharmacy" component={PharmacyScreen} options={{ title: t('pharmacy.title') }} />,
    <HealthStack.Screen key={'PrescriptionHistory'} name="PrescriptionHistory" component={PrescriptionHistory} options={{ title: t('prescription.history.title') }} />,
    <HealthStack.Screen key={'PrescriptionDetails'} name="PrescriptionDetails" component={PrescriptionDetails} options={{ title: t('prescription.details.title') }} />,
  ]
}
