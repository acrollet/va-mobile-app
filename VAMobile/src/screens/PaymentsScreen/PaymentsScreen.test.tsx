import React from 'react'
import { fireEvent, screen } from '@testing-library/react-native'
import { when } from 'jest-when'

import { context, render } from 'testUtils'
import PaymentsScreen from './index'

const mockNavigationSpy = jest.fn()
jest.mock('utils/hooks', () => {
  const original = jest.requireActual('utils/hooks')
  return {
    ...original,
    useRouteNavigation: () => {
      return mockNavigationSpy
    },
  }
})

jest.mock('../../api/authorizedServices/getAuthorizedServices', () => {
  let original = jest.requireActual('../../api/authorizedServices/getAuthorizedServices')
  return {
    ...original,
    useAuthorizedServices: jest.fn().mockReturnValueOnce({
      status: "success",
      data: {
        appeals: true,
        appointments: true,
        claims: true,
        decisionLetters: true,
        directDepositBenefits: true,
        directDepositBenefitsUpdate: false,
        disabilityRating: true,
        genderIdentity: true,
        lettersAndDocuments: true,
        militaryServiceHistory: true,
        paymentHistory: true,
        preferredName: true,
        prescriptions: true,
        scheduleAppointments: true,
        secureMessaging: true,
        userProfileUpdate: true
      }
    }).mockReturnValue({
      status: "success",
      data: {
        appeals: true,
        appointments: true,
        claims: true,
        decisionLetters: true,
        directDepositBenefits: true,
        directDepositBenefitsUpdate: true,
        disabilityRating: true,
        genderIdentity: true,
        lettersAndDocuments: true,
        militaryServiceHistory: true,
        paymentHistory: true,
        preferredName: true,
        prescriptions: true,
        scheduleAppointments: true,
        secureMessaging: true,
        userProfileUpdate: true
      }
    })
  }
})

context('PaymentsScreen', () => {
  let navigateToDirectDepositSpy: jest.Mock
  let navigateToHowToUpdateDirectDepositSpy: jest.Mock
  let navigateToPaymentHistorySpy: jest.Mock

  const initializeTestInstance = (): void => {
    navigateToDirectDepositSpy = jest.fn()
    navigateToHowToUpdateDirectDepositSpy = jest.fn()
    navigateToPaymentHistorySpy = jest.fn()

    when(mockNavigationSpy)
      .mockReturnValue(() => {})
      .calledWith('DirectDeposit')
      .mockReturnValue(navigateToDirectDepositSpy)
      .calledWith('HowToUpdateDirectDeposit')
      .mockReturnValue(navigateToHowToUpdateDirectDepositSpy)
      .calledWith('PaymentHistory')
      .mockReturnValue(navigateToPaymentHistorySpy)

    render(<PaymentsScreen />)
  }

  describe('when user does not have directDepositBenefits', () => {
    it('should navigate to HowToUpdateDirectDeposit', () => {
      initializeTestInstance()
      fireEvent.press(screen.getByRole('menuitem', { name: 'Direct deposit information' }))
      expect(navigateToHowToUpdateDirectDepositSpy).toHaveBeenCalled()
    })
  })

  describe('when user does have directDepositBenefits', () => {
    it('should navigate to DirectDeposit', () => {
      initializeTestInstance()
      fireEvent.press(screen.getByRole('menuitem', { name: 'Direct deposit information' }))
      expect(navigateToDirectDepositSpy).toHaveBeenCalled()
    })
  })

  describe('when user click on VA payment history', () => {
    it('should navigate to PaymentHistory', () => {
      initializeTestInstance()
      fireEvent.press(screen.getByRole('menuitem', { name: 'VA payment history' }))
      expect(navigateToPaymentHistorySpy).toHaveBeenCalled()
    })
  })
})
