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
      stars: [],
      dimensions: {}
    }
  },
  computed: {
    $canvas () {
      return this.$el
    },
    ctx () {
      return this.$canvas.getContext('2d')
    }
  },
  methods: {
    setDimensions () {
      const { $canvas } = this
      const { height, width } = document.querySelector('.hero').getBoundingClientRect()

      this.dimensions = {
        height,
        width
      }
      $canvas.height = height
      $canvas.width = width
    },
    /**
     * Start filling the skies
     */
    init () {
      /**
       * Generates position for given star
       * @returns { x, y }
       */
      const _generatePosition = () => {
        const x = Math.floor(Math.random() * this.dimensions.width)
        const y = Math.floor(Math.random() * this.dimensions.height)
        return { x, y }
      }

      /**
       * Returns period, i.e., duration of
       * twinkling
       */
      const _generateDelta = () => {
        return 0.005 + ((Math.floor(Math.random() * 30)) / 1000)
      }

      /**
       * Returns brightness between 0 and 1
       */
      const _generateBrightness = () => {
        return Math.floor(Math.random() * 10) / 10
      }

      /**
       * Return `type` for a star (integer)
       */
      const _generateType = () => {
        return Math.floor(Math.random() * 6)
      }

      /**
       * Returns maximum number of stars allowed on screen
       */
      const _GET_MAX_STARS = () => {
        return 100
      }

      /**
       * Returns `n` number of newly created stars
       */
      const createStars = (n) => {
        return Array(n).fill(null).map((_, i) => {
          const { x, y } = _generatePosition()
          const delta = _generateDelta()
          const brightness = _generateBrightness()
          const type = _generateType()

          return {
            x,
            y,
            delta,
            brightness,
            type
          }
        })
      }

      this.stars = createStars(_GET_MAX_STARS())
    },

    render () {
      const { ctx } = this

      const _renderStar = star => {
        const { x, y, brightness, type } = star
        const color = `rgba(255, 255, 255, ${brightness})`
        const renderers = [
          _ => { // Large Square
            ctx.fillStyle = color
            ctx.beginPath()
            ctx.rect(x, y, 2, 2)
            ctx.closePath()
            ctx.fill()
          },
          _ => { // Triangle Upward
            ctx.strokeStyle = color
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + 1, y + 2)
            ctx.lineTo(x - 1, y + 2)
            ctx.closePath()
            ctx.fill()
          }
        ]
        // Choose different renderer
        renderers[type % renderers.length]()
      }

      this.stars.map(_renderStar)
    },

    update () {
      const _updateBrightness = star => {
        const { brightness, delta } = star
        star.brightness = brightness + delta
        if (star.brightness >= 1 || star.brightness <= 0) star.delta *= -1
        if (star.brightness > 1) star.brightness = 1
        if (star.brightness < 0) star.brightness = 0
        return star
      }

      this.stars = this.stars.map(star => {
        let newStar = star
        newStar = _updateBrightness(newStar)
        return newStar
      })
    },

    clear () {
      const { ctx, dimensions } = this
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)
    },

    draw () {
      // Loop
      this.clear()
      this.update()
      this.render()
      requestAnimationFrame(this.draw)
    }
  },
  created () {
    setTimeout(() => {
      this.setDimensions()
      this.init()
      requestAnimationFrame(this.draw)
    }, 42)
  }
}
</script>

<style lang="stylus" scoped>

</style>
