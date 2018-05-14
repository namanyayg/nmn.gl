<template lang="pug">
  .media(:style="mediaBgStyle")
    .wrap
      .item
        .video-container(:style="videoBgStyle")
          .shadow
          video(:poster="posterUrl" autoplay loop muted)
            source(:src="videoUrl" type="video/mp4")
</template>

<script>
export default {
  name: 'Media',
  props: ['data'],
  data () {
    return {
      mediaBgStyle: {
        backgroundImage: `url('/static/portfolio/backgrounds/${this.data.namespace}.jpg')`
      }
    }
  },
  computed: {
    videoUrl () { return `/static/portfolio/${this.data.media.video}.mp4` },
    posterUrl () { return `/static/portfolio/${this.data.media.video}.jpg` },
    videoBgStyle () {
      return {
        background: `linear-gradient(45deg, rgba(0,0,0,.3), rgba(0,0,0,.1)), url(${this.posterUrl})`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.media
  background #eeeeee
  background-size cover
  perspective 100em
  position relative

  &:after
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background linear-gradient(bottom, white, rgba(white, 0) 40%)

  .wrap
    position relative
    top -1em

  .item
    max-width 40em
    margin 0 auto
    position relative
    transform rotateX(15deg) rotateY(25deg)
    transform-style preserve-3d
    backface-visibility hidden
    z-index 5

  .video-container
    display block
    max-width 100%
    background-size 0 cover

    .shadow
      position absolute
      top 1em
      left 1em
      right 1em
      bottom 1em
      background rgba(0, 0, 0, .5)
      box-shadow 0 0 3em 1em rgba(0,0,0,.6)
      transform translateZ(-2em) translateY(.5em)

    &:before,
    &:after
      content ''
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      background inherit
      transform-origin left center
      transform rotateY(90deg)
      width 1em

    &:after
      transform-origin bottom center
      transform rotateX(90deg)
      width 100%
      top auto
      bottom 0
      height 1em

  video
    display block
    width 100%
</style>
