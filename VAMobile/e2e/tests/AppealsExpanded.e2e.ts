import { expect, device, by, element, waitFor} from 'detox'
import {CommonE2eIdConstants, loginToDemoMode, openBenefits, openClaims, openClaimsHistory, resetInAppReview } from './utils'

let i = 0

export const AppealsExpandedIdConstants = {
  REMAND_RETURN_APPEAL_ID: 'Remand return appeal updated on December 26, 2011 Submitted July 17, 2008',
  HLR_REVIEW_CLOSED_APPEAL_ID: 'Higher level review closed appeal updated on December 25, 2011 Submitted July 16, 2008',
  SC_CLOSED_APPEAL_ID: 'Supplemental claim closed appeal updated on December 24, 2011 Submitted July 15, 2008',
  SC_DECISION_APPEAL_ID: 'Supplemental claim decision appeal updated on December 23, 2011 Submitted July 14, 2008',
  HLR_ERROR_APPEAL_ID: 'Higher level review error appeal updated on December 22, 2011 Submitted July 13, 2008',
  HLR_DECISION_APPEAL_ID: 'Higher level review decision appeal updated on December 21, 2011 Submitted July 12, 2008',
  HLR_RECIEVED_APPEAL_ID: 'Higher level review recieved appeal updated on December 20, 2011 Submitted July 11, 2008',
  SC_RECIEVED_APPEAL_ID: 'Supplemental claim received appeal updated on December 19, 2011 Submitted July 10, 2008',
  BVA_DECISION_EFFECTUATION_APPEAL_ID: 'Bva decision effectuation appeal updated on December 18, 2011 Submitted July 09, 2008',
  POST_BVA_DECISION_APPEAL_ID: 'Post bva dta decision appeal updated on December 17, 2011 Submitted July 08, 2008',
  EVIDENTIARY_PERIOD_APPEAL_ID: 'Evidentiary period appeal updated on December 16, 2011 Submitted July 07, 2008',
  STATUTORY_OPT_IN_APPEAL_ID: 'Statutory opt in appeal updated on December 15, 2011 Submitted July 06, 2008',
  AMA_REMAND_APPEAL_ID: 'Ama remand appeal updated on December 14, 2011 Submitted July 05, 2008',
  MERGED_APPEAL_ID: 'Merged appeal updated on December 13, 2011 Submitted July 04, 2008',
  REMAND_APPEAL_ID: 'Remand appeal updated on December 12, 2011 Submitted July 03, 2008',
  REMAND_SSOC_APPEAL_ID: 'Remand ssoc appeal updated on December 11, 2011 Submitted July 02, 2008',
  OTHER_CLOSED_APPEAL_ID: 'Other close appeal updated on December 10, 2011 Submitted July 01, 2008',
  RECONSIDERATION_APPEAL_ID: 'Reconsideration appeal updated on December 09, 2011 Submitted June 30, 2008',
  DEATH_APPEAL_ID: 'Death appeal updated on December 08, 2011 Submitted June 29, 2008',
  RAMP_APPEAL_ID: 'Ramp appeal updated on December 07, 2011 Submitted June 28, 2008',
  FTR_APPEAL_ID: 'Ftr appeal updated on December 06, 2011 Submitted June 27, 2008',
  WITHDRAWN_APPEAL_ID: 'Withdrawn appeal updated on December 05, 2011 Submitted June 26, 2008',
  FIELD_GRANT_APPEAL_ID: 'Field grant appeal updated on December 04, 2011 Submitted June 25, 2008',
  BVA_DECISION_APPEAL_ID: 'Bva decision appeal updated on December 03, 2011 Submitted June 24, 2008',
  MULTIPLE_DECISION_APPEAL_ID: 'Multiple decision in progress appeals updated on December 02, 2011 Submitted June 23, 2008',
  BVA_DEVELOPMENT_APPEAL_ID: 'Bva development appeal updated on December 01, 2011 Submitted June 22, 2008',
  BURIAL_STAYED_APPEAL_ID: 'Burial stayed appeal updated on November 30, 2011 Submitted June 20, 2008',
  AT_VSO_APPEAL_ID: 'At vso appeal updated on November 30, 2011 Submitted June 21, 2008',
  MEDICAL_PENDING_SOC_APPEAL_ID: 'Medical pending soc appeal updated on November 29, 2011 Submitted June 19, 2008',
  VRE_PENDING_APPEAL_ID: 'Vre pending form 9 appeal updated on November 28, 2011 Submitted June 18, 2008',
  EDUCATION_PENDING_APPEAL_ID: 'Education pending certification appeal updated on November 27, 2011 Submitted June 17, 2008',
  LOAN_GUARANTY_SSOC_APPEAL_ID: 'Loan guaranty pending certification ssoc appeal updated on November 26, 2011 Submitted June 16, 2008',
  INSURANCE_DOCKET_APPEAL_ID: 'Insurance on docket appeal updated on November 25, 2011 Submitted June 15, 2008',
  PENDING_HEARING_APPEAL_ID: 'Pending hearing appeal updated on November 24, 2011 Submitted June 14, 2008',
  DISABILITY_COMPENSATION_APPEAL_1_ID: 'Disability compensation appeal updated on November 23, 2011 Submitted June 13, 2008',
}

