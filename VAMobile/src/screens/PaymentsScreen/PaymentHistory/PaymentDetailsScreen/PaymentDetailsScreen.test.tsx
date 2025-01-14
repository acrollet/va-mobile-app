import React from 'react'
import { screen } from '@testing-library/react-native'

import { context, mockNavProps, render } from 'testUtils'
import { initialPaymentsState } from 'store/slices'
import PaymentDetailsScreen from './PaymentDetailsScreen'
import { formatDateUtc } from 'utils/formattingUtils'

context('PaymentDetailsScreen', () => {
  let props: any
  let paymentDate: string
  let formattedDate: string

  const initializeTestInstance = (pId: string = '1') => {
    props = mockNavProps(
      {},
      {
        goBack: jest.fn(),
        navigate: jest.fn(),
      },
      { params: { paymentID: pId } },
    )
    paymentDate = '2021-02-01T00:00:00.000-07:00'
    formattedDate = formatDateUtc(paymentDate, 'MMMM d, yyyy')

    render(<PaymentDetailsScreen {...props} />, {
      preloadedState: {
        payments: {
          ...initialPaymentsState,
          paymentsById: {
            '1': {
              id: '1',
              type: 'paymentHistoryInformation',
              attributes: {
                date: paymentDate,
                amount: '$3,746.20',
                paymentType: 'Compensation & Pension - Recurring',
                paymentMethod: 'Direct Deposit',
                bank: 'BANK OF AMERICA, N.A.',
                account: '********0567',
              },
            },
            '2': {
              id: '2',
              type: 'paymentHistoryInformation',
              attributes: {
                date: paymentDate,
                amount: '$3,746.20',
                paymentType: 'Compensation & Pension - Recurring',
                paymentMethod: 'Paper Check',
                bank: null,
                account: null,
              },
            },
          },
        },
      },
    })
  }

  describe('when showing payment info', () => {
    it('should show payment details information when direct deposit', () => {
      initializeTestInstance()
      expect(screen.getByText(formattedDate)).toBeTruthy()
      expect(screen.getByRole('header', { name: 'Compensation & Pension - Recurring' })).toBeTruthy()
      expect(screen.getByText('Amount')).toBeTruthy()
      expect(screen.getByText('$3,746.20')).toBeTruthy()
      expect(screen.getByText('Method')).toBeTruthy()
      expect(screen.getByText('Direct Deposit')).toBeTruthy()
      expect(screen.getByText('Bank')).toBeTruthy()
      expect(screen.getByText('BANK OF AMERICA, N.A.')).toBeTruthy()
      expect(screen.getByText('Account')).toBeTruthy()
      expect(screen.getByText('********0567')).toBeTruthy()
    })

    it('should show payment details information when paper check', () => {
      initializeTestInstance('2')
      expect(screen.getByText(formattedDate)).toBeTruthy()
      expect(screen.getByRole('header', { name: 'Compensation & Pension - Recurring' })).toBeTruthy()
      expect(screen.getByText('Amount')).toBeTruthy()
      expect(screen.getByText('$3,746.20')).toBeTruthy()
      expect(screen.getByText('Method')).toBeTruthy()
      expect(screen.getByText('Paper Check')).toBeTruthy()
      expect(screen.queryByText('Bank')).toBeNull()
      expect(screen.queryByText('Account')).toBeNull()
    })
  })
})
