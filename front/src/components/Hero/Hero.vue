<template lang="pug">
  .hero-container.scene
    .hero
      Masthead(back="dark").masthead
      Bg
      .wrap
        .row
          .col.col-md-8
            h1.title <span>Crafting comprehensive</span> <span><strong>web&nbsp;&&nbsp;blockchain&nbsp;solutions</strong></span> <span>to&nbsp;your business&nbsp;problems.</span>
        .name Namanyay Goel
      .wrap.hero__bottom
        Scroller(color="light")
</template>

<script>
import { TweenLite, Power4, Elastic } from 'gsap'
import HeroBg from './HeroBg'
import Masthead from '../Masthead'
import Scroller from './Scroller'

export default {
  name: 'Hero',
  components: {
    Masthead,
    Scroller,
    Bg: HeroBg
  },
  data () {
    return {
    }
  },
  methods: {
    beginAnimation () {
      this.$el.classList.remove('scene--set')
      const $ = el => this.$el.querySelector(el)

      ;[1, 2, 3].map(i => {
        TweenLite.from($(`.title span:nth-child(${i})`), 1, {
          y: 25,
          opacity: 0,
          ease: Power4.easeOut,
          rotationY: 10,
          delay: 0.25 * i
        })
      })

      TweenLite.from($('.name'), 2, {
        delay: 0.75,
        x: 50,
        ease: Elastic.easeOut.config(1, 0.75),
        opacity: 0
      })

      TweenLite.from($('.hero__bottom'), 1, {
        delay: 1.5,
        y: 50,
        opacity: 0,
        ease: Power4.easeOut
      })
    }
  },
  mounted () {
    this.$el.addEventListener('enliven', this.beginAnimation)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.row
  align-items center

.wrap
  position relative

.masthead
  margin 0 0 12em

.hero
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  background-position left top
  position relative

.starry-night
  position absolute
  left 0
  right 0
  top 0
  bottom 0

.hero__bottom
  padding-bottom 18em

.title
  margin 0
  font-weight 300
  font-size 4em
  color $color--hero-text

  span
    display inline-block
    transform-origin center left

  strong
    font-weight 700
    color $color--hero-title

.hero-button
  padding 2em 5em
  box-sizing border-box

.name
  position absolute
  color $color--hero-text--light
  right 0
  top 50%
  font-size 1.375em
  text-transform uppercase
  letter-spacing .25em
  transform rotate(-90deg) translateY(-25%) translateX(57%)
  transform-origin center right
</style>
