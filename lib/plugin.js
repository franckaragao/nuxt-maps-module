import Vue from "vue";

export default async function (ctx, inject) {
  const runtimeConfig = (ctx.$config && ctx.$config.gmaps) || {};
  const moduleOptions = <%= serialize(options) %>
  const options = { ...moduleOptions, ...runtimeConfig }
  const librariesStr = options.libraries.join(",");

  if(process.server) {
    ctx.beforeNuxtRender(() => {
      if (options.key) {
        ctx.app.head.script.push({
          id: options.scriptId,
          src: `${options.scriptURL}?key=${options.key}&libraries=${librariesStr}&callback=initMap`,
          defer: options.defer,
          async: options.async
        })
      }
    });
 }

  /**
   * Inject the Google object in the Nuxt instance, even if it's
   * not used server side.
   */
  ctx["__nuxt_$google_installed__"] = true;
  /**
   * Apply the new Google object to the previously created one in our
   * Vue app (client side only)
   * Do an event boomerang to make sure the Google maps API callback was
   * called and google injected in Vue.
   */
  if (typeof window !== "undefined") {
    const event = new window.Event("maps-module:initiated");
    window.dispatchEvent(event);
    window.addEventListener("maps-module:loaded", () => {
      inject('$google', window.google);
      Object.defineProperty(Vue.prototype, "$google", {
        get() {
          return window.google;
        },
        configurable: true,
      });
    });
  }
}
