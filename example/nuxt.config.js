const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  head: {
    title: 'nuxt-maps-module'
  },
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [{ handler: require('../') }],
  publicRuntimeConfig: {
    gmaps: {
      key: 'AIzaSyB52Qw4eFfBtB9L6B4AXf7OZxsW0CVf3M0'
    }
  }
}
