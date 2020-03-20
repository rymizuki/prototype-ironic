import { Context } from '@nuxt/types'
import { Test, Ironic, VuexStore, AbstractStore  } from '@prototype-ironic/ironic'
import { Store } from 'vuex'
import { RootState } from '~/types/state'
import { NameModel } from '~/models/name'

declare module '@prototype-ironic/ironic' {
  interface IronicCore {
    $store: AbstractStore
  }
}

class Main extends Test {
}

console.log(new Main('test').getName())

export default ({ app, $ironic }: { app: Context, $ironic: Ironic }) => {
  $ironic.core.setStore(new VuexStore<RootState>(app.store))
  $ironic.models.add(NameModel)
  console.log('init')
}