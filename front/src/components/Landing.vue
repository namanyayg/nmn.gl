<template lang="pug">
.page
  .hero
    .wrap
      h1 Hi, I'm <strong>Namanyay Goel</strong>
      h2 I craft comprehensive <em>web&nbsp;&&nbsp;blockchain&nbsp;solutions</em> to&nbsp;complex business&nbsp;problems.

    .contact-lead
      .wrap
        .content
          p With <strong>5+</strong>&nbsp;years of experience working with <strong>60+</strong>&nbsp;clients worldwide, I know how&nbsp;to deliver <strong>quantifiable&nbsp;results</strong>.
        button.hero-button Get in Touch
  Works
  Contact
</template>

<script>
import Works from './Works/Works'
import Contact from './Contact/Contact'

export default {
  name: 'Landing',
  components: {
    Works,
    Contact
  }
}
</script>

<style lang="stylus" scoped>
.hero
  padding 4em 0 0

  h1
    margin 0
    font-weight 300
    font-size 7.5em

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
