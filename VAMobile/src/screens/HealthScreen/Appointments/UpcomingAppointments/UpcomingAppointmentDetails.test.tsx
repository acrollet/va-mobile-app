import 'react-native'
import React from 'react'
import { InteractionManager, Linking, Pressable } from 'react-native'

// Note: test renderer must be required after react-native.
import { context, mockNavProps, mockStore, renderWithProviders, findByTypeWithSubstring, findByTypeWithText } from 'testUtils'
import { act } from 'react-test-renderer'

import { forEach } from 'underscore'

import { InitialState } from 'store/reducers'
import UpcomingAppointmentDetails from './UpcomingAppointmentDetails'
import {
  AppointmentPhone,
  AppointmentStatus,
  AppointmentType,
  AppointmentCancellationStatusConstants,
  AppointmentCancellationStatusTypes,
  AppointmentStatusDetailType,
  AppointmentTypeConstants,
  AppointmentStatusConstants,
  AppointmentStatusDetailTypeConsts,
} from 'store/api/types'
import { AlertBox, ClickForActionLink, TextView, VAButton } from 'components'
import { isAndroid } from 'utils/platform'
import { defaultAppoinment, defaultAppointmentAttributes, defaultAppointmentLocation } from 'utils/tests/appointments'

context('UpcomingAppointmentDetails', () => {
  let store: any
  let component: any
  let testInstance: any
  let props: any
  let goBackSpy = jest.fn()
  let navigateSpy = jest.fn()

  const runAfterTransition = (testToRun: () => void) => {
    InteractionManager.runAfterInteractions(() => {
      testToRun()
    })
    jest.runAllTimers()
  }

  let apptPhoneData = {
    areaCode: '123',
    number: '456-7890',
    extension: '',
  }

  const initializeTestInstance = (
    appointmentType: AppointmentType = AppointmentTypeConstants.VA,
    status: AppointmentStatus = AppointmentStatusConstants.BOOKED,
    phoneData: AppointmentPhone | null = apptPhoneData,
    isCovidVaccine: boolean = false,
    appointmentCancellationStatus?: AppointmentCancellationStatusTypes,
    statusDetail: AppointmentStatusDetailType | null = null,
  ): void => {
    store = mockStore({
      ...InitialState,
      appointments: {
        ...InitialState.appointments,
        appointment: {
          ...defaultAppoinment,
          attributes: {
            ...defaultAppointmentAttributes,
            appointmentType,
            status,
            statusDetail,
            isCovidVaccine,
            location: {
              ...defaultAppointmentLocation,
              phone: phoneData === null ? undefined : phoneData,
            },
          },
        },
        appointmentCancellationStatus: appointmentCancellationStatus,
      },
    })

    props = mockNavProps(undefined, { setOptions: jest.fn(), goBack: goBackSpy, navigate: navigateSpy }, { params: { appointmentID: '1' } })

    act(() => {
      component = renderWithProviders(<UpcomingAppointmentDetails {...props} />, store)
    })

    testInstance = component.root
  }

  beforeEach(() => {
    initializeTestInstance()
  })

  it('initializes correctly', async () => {
    expect(component).toBeTruthy()
  })

  describe('when the appointment type is atlas', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.VA_VIDEO_CONNECT_ATLAS)
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('VA Video Connect\r\nATLAS location')
      })
    })
    it('should display the appointment code', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[9].props.children).toEqual('Appointment code: 123 code')
      })
    })
  })

  describe('when the appointment type is at home', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.VA_VIDEO_CONNECT_HOME)
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('VA Video Connect\r\nhome')
      })
    })
    it('should display the how to join your virtual session text', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[4].props.children).toEqual('How to join your virtual session')
        expect(testInstance.findAllByType(TextView)[5].props.children).toEqual('You can join VA Video Connect 30 minutes prior to the start time')
      })
    })

    it('should display the join session button', async () => {
      const buttons = testInstance.findAllByType(VAButton)
      runAfterTransition(() => {
        expect(buttons.length).toEqual(1)
        expect(buttons[0].props.testID).toEqual('Join session')
      })
    })

    it('should call Linking openURL on Android', async () => {
      runAfterTransition(() => {
        const isAndroidMock = isAndroid as jest.Mock
        isAndroidMock.mockReturnValue(true)
        const buttons = testInstance.findAllByType(Pressable)
        buttons[0].props.onPress()
        expect(Linking.openURL).toHaveBeenCalled()
      })
    })
  })

  describe('when the appointment type is onsite', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.VA_VIDEO_CONNECT_ONSITE)
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('VA Video Connect\r\nVA location')
      })
    })

    it('should state that the video meeting must be joined from the listed location', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[5].props.children).toEqual('You must join this video meeting from the VA location listed below.')
      })
    })

    it('should display the provider', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[7].props.children).toEqual('Larry TestDoctor')
      })
    })
  })

  describe('when the appointment type is gfe', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.VA_VIDEO_CONNECT_GFE)
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('VA Video Connect\r\nusing a VA device')
      })
    })

    it('should state that the video meeting must be joined using a VA device', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[5].props.children).toEqual("To join this video appointment, you'll need to use a device we provide.")
      })
    })
  })

  describe('when the appointment type is community care', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.COMMUNITY_CARE)
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('Community care')
      })
    })

    it('should display a special instructions section to display the comment field', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[12].props.children).toEqual('Special instructions')
        expect(testInstance.findAllByType(TextView)[13].props.children).toEqual('Please arrive 20 minutes before the start of your appointment')
      })
    })
  })

  describe('when the appointment type is va', () => {
    it('should display the name of the facility location', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('VA appointment')
        expect(testInstance.findAllByType(TextView)[4].props.children).toEqual('Blind Rehabilitation Center')
      })
    })
  })

  describe('when the appointment type is covid vaccine', () => {
    beforeEach(() => {
      initializeTestInstance(undefined, undefined, undefined, true)
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[0].props.children).toEqual('COVID-19 vaccine')
      })
    })
    it('should display the name of the facility location', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(TextView)[4].props.children).toEqual('COVID-19 vaccine')
      })
    })
  })

  describe('when there is no phone data', () => {
    it('should not display any click to call link', async () => {
      initializeTestInstance(undefined, undefined, null) // force value of phone to null (undefined will use default arg value)
      runAfterTransition(() => {
        const allClickForActionLinks = testInstance.findAllByType(ClickForActionLink)

        forEach(allClickForActionLinks, (clickForActionLink) => {
          expect(clickForActionLink.props.linkType).not.toEqual('call')
        })
      })
    })
  })

  describe('when the status is CANCELLED', () => {
    it('should display the schedule another appointment text', async () => {
      initializeTestInstance(undefined, AppointmentStatusConstants.CANCELLED)
      runAfterTransition(() => {
        expect(findByTypeWithText(testInstance, TextView, 'To schedule another appointment, please visit VA.gov or call your VA medical center.')).toBeTruthy()
      })
    })
  })

  describe('when the status is not CANCELLED', () => {
    it('should display the add to calendar click for action link', async () => {
      runAfterTransition(() => {
        expect(testInstance.findAllByType(ClickForActionLink)[0].props.displayedText).toEqual('Add to calendar')
      })
    })
  })

  describe('when the appointment cancellation is successful', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.VA_VIDEO_CONNECT_GFE, undefined, undefined, undefined, AppointmentCancellationStatusConstants.SUCCESS)
    })
    it('should display alert', async () => {
      runAfterTransition(() => {
        expect(testInstance.findByType(AlertBox)).toBeTruthy()
      })
    })
  })

  describe('when the appointment cancellation is unsuccessful', () => {
    beforeEach(() => {
      initializeTestInstance(AppointmentTypeConstants.VA_VIDEO_CONNECT_GFE, undefined, undefined, undefined, AppointmentCancellationStatusConstants.FAIL)
    })

    it('should display alert', async () => {
      runAfterTransition(() => {
        expect(testInstance.findByType(AlertBox)).toBeTruthy()
      })
    })
  })

  describe('when the appointment is canceled', () => {
    it('should show if you cancelled', async () => {
      initializeTestInstance(undefined, AppointmentStatusConstants.CANCELLED, undefined, undefined, undefined, AppointmentStatusDetailTypeConsts.PATIENT)
      runAfterTransition(() => {
        expect(findByTypeWithSubstring(testInstance, TextView, 'You canceled')).toBeTruthy()
      })
    })

    it('should show if you cancelled (rebook)', async () => {
      initializeTestInstance(undefined, AppointmentStatusConstants.CANCELLED, undefined, undefined, undefined, AppointmentStatusDetailTypeConsts.PATIENT_REBOOK)
      runAfterTransition(() => {
        expect(findByTypeWithSubstring(testInstance, TextView, 'You canceled')).toBeTruthy()
      })
    })

    it('should show if facility cancelled', async () => {
      initializeTestInstance(undefined, AppointmentStatusConstants.CANCELLED, undefined, undefined, undefined, AppointmentStatusDetailTypeConsts.CLINIC)
      runAfterTransition(() => {
        expect(findByTypeWithSubstring(testInstance, TextView, 'Facility canceled')).toBeTruthy()
      })
    })

    it('should show if facility cancelled (rebook)', async () => {
      initializeTestInstance(undefined, AppointmentStatusConstants.CANCELLED, undefined, undefined, undefined, AppointmentStatusDetailTypeConsts.CLINIC_REBOOK)
      runAfterTransition(() => {
        expect(findByTypeWithSubstring(testInstance, TextView, 'Facility canceled')).toBeTruthy()
      })
    })
  })

  describe('when navigating to upcoming appointment details page', () => {
    it('should show loading component', async () => {
      expect(testInstance.findByType(TextView).props.children).toEqual("We're loading your appointment details")
    })
  })
})
