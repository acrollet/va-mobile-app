import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import { ReactTestInstance, act } from 'react-test-renderer'
import { context, findByTestID, mockStore, render, RenderAPI } from 'testUtils'

import { ErrorComponent, LoadingComponent, TextView } from 'components'
import ProfileBanner from '../ProfileBanner'
import MilitaryInformationScreen from './index'
import { ErrorsState, initialAuthorizedServicesState, initialAuthState, initialErrorsState, initializeErrorsByScreenID, initialMilitaryServiceState } from 'store/slices'
import { BranchesOfServiceConstants, ServiceData } from 'store/api/types'
import { CommonErrorTypesConstants } from 'constants/errors'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import NoMilitaryInformationAccess from './NoMilitaryInformationAccess'
import { waitFor } from '@testing-library/react-native'

context('MilitaryInformationScreen', () => {
  let component: RenderAPI
  let testInstance: ReactTestInstance
  const serviceHistory = [
    {
      branchOfService: BranchesOfServiceConstants.MarineCorps,
      beginDate: '1993-06-04',
      endDate: '1995-07-10',
      formattedBeginDate: 'June 04, 1993',
      formattedEndDate: 'July 10, 1995',
    },
  ]

  const initializeTestInstance = (loading = false, errorsState: ErrorsState = initialErrorsState, needDataLoad = true) => {
    component = render(<MilitaryInformationScreen />, {
      preloadedState: {
        auth: { ...initialAuthState },
        militaryService: {
          ...initialMilitaryServiceState,
          loading,
          serviceHistory,
          mostRecentBranch: BranchesOfServiceConstants.MarineCorps,
          needDataLoad,
        },
        authorizedServices: {
          ...initialAuthorizedServicesState,
          militaryServiceHistory: true,
        },
        errors: errorsState,
      },
    })

    testInstance = component.container
  }

  beforeEach(async () => {
    await waitFor(() => {
      initializeTestInstance()
    })
  })

  it('initializes correctly', async () => {
    await waitFor(() => {
      expect(component).toBeTruthy()

      const profileBanner = testInstance.findAllByType(ProfileBanner)
      expect(profileBanner).toBeTruthy()

      const header = findByTestID(testInstance, 'period-of-service')
      expect(header.props.children).toBe('Period of service')

      const texts = testInstance.findAllByType(TextView)
      expect(texts[3].props.children).toBe('United States Marine Corps')
      expect(texts[4].props.children).toBe('June 04, 1993 - July 10, 1995')

      const link = testInstance.findByProps({ accessibilityRole: 'link' })
      expect(link.props.children).toBe("What if my military service information doesn't look right?")
    })
  })

  describe('when loading is set to true', () => {
    it('should show loading screen', async () => {
      initializeTestInstance(true)

      await waitFor(() => {
        expect(testInstance.findByType(LoadingComponent)).toBeTruthy()
      })
    })
  })

  describe('when common error occurs', () => {
    it('should render error component when the stores screenID matches the components screenID', async () => {
      const errorsByScreenID = initializeErrorsByScreenID()
      errorsByScreenID[ScreenIDTypesConstants.MILITARY_INFORMATION_SCREEN_ID] = CommonErrorTypesConstants.NETWORK_CONNECTION_ERROR

      const errorState: ErrorsState = {
        ...initialErrorsState,
        errorsByScreenID,
      }

      await waitFor(() => {
        initializeTestInstance(true, errorState, false)
        expect(testInstance.findAllByType(ErrorComponent)).toHaveLength(1)
      })
    })

    it('should not render error component when the stores screenID does not match the components screenID', async () => {
      const errorsByScreenID = initializeErrorsByScreenID()
      errorsByScreenID[ScreenIDTypesConstants.ASK_FOR_CLAIM_DECISION_SCREEN_ID] = CommonErrorTypesConstants.NETWORK_CONNECTION_ERROR

      const errorState: ErrorsState = {
        ...initialErrorsState,
        errorsByScreenID,
      }

      await waitFor(() => {
        initializeTestInstance(true, errorState)
      })
      expect(testInstance.findAllByType(ErrorComponent)).toHaveLength(0)
    })
  })

  describe('when service history is empty', () => {
    it('should render NoMilitaryInformationAccess', async () => {
      component = render(<MilitaryInformationScreen />, {
        preloadedState: {
          auth: { ...initialAuthState },
          militaryService: {
            ...initialMilitaryServiceState,
            serviceHistory: [],
            mostRecentBranch: BranchesOfServiceConstants.MarineCorps,
          },
          authorizedServices: {
            ...initialAuthorizedServicesState,
            militaryServiceHistory: true,
          },
        },
      })

      testInstance = component.container

      await waitFor(() => {
        expect(testInstance.findByType(NoMilitaryInformationAccess)).toBeTruthy()
      })
    })
  })

  describe('when military service history authorization is false', () => {
    it('should render NoMilitaryInformationAccess', async () => {
      component = render(<MilitaryInformationScreen />, {
        preloadedState: {
          auth: { ...initialAuthState },
          militaryService: {
            ...initialMilitaryServiceState,
            serviceHistory: [{} as ServiceData],
            mostRecentBranch: BranchesOfServiceConstants.MarineCorps,
          },
          authorizedServices: {
            ...initialAuthorizedServicesState,
            militaryServiceHistory: false,
          },
        },
      })

      testInstance = component.container
      await waitFor(() => {
        expect(testInstance.findByType(NoMilitaryInformationAccess)).toBeTruthy()
      })
    })
  })

  describe('when service history is not empty and military service history authorization is true', () => {
    it('should not render NoMilitaryInformationAccess', async () => {
      component = render(<MilitaryInformationScreen />, {
        preloadedState: {
          auth: { ...initialAuthState },
          militaryService: {
            ...initialMilitaryServiceState,
            serviceHistory: [{} as ServiceData],
            mostRecentBranch: BranchesOfServiceConstants.MarineCorps,
          },
          authorizedServices: {
            ...initialAuthorizedServicesState,
            militaryServiceHistory: true,
          },
        },
      })

      testInstance = component.container

      await waitFor(() => {
        expect(testInstance.findAllByType(NoMilitaryInformationAccess)).toHaveLength(0)
      })
    })
  })
})
