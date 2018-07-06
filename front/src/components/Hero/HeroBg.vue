<template lang="pug">
  canvas.starry-night
</template>

<script>
/**
 * INSPIRATION
 * https://unsplash.com/collections/365/night-sky
 * https://codepen.io/WillemCrnlssn/pen/JgFGs
 * https://codepen.io/bigsweater/pen/MyqZdQ
 */

export default {
  name: 'HeroBg',
  data () {
    return {
      canvas: '.starry-night'
    }
  },
  computed: {
    $canvas () {
      return document.querySelector(this.canvas)
    },
    ctx () {
      return this.$canvas.getContext('2d')
    }
  },
  methods: {
    draw () {
      // const $canvas = this.$canvas
      // const ctx = this.ctx

      // Loop
      // requestAnimationFrame(this.draw)
    }
  },
  mounted () {
    requestAnimationFrame(this.draw)
  }
}
</script>

<style lang="stylus" scoped>

</style>
