<template lang="pug">
  .hero-container.scene
    .hero
      Masthead(back="dark").masthead
      Bg
      .wrap
        h1.title
          <span>Crafting comprehensive</span><br><span><strong>web&nbsp;&&nbsp;blockchain&nbsp;solutions</strong><span class="highlight"></span></span><br><span>to&nbsp;your business&nbsp;problems.</span>
        .name Namanyay Goel
      .wrap.hero__bottom
        Scroller(color="light").scroller
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
  methods: {
    beginAnimation () {
      this.$el.classList.remove('scene--set')

      const $ = el => this.$el.querySelector(el)
      const $$ = el => this.$el.querySelectorAll(el)

      ;[1, 2, 3].map(i => {
        TweenLite.from($$(`.title > span`)[i - 1], 1, {
          y: 25,
          opacity: 0,
          ease: Power4.easeOut,
          rotationY: 10,
          delay: 0.25 * i
        })
      })

      TweenLite.from($('.highlight'), 2, {
        delay: 1,
        scaleX: 0,
        ease: Power4.easeOut
      })

      const nameTransition = window.matchMedia('(max-width: 55em)').matches ? { y: 50 } : { x: 50 }

      TweenLite.from($('.name'), 2, {
        delay: 0.75,
        ease: Elastic.easeOut.config(1, 0.75),
        opacity: 0,
        ...nameTransition
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
  z-index 5

.masthead
  margin 0 0 12em

.hero
  background-color $color--hero-bg--dark
  background-position left top
  position relative

  &:after
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background-image radial-gradient(circle at 25%, rgba(lighten($color--hero-bg, 5%), .8) 10%, rgba($color--hero-bg, 0))
    z-index 3

.nightsky
  z-index 2
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
    position relative
    transform-origin center left

  strong
    font-weight 700
    color $color--hero-title

  .highlight
    position absolute
    left 0
    right 0
    bottom .25rem
    height .375rem
    transform perspective(10)
    background linear-gradient(45deg, darken($color--highlight, 10%), $color--highlight, darken($color--highlight, 20%))
    z-index -1

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

@media (max-width 82.5em)
  .title
    font-size 3em

    .highlight
      height .25rem

  .name
    font-size 1em

@media (max-width 55em)
  .name
    position static
    transform none
    font-size 1.375em
    margin 3em 0 0

  .masthead
    margin 0 0 6em

  .hero__bottom
    padding-bottom 9em

  .scroller
    display none

@media (max-width 45em)
  .title
    font-size 2.5em

  .name
    font-size 1.125em

@media (max-width 37.5em)
  .title
    font-size 2em

  .name
    font-size 1em

@media (max-width 27.5em)
  .title
    font-size 1.675em
</style>
