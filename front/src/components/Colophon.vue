<template lang="pug">
  footer.colophon.page
    .wrap
      .row
        .col-md-6
          img.logo(src="/static/namanyayg-logo.svg")
        .col-md-3
          p
            strong Namanyay Goel ⚡
          p Web & Blockchain Consultant
          p
            a(href="mailto:hi@nmn.gl") hi@nmn.gl
          p
            a(href="https://symmetrycode.com/") symmetrycode &middot; blog
        .col-md-3
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
export default {
  name: 'Colophon'
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

</style>
