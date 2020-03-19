import Vue from 'vue'
import VueIronic from '@prototype-ironic/vue-ironic'
import { Ironic } from '@prototype-ironic/ironic'

export default (context: any) => {
  const ironic = new Ironic()

  // VueComponentでironicを有効にする
  Vue.use(VueIronic, {
    ironic
  })

  // asyncDataなどnuxtのコンテキストでironicにアクセスできるようにする
  context.$ironic = ironic
}
