import 'react-native'
import { Linking } from 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import 'jest-styled-components'
import renderer, { ReactTestInstance, act } from 'react-test-renderer'

import { TestProviders, context, findByTestID } from 'testUtils'
import HomeScreen from './index'
import HomeNavButton from './HomeNavButton'

context('HomeScreen', () => {
  let component: any
  let testInstance: ReactTestInstance

  beforeEach(() => {
    component = renderer.create(
      <TestProviders>
        <HomeScreen />
      </TestProviders>,
    )

    testInstance = component.root
  })

  it('initializes correctly', async () => {
    await act(async () => {
      expect(component).toBeTruthy()
    })
  })

  describe('when the covid 19 screening tool button is clicked', () => {
    it('should call Linking openUrl with the parameter https://www.va.gov/covid19screen/', async () => {
      expect(findByTestID(testInstance, 'covid-19-screening-tool').props.onPress())
      expect(Linking.openURL).toHaveBeenCalledWith('https://www.va.gov/covid19screen/')
    })
  })

  describe('when rendering the home nav buttons', () => {
    it('should render the claims button', async () => {
      expect(testInstance.findAllByType(HomeNavButton)[1].props.title).toEqual('Claims and appeals')
    })
    it('should render the appointments button', async () => {
      expect(testInstance.findAllByType(HomeNavButton)[2].props.title).toEqual('Appointments')
    })
    it('should render the messages button', async () => {
      expect(testInstance.findAllByType(HomeNavButton)[3].props.title).toEqual('Messages')
    })
    it('should render the letters button', async () => {
      expect(testInstance.findAllByType(HomeNavButton)[4].props.title).toEqual('Letters')
    })
  })
})
