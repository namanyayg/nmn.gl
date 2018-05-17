<template lang="pug">
  canvas.starry-night
</template>

<script>
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
  }
}
</script>

<style lang="stylus" scoped>

</style>
