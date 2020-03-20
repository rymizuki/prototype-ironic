declare module 'vue/types/vue' {
  import { ActionPayload, IronicModelConstructor, AbstractModel } from '@prototype-ironic/ironic'

  interface Vue {
    prototype: any
    $getState<M extends AbstractModel, S>(Model: IronicModelConstructor<M>): S
    $action(payload: ActionPayload): void
  }
}
