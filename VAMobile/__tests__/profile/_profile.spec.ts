import { doLogin, logout } from '../utils'
import ProfilePageFlow from './ProfilePageFlow'

describe('profile', () => {
    before(async () => {
        if (driver.isAndroid) {
            console.log("Resetting app")
            await driver.reset()
        }
        await doLogin("vets.gov.user+1415@gmail.com", "Zm9ydHkgdHdv")
    })

    after(async () => {
        if (driver.isIOS) {
            await browser.execute('mobile:clearKeychains')
        }

        await logout()
    })

    ProfilePageFlow()
})
