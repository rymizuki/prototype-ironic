
import { AbstractModel } from '@prototype-ironic/ironic'
import { ACTION_PAYLOADS } from '~/types/actions'
import { RootState, NameState } from '~/types/state'

export class NameModel extends AbstractModel {
  async sync() {
  }
  getState() {
    const state = this.core.$store.getState()
    console.log(state)
    return state.name
  }
  reduce(payload: ACTION_PAYLOADS) {
    switch (payload.type) {
      case 'submit_name':
        console.log(this.core)
        this.core.$store.commit('name/submit', payload.data.name)
    }
  }
}

