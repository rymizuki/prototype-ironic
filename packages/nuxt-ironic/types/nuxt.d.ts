declare module '@nuxt/types' {
  import { Ironic } from '@prototype-ironic/ironic'
  
  interface Context {
    $ironic: Ironic
  }
}
