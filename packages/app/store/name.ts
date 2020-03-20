import {  NameState } from '~/types/state'

export const state = () => ({
  name: null
})

export const mutations = {
  submit (state: NameState, name: string) {
    console.log('resolve', name)
    state.name = name
  }
}