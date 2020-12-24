
<template>
  <div class="map-view">
    Works!
    <div ref="map" class="map-view" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      initialPoint: { lat: -15.796856, lng: -47.883004 },
      zoom: 4,
      mapInstance: null
    }
  },
  mounted () {
    const element = this.$refs.map

    const execute = () => {
      this.createMap(element)
    }

    if (this.$google) {
      console.log('this.$google: ', this.$google)
      execute()
    } else {
      const callback = () => {
        execute()
      }
      window.addEventListener('maps-module:loaded', callback)
    }
  },

  methods: {
    createMap (element) {
      this.mapInstance = new this.$google.maps.Map(element, {
        zoom: this.zoom,
        center: new this.$google.maps.LatLng(this.initialPoint.lat, this.initialPoint.lng),
        mapTypeId: this.$google.maps.MapTypeId.ROADMAP
      })
    }
  }
}
</script>

<style>
.map-view {
  position: relative;
  height: calc(93vh);
  overflow: hidden;
}
</style>
