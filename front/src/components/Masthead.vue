<template lang="pug">
  .masthead
    .wrap
      .logo
        Logo(:stroke="strokeColor")
      nav.menu
        a.menu--item(href="#work") Work
        a.menu--item(href="#contact") Contact
</template>

<script>
import Logo from './Logo'

export default {
  name: 'Masthead',
  components: {
    Logo
  },
  props: {
    back: {
      type: String,
      default: 'light'
    }
  },
  computed: {
    strokeColor () {
      console.log(this.back)
      return this.back === 'dark' ? '#fff' : '#222'
    }
  }
}
</script>

<style lang="stylus" scoped>
.masthead
  border-bottom thin solid #444

  > .wrap
    display flex
    align-items center
    justify-content space-between

.logo
  display flex
  align-items center

.menu
  display flex

.menu--item
  display block
  color white
  font-weight 300
  text-transform lowercase
  letter-spacing 1px
  text-decoration none
  padding 2em 0
  margin-left 3em
</style>
