import { by, device, element, expect, waitFor } from 'detox'
import { setTimeout } from 'timers/promises'

import { loginToDemoMode, openPersonalInformation, openProfile } from './utils'

export const PersonalInformationE2eIdConstants = {
  PERSONAL_INFORMATION_TEXT: 'Personal information',
  HOW_TO_UPDATE_LINK_TEXT: 'How to update or fix an error in your legal name',
  NEAREST_CENTER_LINK_TEXT: 'Find nearest V-A medical center',
  PHONE_LINK_TEXT: '800-827-1000',
  TTY_LINK_TEXT: 'TTY: 711',
}

beforeAll(async () => {
  await loginToDemoMode()
  await openProfile()
  await openPersonalInformation()
  await waitFor(element(by.text('Personal information')))
    .toExist()
    .withTimeout(10000)
})

describe('Personal Information Screen', () => {
  it('should match design', async () => {
    await expect(element(by.text('Date of birth'))).toExist()
    await expect(element(by.text('January 01, 1950'))).toExist()

    await expect(element(by.text('Preferred name'))).toExist()
    await expect(element(by.text('Sharing your preferred name is optional.'))).toExist()

    await expect(element(by.text('Gender identity'))).toExist()
    await expect(element(by.text('Woman'))).toExist()
  })

  it('should tap links in "How to update" large panel', async () => {
    await element(by.text(PersonalInformationE2eIdConstants.HOW_TO_UPDATE_LINK_TEXT)).tap()
    await expect(element(by.text('Profile help'))).toExist()

    await element(by.text('Learn how to change your legal name on file with the VA')).tap()
    await setTimeout(5000)
    await device.takeScreenshot('PersonalInformationChangeNameLink')
    await element(by.text('Done')).tap()

    await waitFor(element(by.label(PersonalInformationE2eIdConstants.NEAREST_CENTER_LINK_TEXT)))
      .toBeVisible()
      .whileElement(by.id('PersonalInformationTestID'))
      .scroll(500, 'down')

    await element(by.label(PersonalInformationE2eIdConstants.NEAREST_CENTER_LINK_TEXT)).tap()
    await setTimeout(5000)
    await device.takeScreenshot('PersonalInformationFindVACenterLink')
    await element(by.text('Done')).tap()

    if (device.getPlatform() === 'android') {
      await waitFor(element(by.text(PersonalInformationE2eIdConstants.PHONE_LINK_TEXT)))
        .toBeVisible()
        .whileElement(by.id('PersonalInformationTestID'))
        .scroll(500, 'down')

      await element(by.text(PersonalInformationE2eIdConstants.PHONE_LINK_TEXT)).tap()
      await setTimeout(5000)
      await device.takeScreenshot('PersonalInformationPhoneNumber')
      await device.launchApp({ newInstance: false })

      await waitFor(element(by.text(PersonalInformationE2eIdConstants.TTY_LINK_TEXT)))
        .toBeVisible()
        .whileElement(by.id('PersonalInformationTestID'))
        .scroll(500, 'down')

      await element(by.text(PersonalInformationE2eIdConstants.TTY_LINK_TEXT)).tap()
      await setTimeout(5000)
      await device.takeScreenshot('PersonalInformationTTY')
    }
  })
})
