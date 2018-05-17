<template lang="pug">
  footer.colophon.page
    .wrap
      .row
        .col-md-6.col-2
          Logo.logo
        .col-md-3.col-6
          p
            strong Namanyay Goel ⚡
          p Web & Blockchain Consultant
          p
            a(href="mailto:mail@namanyayg.com") mail@namanyayg.com
          p
            a(href="https://symmetrycode.com/") symmetrycode &middot; blog
        .col-md-3.col-4
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
import Logo from './Logo'

export default {
  name: 'Colophon',
  components: {
    Logo
  }
}
</script>

<style lang="stylus" scoped>
.colophon
  padding 4em 0

  a
    color #999

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
