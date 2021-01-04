# nuxt-maps-module

> Nuxt module allowing you to inject google maps javascript api to the project
> This repo was forked from https://github.com/WilliamDASILVA/nuxt-google-maps-module.

> Include support to `runtimeConfig`

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `nuxt-maps-module` dependency with `yarn` or `npm` to your project
2. Add `nuxt-maps-module` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    'nuxt-maps-module',

    // With options
    ['nuxt-maps-module', { /* module options */ }]
  ]
}
```
## Options
* key (String): maps key;
* libraries (Array): Google maps libraries

## Using runtimeConfig
```js
  publicRuntimeConfig: {
    gmaps: {
      key: 'QAxefdneu...'
    }
  }
```
## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)
