import Vue from 'vue'
import VueIronic from './vue-ironic'
import { Ironic } from '@prototype-ironic/ironic'

export default (context: any, inject: any) => {
  const ironic = new Ironic()

  console.log('apply')

  // VueComponentでironicを有効にする
  Vue.use(VueIronic, {
    ironic
  })

  // asyncDataなどnuxtのコンテキストでironicにアクセスできるようにする
  context.$ironic = ironic
}
