import { Event, UserAnalytic } from 'utils/analytics'

/**
 * Firebase strings have to be less than 24 chars or it doesn't go through. this lint rule enforces that.
 */
/*eslint id-length: ["error", { "max": 24 }]*/
export const Events = {
  vama_auth_completed: (): Event => {
    return {
      name: 'vama_auth_completed',
    }
  },
  vama_login_closed: (): Event => {
    return {
      name: 'vama_login_closed',
    }
  },
  vama_exchange_failed: (): Event => {
    return {
      name: 'vama_exchange_failed',
    }
  },
  vama_letter_download: (letterName: string): Event => {
    return {
      name: 'vama_letter_download',
      params: {
        letterName,
      },
    }
  },
  vama_login_start: (): Event => {
    return {
      name: 'vama_login_start',
    }
  },
  vama_login_success: (): Event => {
    return {
      name: 'vama_login_success',
    }
  },
  vama_login_fail: (error: Error): Event => {
    return {
      name: 'vama_login_fail',
      params: {
        error: JSON.stringify(error),
      },
    }
  },
  vama_sm_save_draft: (totalTime: number, actionTime: number): Event => {
    return {
      name: 'vama_sm_save_draft',
      params: {
        totalTime,
        actionTime,
      },
    }
  },
  vama_sm_send_message: (totalTime: number, actionTime: number): Event => {
    return {
      name: 'vama_sm_send_message',
      params: {
        totalTime,
        actionTime,
      },
    }
  },
  vama_ttv_cap_details: (totalTime: number): Event => {
    return {
      name: 'vama_ttv_cap_details',
      params: {
        totalTime,
      },
    }
  },
  vama_ttv_appt_details: (totalTime: number): Event => {
    return {
      name: 'vama_ttv_appt_details',
      params: {
        totalTime,
      },
    }
  },
  vama_prof_update_phone: (totalTime: number, actionTime: number): Event => {
    return {
      name: 'vama_prof_update_phone',
      params: {
        totalTime,
        actionTime,
      },
    }
  },
  vama_prof_update_email: (totalTime: number, actionTime: number): Event => {
    return {
      name: 'vama_prof_update_email',
      params: {
        totalTime,
        actionTime,
      },
    }
  },
  vama_prof_update_address: (totalTime: number, actionTime: number): Event => {
    return {
      name: 'vama_prof_update_address',
      params: {
        totalTime,
        actionTime,
      },
    }
  },
  vama_prof_update_dir_dep: (totalTime: number, actionTime: number): Event => {
    return {
      name: 'vama_prof_update_dir_dep',
      params: {
        totalTime,
        actionTime,
      },
    }
  },
  vama_claim_step_three: (): Event => {
    return {
      name: 'vama_claim_step_three',
    }
  },
  vama_claim_file_request: (): Event => {
    return {
      name: 'vama_claim_file_request',
    }
  },
  vama_claim_upload_start: (): Event => {
    return {
      name: 'vama_claim_upload_start',
    }
  },
  vama_claim_upload_compl: (): Event => {
    return {
      name: 'vama_claim_upload_compl',
    }
  },
  vama_claim_upload_fail: (): Event => {
    return {
      name: 'vama_claim_upload_fail',
    }
  },
  vama_vaccine_details: (groupName: string): Event => {
    return {
      name: 'vama_vaccine_details',
      params: {
        groupName,
      },
    }
  },
  vama_covid_links: (referringScreen: string): Event => {
    return {
      name: 'vama_covid_links',
      params: {
        referringScreen,
      },
    }
  },
  // Issue#2273 Track appointment pagination discrepancies
  vama_appts_page_warning: (): Event => {
    return {
      name: 'vama_appts_page_warning',
    }
  },
  vama_appt_view_details: (isPendingAppointment: boolean): Event => {
    return {
      name: 'vama_appt_view_details',
      params: {
        isPending: isPendingAppointment,
      },
    }
  },
  vama_appt_cancel: (isPendingAppointment: boolean): Event => {
    return {
      name: 'vama_appt_cancel',
      params: {
        isPending: isPendingAppointment,
      },
    }
  },
  vama_rx_refill_success: (): Event => {
    return {
      name: 'vama_rx_refill_success',
    }
  },
  vama_rx_refill_fail: (): Event => {
    return {
      name: 'vama_rx_refill_fail',
    }
  },
  vama_rx_refill_retry: (): Event => {
    return {
      name: 'vama_rx_refill_retry',
    }
  },
  vama_rx_filter: (): Event => {
    return {
      name: 'vama_rx_filter',
    }
  },
  vama_rx_filter_sel: (filter: string): Event => {
    return {
      name: 'vama_rx_filter_sel',
      params: {
        filter,
      },
    }
  },
  vama_rx_sort: (): Event => {
    return {
      name: 'vama_rx_sort',
    }
  },
  vama_rx_sort_sel: (sort: string): Event => {
    return {
      name: 'vama_rx_sort_sel',
      params: {
        sort,
      },
    }
  },
  vama_rx_pendingtab: (): Event => {
    return {
      name: 'vama_rx_pendingtab',
    }
  },
  vama_rx_trackingtab: (): Event => {
    return {
      name: 'vama_rx_trackingtab',
    }
  },
}

export const UserAnalytics = {
  vama_uses_biometric: (value: boolean): UserAnalytic => {
    return {
      name: 'vama_uses_biometric',
      value: value.toString(),
    }
  },
  vama_biometric_device: (value: boolean): UserAnalytic => {
    return {
      name: 'vama_biometric_device',
      value: value.toString(),
    }
  },
  vama_environment: (value: string): UserAnalytic => {
    return {
      name: 'vama_environment',
      value: value,
    }
  },
  vama_uses_letters: (): UserAnalytic => {
    return {
      name: 'vama_uses_letters',
      value: 'true',
    }
  },
  vama_uses_sm: (): UserAnalytic => {
    return {
      name: 'vama_uses_sm',
      value: 'true',
    }
  },
  vama_uses_cap: (): UserAnalytic => {
    return {
      name: 'vama_uses_cap',
      value: 'true',
    }
  },
  vama_uses_appointments: (): UserAnalytic => {
    return {
      name: 'vama_uses_appointments',
      value: 'true',
    }
  },
  vama_uses_profile: (): UserAnalytic => {
    return {
      name: 'vama_uses_profile',
      value: 'true',
    }
  },
  vama_uses_vcl: (): UserAnalytic => {
    return {
      name: 'vama_uses_vcl',
      value: 'true',
    }
  },
  vama_uses_large_text: (value: boolean): UserAnalytic => {
    return {
      name: 'vama_uses_large_text',
      value: value.toString(),
    }
  },
  vama_uses_screen_reader: (value: boolean): UserAnalytic => {
    return {
      name: 'vama_uses_screen_reader',
      value: value.toString(),
    }
  },
}
