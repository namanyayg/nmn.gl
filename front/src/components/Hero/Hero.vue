<template lang="pug">
  .hero
    Masthead(back="dark").masthead
    Bg
    .wrap
      .row
        .col.col-md-8
          h1.title Crafting comprehensive <strong>web&nbsp;&&nbsp;blockchain&nbsp;solutions</strong><wbr/> to&nbsp;your business&nbsp;problems.
</template>

<script>
import HeroBg from './HeroBg'
import Masthead from '../Masthead'

export default {
  name: 'Hero',
  components: {
    Masthead,
    Bg: HeroBg
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.masthead
  margin 0 0 12em

.hero
  padding 0 0 18em
  background-color #222
  background-image radial-gradient(circle at 25%, #222 10%, #111)
  background-position left top
  position relative

.starry-night
  position absolute
  left 0
  right 0
  top 0
  bottom 0

.title
  margin 0
  font-weight 300
  font-size 4em
  color white

  strong
    font-weight 700

  h2
    font-size 2em
    margin 1.5em 0 4em

    em
      font-style normal
      display inline-block
      position relative
      text-shadow 3px 3px white, -3px 3px white
      z-index 5

      &:after
        content ''
        height .2em
        background linear-gradient(45deg, rgba(black, .05), rgba(black, .1))
        position absolute
        left -.1em
        right -.1em
        bottom 0
        overflow hidden
        z-index -1

.contact-lead
  width 100%
  background linear-gradient(45deg, #fafafa, #eee)
  padding 4em 0

  > .wrap
    display flex
    justify-content space-between
    align-items center

  .content
    color #999
    font-weight 300
    font-style italic
    text-align left
    max-width 20em
    margin-right 2em

    p
      margin 0

.hero-button
  padding 2em 5em
  box-sizing border-box
</style>
