import Vue from 'vue'
import VueIronic from '@prototype-ironic/vue-ironic'
import { createIronic } from '@prototype-ironic/ironic'

export default (context) => {
  // create ironic instance
  const ironic = createIronic()

  // bind Vue-Component
  Vue.use(VueIronic, { ironic })

  // inject nuxt context
  context.$ironic = ironic
}
