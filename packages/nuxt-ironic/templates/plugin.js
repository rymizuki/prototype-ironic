import Vue from 'vue'
import VueIronic from '@prototype-ironic/vue-ironic'
import { Ironic } from '@prototype-ironic/ironic'

export default (context) => {
  // create ironic instance
  const ironic = new Ironic()

  // bind Vue-Component
  Vue.use(VueIronic, { ironic })

  // inject nuxt context
  context.$ironic = ironic
}
