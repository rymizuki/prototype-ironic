import { VueConstructor } from 'vue'

let plugin_Vue: VueConstructor|null = null
function install(_Vue: VueConstructor, options: any) {
  if (plugin_Vue && plugin_Vue === _Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[vue-ironic] already installed. Vue.use(VueIronic) should be called only once.')
    }
    return 
  }
  plugin_Vue = _Vue

  const ironic = options.ironic

  plugin_Vue.prototype.$action = (action: any) => {
    ironic.action(action)
  }
}

export default { install }
