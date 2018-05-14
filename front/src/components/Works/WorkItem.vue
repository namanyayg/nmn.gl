<template lang="pug">
  section.work(:class="`work--${data.namespace}`")
    Media(:data="data")
    .content
      .wrap
        header
          .main
            h1.title
              span {{ data.title }}
            .role
              span.marker ROLE
              span {{ data.role.join(' &loz; ') }}
          .subhead
            h2.subtitle(v-html="data.subtitle")
            .view-case
              .button Read Full Case
        blockquote.quote
          p {{ data.quote.content }}
          footer
            cite
              .avatar
                img(:src="`/static/clients/${ data.quote.by.avatar }`")
              .person
                .name {{ data.quote.by.name }}
                .post {{ data.quote.by.post }}
</template>

<script>
import Media from './Media'

export default {
  name: 'Work',
  props: ['data'],
  components: {
    Media
  },
  created () {
    console.log(this.data)
  }
}
</script>

<style lang="stylus" scoped>
.work
  margin 0 0 12em
  background #fff

header
  display flex
  width 100%

.title
  font-size 5em
  font-weight bold
  margin .5em 0 0
  letter-spacing -.5px

  span
    z-index 5
    position relative
    text-shadow 3px 3px white, -3px 3px white

    &:after
      content ''
      height .125em
      background linear-gradient(45deg, rgba(black, .05), rgba(black, .1))
      position absolute
      left 0
      right 0
      bottom 0
      overflow hidden
      z-index -1

  .main
    width 40%

.role
  .marker
    margin-right .25em
    text-transform uppercase
    letter-spacing 2px

    &:after
      content ':'
      margin 0 0 0 .25em
      display inline-block
      transform translateY(-2px)
      font-weight 400

.subhead
  display flex
  flex-direction column
  justify-content space-between
  margin 3.5em 0 .5em 5em
  text-align right
  flex 1

.subtitle
  font-size 1.5em
  margin 0 0 1rem
  font-style italic
  color #999999
  font-weight 300

.quote
  font-size 1.5em
  margin 6rem 0 0
  // font-family 'adobe-garamond-pro'
  position relative
  letter-spacing -.3px
  font-weight 400
  z-index 5

  p
    margin 0 0 1em

    &:before,
    &:after
      content '“'
      position absolute
      font-size 3em
      font-weight bold
      z-index -1
      margin -.375em 0 0 -.625em
      color #eee

    &:after
      content '”'
      margin -.2em 0 0 .125em

  footer
    display flex
    justify-content flex-end

    cite
      font-style normal
      font-size 1rem
      display flex

      .avatar
        margin .5em .75em 0 0
        img
          display block
          max-height 2.5em
          max-width 2.5em
          width auto
          border-radius 100%

      .name
        font-size 1.125em
        font-weight 700
</style>
