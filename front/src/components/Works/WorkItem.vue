<template lang="pug">
  section.work(:class="`work--${data.namespace}`")
    Media(:data="data")
    .content
      .wrap
        header.header
          .main
            h1.title
              span {{ data.title }}
            .m-subtitle(v-html="data.subtitle")
            .role
              span.marker ROLE
              span {{ data.role.join(' &loz; ') }}
          .subhead
            h2.subtitle(v-html="data.subtitle")
            .view-case
              .button Read Full Case
        blockquote.quote
          p {{ data.quote.content }}
          footer.foot
            .m-view-case
              .button Read Case
            cite.cite
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
  }
}
</script>

<style lang="stylus" scoped>
.work
  margin 0 0 12em
  background #fff

.header
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

.m-subtitle
  display none

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
      font-family georgia
      position absolute
      font-size 2em
      font-weight bold
      z-index -1
      margin -.25em 0 0 -.625em
      color #eee

    &:after
      content '”'
      margin -.25em 0 0 .125em

  .foot
    display flex
    align-items center
    justify-content flex-end

    .cite
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

.m-view-case
  font-size .875rem
  display none

@media (max-width 60em)
  .title
    font-size 4em
  .subtitle
    font-size 1em
  .quote
    font-size 1.25em

@media (max-width 50em)
  .work
    margin 0 0 9em

  .header
    display block
    text-align center

    &:after
      content ' '
      height 2px
      width 2em
      background #eee
      position absolute
      margin-top 1.5em
      transform translateX(-50%)

  .m-subtitle
    display block
    margin .75em 0
    font-size 1.125em

  .m-view-case
    display block

  .role
    color #999

  .subhead,
  .marker
    display none

  .quote
    margin 3.5rem 0 0

    p
      // Quotes look weird
      &:before, &:after
        font-size 1.5em
      &:before
        margin -.25em 0 0 -.575em
      &:after
        margin -.25em 0 0 0

    .foot
      justify-content space-between

@media (max-width 30em)
  .work
    margin 0 0 7.5em

  .title
    font-size 2.75em
    margin .75em 0 0

  .m-subtitle
    font-size 1em

  .quote
    font-size 1em

    p
      margin-bottom 2em

      &:before,
      &:after
        content none

    .foot
      .cite
        font-size .875em
      .name
        font-size 1em

  .m-view-case
    font-size .75em

    .button
      padding 1em
</style>
