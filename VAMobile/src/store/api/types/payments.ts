export type PaymentsAttributeData = {
  date: string
  amount: string
  payementType: string
  paymentMethod: string
  bank: string | null
  account: string
}

export type PaymentsList = Array<PaymentsData>

export type PaymentsGetData = {
  data: PaymentsList
  meta: PaymentsGetDataMeta
}

export type PaymentsData = {
  type: string
  id: string
  attributes: PaymentsAttributeData
}

export type PaymentsByDate = {
  [key: string]: PaymentsList
}

export type PaymentsGroupedByMonth = {
  [key: string]: PaymentsList
}

export type PaymentsMap = {
  [key: string]: PaymentsData
}

export type LoadedPayments = {
  [key: string]: Array<PaymentsData>
}

export type PaymentsMetaPagination = {
  currentPage: number
  perPage: number
  totalEntries: number
}

export type PaymentsGetDataMeta = {
  pagination?: PaymentsMetaPagination
  // This property does not exist in api, used to track if the data(getPayments) return was from an api call
  dataFromStore: boolean
}

// Tracking payments pagination by year and page
export type PaymentsPaginationByYearAndPage = {
  [key: string]: PaymentsMetaPagination
}
