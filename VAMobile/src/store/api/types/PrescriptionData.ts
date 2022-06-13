export const RefillStatusConstants: {
  ACTIVE: RefillStatus
  DELETED: RefillStatus
  DISCONTINUED: RefillStatus
  DISCONTINUED_BY_PROVIDER: RefillStatus
  DISCONTINUED_EDIT: RefillStatus
  EXPIRED: RefillStatus
  HOLD: RefillStatus
  NON_VERIFIED: RefillStatus
  PROVIDER_HOLD: RefillStatus
  REFILL_IN_PROCESS: RefillStatus
  SUSPENDED: RefillStatus
  UNKNOWN: RefillStatus
  ACTIVE_PARKED: RefillStatus
  TRANSFERRED: RefillStatus
} = {
  ACTIVE: 'active',
  DELETED: 'deleted',
  DISCONTINUED: 'discontinued',
  DISCONTINUED_BY_PROVIDER: 'discontinuedByProvider',
  DISCONTINUED_EDIT: 'discontinuedEdit',
  EXPIRED: 'expired',
  HOLD: 'hold',
  NON_VERIFIED: 'nonVerified',
  PROVIDER_HOLD: 'providerHold',
  REFILL_IN_PROCESS: 'refillinprocess',
  SUSPENDED: 'suspended',
  UNKNOWN: 'unknown',
  ACTIVE_PARKED: 'activeParked',
  TRANSFERRED: 'transferred',
}

export type RefillStatus =
  | 'active'
  | 'deleted'
  | 'discontinued'
  | 'discontinuedByProvider'
  | 'discontinuedEdit'
  | 'expired'
  | 'hold'
  | 'nonVerified'
  | 'providerHold'
  | 'refillinprocess'
  | 'suspended'
  | 'unknown'
  | 'activeParked'
  | 'transferred'

export type PrescriptionAttributeData = {
  refillStatus: RefillStatus
  refillSubmitDate: string | null
  refillDate: string | null
  refillRemaining: number
  facilityName: string
  isRefillable: boolean
  isTrackable: boolean
  orderedDate: string | null
  quantity: number
  expirationDate: string | null
  prescriptionNumber: string
  prescriptionName: string
  instructions: string | null
  dispensedDate: string | null
  stationNumber: string
}

export type PrescriptionsList = Array<PrescriptionData>

export type PrescriptionData = {
  type: string
  id: string
  attributes: PrescriptionAttributeData
}

export type PrescriptionsGetData = {
  data: PrescriptionsList
  links: PrescriptionsPaginationLinks
  meta: PrescriptionsGetMeta
}

export type PrescriptionsGetMeta = {
  pagination: PrescriptionsPaginationData
}

export type PrescriptionsPaginationData = {
  currentPage: number
  perPage: number
  totalPages: number
  totalEntries: number
}

export type PrescriptionsPaginationLinks = {
  self: string
  first: string
  prev: string | null
  next: string | null
  last: string
}

export type PrescriptionsMap = {
  [key: string]: PrescriptionData
}
