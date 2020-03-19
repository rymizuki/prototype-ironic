module.exports = {
  mode: 'universal',
  head: {
    title: 'prototype-ironic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: ["@prototype-ironic/nuxt-ironic"],
  plugins: [],
  build: {},
  buildModules: ['@nuxt/typescript-build'],
  server: {
    host: '0.0.0.0'
  }
}
