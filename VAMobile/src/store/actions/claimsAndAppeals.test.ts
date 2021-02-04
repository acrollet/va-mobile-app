import _ from 'underscore'
import * as api from '../api'
import { context, realStore, when } from 'testUtils'
import {
  fileUploadSuccess,
  getActiveOrClosedClaimsAndAppeals,
  getAllClaimsAndAppeals,
  getAppeal,
  getClaim,
  submitClaimDecision,
  uploadFileToClaim
} from './claimsAndAppeals'
import { appeal as AppealPayload } from 'screens/ClaimsScreen/appealData'
import { claim as Claim } from 'screens/ClaimsScreen/claimData'
import {ClaimEventData} from '../api/types'

context('claimsAndAppeals', () => {
  describe('getAllClaimsAndAppeals', () => {
    it('should dispatch the correct actions', async () => {
      const claimsAndAppealsList: api.ClaimsAndAppealsList = [
        {
          id: '1',
          type: 'appeal',
          attributes: {
            subtype: 'Compensation',
            completed: false,
            dateFiled: '2020-10-22T20:15:14.000+00:00',
            updatedAt: '2020-10-28T20:15:14.000+00:00',
          },
        },
        {
          id: '0',
          type: 'claim',
          attributes: {
            subtype: 'Disability',
            completed: false,
            dateFiled: '2020-11-13T20:15:14.000+00:00',
            updatedAt: '2020-11-30T20:15:14.000+00:00',
          },
        },
        {
          id: '4',
          type: 'claim',
          attributes: {
            subtype: 'Compensation',
            completed: false,
            dateFiled: '2020-06-11T20:15:14.000+00:00',
            updatedAt: '2020-12-07T20:15:14.000+00:00',
          },
        },
        {
          id: '2',
          type: 'appeal',
          attributes: {
            subtype: 'Disability',
            completed: true,
            dateFiled: '2020-07-24T20:15:14.000+00:00',
            updatedAt: '2020-09-15T20:15:14.000+00:00',
          },
        },
        {
          id: '3',
          type: 'claim',
          attributes: {
            subtype: 'Compensation',
            completed: true,
            dateFiled: '2020-11-18T20:15:14.000+00:00',
            updatedAt: '2020-12-05T20:15:14.000+00:00',
          },
        },
      ]

      when(api.get as jest.Mock)
          .calledWith(`/v0/claims-and-appeals-overview`)
          .mockResolvedValue({ data: claimsAndAppealsList})
      const store = realStore()
      await store.dispatch(getAllClaimsAndAppeals())

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_GET_ALL' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_GET_ALL' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingAllClaimsAndAppeals).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toBeFalsy()
      expect(claimsAndAppeals.claimsAndAppealsList).toEqual(claimsAndAppealsList)
    })

    it('should return error if it fails', async () => {
      const error = new Error('backend error')

      when(api.get as jest.Mock)
          .calledWith(`/v0/claims-and-appeals-overview`)
          .mockRejectedValue(error)
      const store = realStore()
      await store.dispatch(getAllClaimsAndAppeals())

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_GET_ALL' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_GET_ALL' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingAllClaimsAndAppeals).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toEqual(error)
    })
  })

  describe('getActiveOrClosedClaimsAndAppeals', () => {
    it('should dispatch the correct actions', async () => {
      // TODO: add more tests when using the api instead of mocked data
      const store = realStore()
      await store.dispatch(getActiveOrClosedClaimsAndAppeals('ACTIVE'))

      const actions = store.getActions()

      const action = _.find(actions, { type: 'CLAIMS_AND_APPEALS_GET_ACTIVE_OR_CLOSED' })
      expect(action).toBeTruthy()

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toBeFalsy()
    })
  })

  describe('getClaim', () => {
    it('should dispatch the correct actions', async () => {
      const claimsDetail: api.ClaimData = Claim

      when(api.get as jest.Mock)
          .calledWith('/v0/claim/245182')
          .mockResolvedValue({ data: claimsDetail })

      const store = realStore()
      await store.dispatch(getClaim('245182'))

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_GET_ClAIM' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_GET_ClAIM' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingClaim).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toBeFalsy()
      expect(claimsAndAppeals.claim).toEqual(claimsDetail) //claimsDetail
    })

    it('should return error if it fails', async () => {
      const error = new Error('backend error')

      when(api.get as jest.Mock)
          .calledWith('/v0/claim/245182')
          .mockRejectedValue(error)

      const store = realStore()
      await store.dispatch(getClaim('245182'))

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_GET_ClAIM' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_GET_ClAIM' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingClaim).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toEqual(error) //error

    })
  })

  describe('getAppeal', () => {
    it('should dispatch the correct actions', async () => {
      const id = '2765759'
      when(api.get as jest.Mock)
          .calledWith(`/v0/appeal/2765759`)
          .mockResolvedValue({ data: AppealPayload})

      const store = realStore()
      await store.dispatch(getAppeal(id))

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_GET_APPEAL' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_GET_APPEAL' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingAppeal).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toBeFalsy()
      expect(claimsAndAppeals.appeal).toEqual(AppealPayload)
    })

    it('should return error if it fails', async () => {
      const error = new Error('Backend error')
      const id = '2765759'
      when(api.get as jest.Mock)
          .calledWith(`/v0/appeal/2765759`)
          .mockRejectedValue(error)

      const store = realStore()
      await store.dispatch(getAppeal(id))

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_GET_APPEAL' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_GET_APPEAL' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingAppeal).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toEqual(error)
    })
  })

  describe('submitClaimDecision', () => {
    it('should dispatch the correct actions', async () => {
      // TODO: add more tests when using the api instead of mocked data
      const store = realStore()
      await store.dispatch(submitClaimDecision('id'))

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_SUBMIT_CLAIM_DECISION' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_SUBMIT_CLAIM_DECISION' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingSubmitClaimDecision).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toBeFalsy()
    })
  })

  describe('uploadFileToClaim', () => {
    it('should dispatch the correct actions', async () => {
      // TODO: add more tests when using the api instead of mocked data
      const store = realStore()
      await store.dispatch(uploadFileToClaim('id', {} as ClaimEventData, []))

      const actions = store.getActions()

      const startAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_START_FILE_UPLOAD' })
      expect(startAction).toBeTruthy()

      const endAction = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FINISH_FILE_UPLOAD' })
      expect(endAction).toBeTruthy()
      expect(endAction?.state.claimsAndAppeals.loadingFileUpload).toBe(false)

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.error).toBeFalsy()
    })
  })

  describe('fileUploadSuccess', () => {
    it('should dispatch the correct actions', async () => {
      const store = realStore()
      await store.dispatch(fileUploadSuccess())

      const actions = store.getActions()

      const action = _.find(actions, { type: 'CLAIMS_AND_APPEALS_FILE_UPLOAD_SUCCESS' })
      expect(action).toBeTruthy()

      const { claimsAndAppeals } = store.getState()
      expect(claimsAndAppeals.filesUploadedSuccess).toBeFalsy()
    })
  })
})
