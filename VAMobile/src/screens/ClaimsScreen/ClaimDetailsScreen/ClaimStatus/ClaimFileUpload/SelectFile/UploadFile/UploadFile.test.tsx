import 'react-native'
import React from 'react'
// Note: test renderer must be required after react-native.
import { context, mockNavProps, mockStore, render } from 'testUtils'
import { act, ReactTestInstance } from 'react-test-renderer'

import UploadFile from './UploadFile'
import { claim as Claim } from 'screens/ClaimsScreen/claimData'
import { InitialState } from 'store/slices'
import {TextView, VAButton, VAModalPicker, VASelector} from 'components'
import { DocumentPickerResponse } from '../../../../../ClaimsStackScreens'
import { ImagePickerResponse } from 'react-native-image-picker'
import { RenderAPI } from '@testing-library/react-native'

const mockNavigationSpy = jest.fn()
jest.mock('utils/hooks', () => {
  const original = jest.requireActual('../../../../../../../utils/hooks')
  const theme = jest.requireActual('../../../../../../../styles/themes/standardTheme').default
  return {
    ...original,
    useTheme: jest.fn(() => {
      return { ...theme }
    }),
    useRouteNavigation: () => {
      return mockNavigationSpy
    },
  }
})

context('UploadFile', () => {
  let component: RenderAPI
  let testInstance: ReactTestInstance
  let props: any
  let navigateToSpy: jest.Mock

  let request = {
    type: 'still_need_from_you_list',
    date: '2020-07-16',
    status: 'NEEDED',
    uploaded: false,
    uploadsAllowed: true,
  }

  const initializeTestInstance = (fileUploaded?: DocumentPickerResponse, imageUploaded?: ImagePickerResponse) => {
    navigateToSpy = jest.fn()
    mockNavigationSpy.mockReturnValue(navigateToSpy)
    props = mockNavProps(undefined, { setOptions: jest.fn(), navigate: jest.fn() }, { params: { request, fileUploaded, imageUploaded } })

    component = render(<UploadFile {...props} />, {
      preloadedState: {
        ...InitialState,
        claimsAndAppeals: {
          ...InitialState.claimsAndAppeals,
          claim: Claim,
        },
      },
    })

    testInstance = component.container
  }

  beforeEach(() => {
    initializeTestInstance()
  })

  it('initializes correctly', async () => {
    expect(component).toBeTruthy()
  })

  describe('on click of the upload button', () => {
    it('should not navigate if the check box has not been checked', async () => {
      act(() => {
        testInstance.findByType(VAModalPicker).props.onSelectionChange('L228')
        testInstance.findAllByType(VAButton)[0].props.onPress()
      })

      expect(navigateToSpy).not.toHaveBeenCalled()
    })

    it('should call navigate if requirements are met', async () => {
      act(() => {
        testInstance.findByType(VAModalPicker).props.onSelectionChange('L228')
        testInstance.findByType(VASelector).props.onSelectionChange(true)
        testInstance.findAllByType(VAButton)[0].props.onPress()
      })

      expect(navigateToSpy).toHaveBeenCalled()
    })
  })

  describe('when a file is uploaded', () => {
    it('should display the uploaded file name', async () => {
      initializeTestInstance({ name: 'uploadedFile', uri: '', copyError: '', fileCopyUri: '', size: 10, type: 'pdf' })
      expect(testInstance.findAllByType(TextView)[1].props.children).toEqual('uploadedFile')
    })
  })

  describe('when an image is uploaded', () => {
    it('should display the uploaded image name', async () => {
      initializeTestInstance(undefined, { assets: [{ fileName: 'uploadedImage' }] })
      expect(testInstance.findAllByType(TextView)[1].props.children).toEqual('uploadedImage')
    })
  })
})
