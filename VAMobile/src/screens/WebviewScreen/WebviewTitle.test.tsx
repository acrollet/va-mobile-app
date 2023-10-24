import 'react-native'
import React from 'react'

import { screen } from '@testing-library/react-native'
import { context, render } from 'testUtils'
import WebviewTitle from './WebviewTitle'

context('WebviewTitle', () => {
  it('initializes correctly', async () => {
    render(<WebviewTitle title={'my title'} />)
    expect(screen.getByText('my title')).toBeTruthy()
  })
})
