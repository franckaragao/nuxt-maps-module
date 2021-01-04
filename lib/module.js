const { resolve } = require('path')
const defaults = require('./defaults')

module.exports = function (moduleOptions) {
  const options = {
    ...defaults,
    ...this.options['nuxt-maps-module'],
    ...moduleOptions
  }

  /**
   * Make sure the initMap function is created in the DOM
   * before we even think to initialize the Google Maps API
   */
  // eslint-disable-next-line
  this.options.head.__dangerouslyDisableSanitizers = ["script"];
  this.options.head.script.push({
    innerHTML: `window.initMap = function(){
      window.dispatchEvent(new Event('maps-module:loaded'));
      window.addEventListener('maps-module:initiated', function(){
        setTimeout(function(){
          window.dispatchEvent(new Event('maps-module:loaded'));
        });
      });
    }`,
    type: 'text/javascript'
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-maps-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
