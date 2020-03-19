import Vue, { VueConstructor } from 'vue'

let plugin_Vue: VueConstructor<Vue>|null = null
function install(_Vue: VueConstructor<Vue>, options: any) {
  if (plugin_Vue && plugin_Vue === Vue) {
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

declare module 'vue/types/vue' {
  interface Vue {
    prototype: any
  }
}
