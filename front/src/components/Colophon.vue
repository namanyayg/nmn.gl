<template lang="pug">
  footer.colophon.page.scene
    .wrap
      .row
        .col-md-6.col-2
          .logo-container
            Logo(stroke="#193071").logo
        .col-md-3.col-6.list
          p
            strong Namanyay Goel ⚡
          p Web & Blockchain Consultant
          p
            a(href="https://github.com/namanyayg/nmn.gl") view source
          p
            a(href="https://symmetrycode.com/") symmetrycode &middot; blog
        .col-md-3.col-4.list
          p
            a(href="https://github.com/namanyayg") github
          p
            a(href="https://twitter.com/namanyayg") twitter
          p
            a(href="https://dribbble.com/namanyayg") dribbble
          p
            a(href="https://instagram.com/namanyayg") instagram
</template>

<script>
import { TweenLite, Power4 } from 'gsap'
import Logo from './Logo'

export default {
  name: 'Colophon',
  components: {
    Logo
  },
  methods: {
    beginAnimating () {
      this.$el.classList.remove('scene--set')
      const $ = el => this.$el.querySelector(el)
      const $$ = el => this.$el.querySelectorAll(el)

      TweenLite.from($('.logo-container'), 0.5, {
        y: 40,
        opacity: 0,
        ease: Power4.easeOut,
        delay: 0.25
      })

      ;[1, 2].map(i => {
        ;[1, 2, 3, 4].map(j => {
          TweenLite.from($$(`.list p`)[((i - 1) * 4) + (j - 1)], 0.5, {
            y: 20,
            opacity: 0,
            delay: ((i - 1) * 0.375) + (j * 0.125)
          })
        })
      })
    }
  },
  mounted () {
    this.$el.addEventListener('enliven', this.beginAnimating)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.colophon
  padding 4em 0

  a
    color $color--subtitle-text

    &:hover
      color $color--highlight

p
  margin 0 0 .25em

.logo
  transition all .5s cubic-bezier(0.455, 0.03, 0.515, 0.955)

  &:hover
    transform rotate(360deg)

@media (max-width 36em)
  .colophon
    font-size .875em
  .logo
    height 1.75em
</style>
