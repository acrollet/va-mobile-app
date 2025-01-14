import React from 'react'
import { fireEvent, screen } from '@testing-library/react-native'

import { context, render } from 'testUtils'
import VeteransCrisisLineScreen from './VeteransCrisisLineScreen'

const mockExternalLinkSpy = jest.fn()

jest.mock('utils/hooks', () => {
  const original = jest.requireActual('utils/hooks')
  return {
    ...original,
    useExternalLink: () => mockExternalLinkSpy,
  }
})

context('VeteransCrisisLineScreen', () => {
  beforeEach(() => {
    render(<VeteransCrisisLineScreen />)
  })

  it('initializes correctly', () => {
    expect(screen.getByRole('header', { name: "We’re here anytime, day or night – 24/7" })).toBeTruthy()
    expect(screen.getByText("If you're a Veteran in crisis or concerned about one, connect with our caring, qualified responders for confidential help. Many of them are Veterans themselves.")).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Call 988 and select 1' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Text 838255' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Start a confidential chat' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'TTY: 800-799-4889' })).toBeTruthy()
    expect(screen.getByRole('header', { name: 'Get more resources' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'VeteransCrisisLine.net' })).toBeTruthy()
  })
  
  describe('when the veteransCrisisLine.net link is clicked', () => {
    it('should launch external link with the parameter https://www.veteranscrisisline.net/', () => {
      fireEvent.press(screen.getByRole('link', { name: 'VeteransCrisisLine.net' }))
      expect(mockExternalLinkSpy).toBeCalledWith('https://www.veteranscrisisline.net/')
    })
  })
})
