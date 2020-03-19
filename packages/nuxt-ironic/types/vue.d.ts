declare module 'vue/types/vue' {
  interface Vue {
    $action<T>(payload: T): void
  }
}
