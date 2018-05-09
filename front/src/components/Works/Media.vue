<template lang="pug">
  .item
    template(v-if="client === 'cyankart'")
      figure
        img.mockup(src="/static/portfolio/mockups/01.png")
        .screen(style="transform-origin: 0px 0px 0px; transform: matrix3d(0.25952, -0.142896, 0, 7.44688e-05, 0.237486, 0.131577, 0, -9.41429e-05, 0, 0, 1, 0, 64, 102.6, 0, 1);")
          img(src="/static/portfolio/cyankart/screen.jpg")
</template>

<script>
export default {
  name: 'Media',
  props: ['client']
}
</script>

<style lang="stylus" scoped>
figure
  position relative

.mockup
  position absolute
</style>
