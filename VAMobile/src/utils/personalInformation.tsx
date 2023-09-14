import {
  AddressData,
  AddressValidationData,
  AddressValidationScenarioTypes,
  AddressValidationScenarioTypesConstants,
  DeliveryPointValidationTypesConstants,
  PhoneData,
  PhoneType,
  PhoneTypeConstants,
  SuggestedAddress,
  addressTypeFields,
} from 'api/types'
import { UserDataProfile } from 'store/api/types'
import { filter, sortBy } from 'underscore'

export const getAddressValidationScenarioFromAddressValidationData = (suggestedAddresses: Array<SuggestedAddress>): AddressValidationScenarioTypes | undefined => {
  if (!suggestedAddresses) {
    return
  }
  return AddressValidationScenarioTypesConstants.SHOW_SUGGESTIONS_OVERRIDE
}

export const getValidationKey = (suggestedAddresses?: Array<SuggestedAddress>): number | undefined => {
  if (!suggestedAddresses || suggestedAddresses.length === 0) {
    return
  }
  return suggestedAddresses[0]?.meta?.validationKey
}

export const getSuggestedAddresses = (addressValidationData?: AddressValidationData): Array<SuggestedAddress> | undefined => {
  if (!addressValidationData) {
    return
  }

  return sortBy(addressValidationData.data, (address) => {
    return address?.meta?.address?.confidenceScore
  }).reverse()
}

/**
 Determines if we need to prompt the user to pick from a list of suggested
 addresses and/or edit the address that they had entered. The only time the
 address validation modal will _not_ be shown to the user is if:
 - the validation API came back with a single address suggestion
 - AND that single suggestion is either CONFIRMED or an international address
 - AND that one suggestion has a confidence score above 100
 - AND the state of the entered address matches the state of the suggestion

 This sounds like a high bar to pass, but in fact most of the time this
 function will return `false` unless the user made an error entering their
 address or their address is not know to the validation API
 */
export const showValidationScreen = (addressData: AddressData, suggestedAddresses?: Array<SuggestedAddress>): boolean => {
  console.log('PARAMS', suggestedAddresses)
  if (!suggestedAddresses) {
    return false
  }
  const [firstSuggestedAddress] = suggestedAddresses
  const metadata = firstSuggestedAddress.meta.address
  // suggestedStateCode and addressDataStateCode can be null and undefined respectively so we check them for a falsy value as well as check for equality
  const suggestedStateCode = firstSuggestedAddress?.attributes?.stateCode
  const addressDataStateCode = addressData?.stateCode

  if (
    suggestedAddresses.length === 1 &&
    (suggestedStateCode === addressDataStateCode || (!suggestedStateCode && !addressDataStateCode)) &&
    metadata?.confidenceScore === 100 &&
    (metadata?.deliveryPointValidation === DeliveryPointValidationTypesConstants.CONFIRMED ||
      metadata?.addressType?.toLowerCase() === addressTypeFields.international.toLowerCase())
  ) {
    return false
  }

  return true
}

export const getConfirmedSuggestions = (suggestedAddresses?: Array<SuggestedAddress>): Array<SuggestedAddress> | undefined => {
  if (!suggestedAddresses) {
    return
  }

  return filter(suggestedAddresses, (address) => {
    return (
      address.meta.address.deliveryPointValidation === DeliveryPointValidationTypesConstants.CONFIRMED ||
      address.attributes.addressType.toLowerCase() === addressTypeFields.international.toLowerCase() ||
      address.meta.address.deliveryPointValidation === DeliveryPointValidationTypesConstants.BAD_UNIT_NUMBER ||
      address.meta.address.deliveryPointValidation === DeliveryPointValidationTypesConstants.MISSING_UNIT_NUMBER ||
      address.meta.address.deliveryPointValidation === DeliveryPointValidationTypesConstants.MISSING_ZIP
    )
  })
}

// formats a suggested address into an AddressData object
export const getAddressDataFromSuggestedAddress = (suggestedAddress: SuggestedAddress, addressId?: number): AddressData => {
  return {
    ...suggestedAddress.attributes,
    id: addressId,
    addressMetaData: suggestedAddress?.meta?.address,
  }
}

export const getPhoneDataForPhoneType = (phoneType: PhoneType, profile: UserDataProfile): PhoneData | undefined => {
  switch (phoneType) {
    case PhoneTypeConstants.HOME:
      return profile.homePhoneNumber as PhoneData
    case PhoneTypeConstants.MOBILE:
      return profile.mobilePhoneNumber as PhoneData
    case PhoneTypeConstants.WORK:
      return profile.workPhoneNumber as PhoneData
  }
}
