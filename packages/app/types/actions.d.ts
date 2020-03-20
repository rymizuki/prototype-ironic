import { ActionPayload } from '@prototype-ironic/ironic'

export interface ACTION_MOUNTED extends ActionPayload {
  type: 'mounted',
  data: {}
}

export interface ACTION_SUBMIT extends ActionPayload {
  type: 'submit_name',
  data: { name: string }
}

export type ACTION_PAYLOADS = ACTION_SUBMIT | ACTION_MOUNTED

