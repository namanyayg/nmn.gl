<template>
  <div id="app">
    <CursorBall/>
    <router-view/>
    <Colophon/>
  </div>
</template>

<script>
/**
 * @TODO
 *
 * Favicons
 * Add project-based views of the website, a la rightmessage
 * UntitleClothing integration
 */

import CursorBall from './components/CursorBall'
import Colophon from './components/Colophon'

export default {
  name: 'App',
  components: {
    CursorBall,
    Colophon
  }
}
</script>

<style lang="stylus">
@import '~@/styl/_variables'
@import '~@/styl/_base'
@import '~@/styl/_global'

.wrap
  width 90%
  max-width 87.5em
  margin 0 auto

body
  font-family Europa, monospace
  color $color--body-text
  cursor none
  user-select none
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

h1, h2, h3, h4, h5, h6
  color $color--title-text
</style>
