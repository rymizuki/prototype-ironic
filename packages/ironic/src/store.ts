import { Store } from 'vuex'

export abstract class AbstractStore<S> {
  abstract commit<D>(name: string, payload: D): void
  abstract getState(): S;
}

export class VuexStore<S> extends AbstractStore<S> {
  constructor(protected vuex_store: Store<S>) {
    super()
  }
  commit<D>(name: string, payload: D) {
    this.vuex_store.commit(name, payload)
  }
  getState(): S {
    return this.vuex_store.state
  }
}