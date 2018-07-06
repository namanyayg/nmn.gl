<template lang="pug">
  .cursor.js-cursor(v-show="showCursor")
    .cursor__ball.js-cursor__big
      svg.cursor-circle.js-cursor-circle(height='30', width='30')
        circle.cursor-circle__inner(cx='15', cy='15', r='12', stroke='transparent', stroke-width='0')
    .cursor__ball.js-cursor__small
      svg.cursor-circle.js-cursor-circle(height='10', width='10')
        circle.cursor-circle__inner(cx='5', cy='5', r='4', stroke='transparent', stroke-width='0')
</template>

<script>
import {TweenLite, Power4, Elastic, Back} from 'gsap'

export default {
  name: 'CursorBall',
  data () {
    return {
      isMorphed: false,
      userTouched: false,
      userHovered: false
    }
  },
  computed: {
    showCursor () {
      return !this.userTouched && this.userHovered
    }
  },
  methods: {
    requiresMorph (target) {
      return ['button', 'a'].includes(target.tagName.toLowerCase()) ||
        (typeof target.className === 'string' && target.className.includes('button'))
    },

    moveCursor (e) {
      const LAG = 0.5 // in seconds
      const target = e.target

      const cursorSmall = '.js-cursor__small'
      const cursorBig = '.js-cursor__big'

      // User has hovered from a mouse-like device,
      // indiciate
      this.userHovered = true

      // Move the cursor ball to the mouse position
      TweenLite.set(cursorSmall, {
        x: e.clientX - 5,
        y: e.clientY - 10
      })
      // Ensure a small lag for the larger ball
      TweenLite.to(cursorBig, LAG, {
        x: e.clientX - 15,
        y: e.clientY - 12.5,
        ease: Power4.easeOut
      })

      // Check the target to morph mouse
      if (this.requiresMorph(target)) {
        if (!this.isMorphed) {
          TweenLite.to(cursorSmall, 0.3, {
            ease: Power4.easeOut,
            scale: 0.1,
            autoAlpha: 0
          })
          TweenLite.to(cursorBig, 1, {
            scale: 2,
            ease: Elastic.easeOut.config(1, 0.5),
            onStart: () => {
              this.isMorphed = true
            }
          })
        }
      } else {
        if (this.isMorphed) {
          TweenLite.to(cursorSmall, 0.5, {
            ease: Power4.easeOut,
            scale: 1,
            autoAlpha: 1
          })
          TweenLite.to(cursorBig, 0.5, {
            scale: 1,
            ease: Back.easeOut.config(1.7),
            onStart: () => {
              this.isMorphed = false
            }
          })
        }
      }
    }
  },
  created () {
    window.addEventListener('mousemove', this.moveCursor)
    window.addEventListener('touchstart', _ => {
      this.userTouched = true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.cursor
  pointer-events none
  cursor none

.cursor__ball
    position fixed
    top 0
    left 0
    mix-blend-mode difference
    z-index 1000
    cursor none !important

.cursor-circle__inner
    fill $color--hero-text
</style>