let expectedInformation = [
  ['compensation', 'Your appeal was returned to the Board of Veterans\' Appeals', 'true'],
  ['compensation', 'Your Higher-Level Review was closed', 'true'],
  ['compensation', 'Your Supplemental Claim was closed', 'true'],
  ['compensation', 'The National Cemetery Administration made a decision', 'The National Cemetery Administration sent you a decision on your Supplemental Claim. Here’s an overview:'],
  ['compensation', 'The Veterans Benefits Administration is correcting an error', 'true', 'VA identified an error that must be corrected'],
  ['compensation', 'The Veterans Benefits Administration made a decision', 'true', 'VA made a new decision'],
  ['compensation', 'A higher-level reviewer is taking a new look at your case', 'true', 'VA received your Higher-Level Review request', 'You requested an informal conference. The reviewer will contact you at the phone number you provided to schedule a time to speak to you and/or your representative. When you speak to the reviewer, you can say why you think the decision should be changed and identify errors.'],
  ['compensation', 'A reviewer is examining your new evidence', 'true', 'VA received your Supplemental Claim request'],
  ['bva', 'The Veterans Health Administration corrected an error'],
  ['bva', 'The Veterans Benefits Administration corrected an error'],
  ['compensation', 'Your appeals file is open for new evidence'],
  ['compensation', 'You requested a decision review under the Appeals Modernization Act', 'true'],
  ['compensation', 'The Board made a decision on your appeal'],
  ['compensation', 'Your appeal was merged', 'true', 'Your appeals were merged'],
  ['compensation', 'The Board made a decision on your appeal'],
  ['compensation', 'Please review your Supplemental Statement of the Case'],
  ['other', 'Your appeal was closed', 'true'],
  ['compensation', 'Your Motion for Reconsideration was denied', 'true'],
  ['compensation', 'The appeal was closed', 'true'],
  ['compensation', 'You opted in to the Rapid Appeals Modernization Program (RAMP)', 'true', 'VA sent you a letter about the Rapid Appeals Modernization Program'],
  ['compensation', 'Your appeal was closed', 'true'],
  ['compensation', 'You withdrew your appeal', 'true'],
  ['compensation', 'The Veterans Benefits Administration granted your appeal', 'true', 'VA granted one or more issues'],
  ['bva', 'The Board made a decision on your appeal', 'true', 'Board of Veterans\' Appeals made a decision'],
  ['multiple', 'A judge is reviewing your appeal'],
  ['bva', 'The judge is seeking more information before making a decision'],
  ['burial', 'The Board is waiting until a higher court makes a decision'],
  ['compensation', 'Your appeal is with your Veterans Service Organization'],
  ['medical', 'A Decision Review Officer is reviewing your appeal'],
  ['vre', 'Please review your Statement of the Case', 'Opt in to the new decision review process'],
  ['education', 'The Decision Review Officer is finishing their review of your appeal'],
  ['loan_guaranty', 'Please review your Supplemental Statement of the Case', 'true', 'VA received your Supplemental Claim request'],
  ['insurance', 'Your appeal is waiting to be sent to a judge'],
  ['pension', 'You\'re waiting for your hearing to be scheduled'],
  ['compensation', 'Your hearing has been scheduled']
]

beforeAll(async () => {
  await loginToDemoMode()
  await openBenefits()
  await openClaims()
  await openClaimsHistory()
})

describe('Appeals', () => {
  for(const [key, value] of Object.entries(AppealsExpandedIdConstants)) {
    it('verify ' + key + ' opens and the correct information is displayed', async() => {
      //Note: Most of the wording in the appeals current status is tested using unit tests so it isn't being tested here.
      await waitFor(element(by.id(value))).toBeVisible().whileElement(by.id('claimsHistoryID')).scroll(300, 'down')
      await element(by.id(value)).tap()
      var appealInfo = expectedInformation[i]
      await expect(element(by.text('Appeal for ' + appealInfo[0]))).toExist()
      await expect(element(by.text(appealInfo[1]))).toExist()
      if(appealInfo[2] !== undefined && appealInfo[2] == 'true') {
        await element(by.text('Review past events')).tap()
        if(appealInfo[3] === undefined) {
          await expect(element(by.text(appealInfo[1])).atIndex(0)).toExist()
        } else {
          await expect(element(by.text(appealInfo[3]))).toExist()
        }
      } else if (appealInfo[2] !== undefined && appealInfo[2] != 'true') {
        await expect(element(by.text(appealInfo[2]))).toExist()
        if (appealInfo[2] === 'Opt in to the new decision review process') {
          await waitFor(element(by.text(appealInfo[2]))).toBeVisible().whileElement(by.id('appealsDetailsTestID')).scroll(300, 'down')
          await element(by.text(appealInfo[2])).tap()
          await element(by.text(CommonE2eIdConstants.OK_PLATFORM_SPECIFIC_TEXT)).tap()
          await device.takeScreenshot('Form 9 Opt In Website')
          await device.launchApp({newInstance: false})
        }
      }

      if(appealInfo[4] !== undefined) {
        await expect(element(by.text(appealInfo[4]))).toExist()
      }
    })

    it('should close ' + key, async() => {
      i++
      await element(by.text('Claims')).tap()
      if (i % 6 == 0) {
        await resetInAppReview()
        await openBenefits()
        await openClaims()
        await openClaimsHistory()
      }
    })
  }
})
