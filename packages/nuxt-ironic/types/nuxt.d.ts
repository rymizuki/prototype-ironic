import { Ironic } from './ironic'

declare module '@nuxt/types' {
  interface Context {
    $ironic: Ironic
  }
}
