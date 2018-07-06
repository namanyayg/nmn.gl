<template lang="pug">
  .work#works
    .work-intro
      .content
        .wrap
          header.header
            h1.title Works
            .subtitle selected cases from advancing 60+ businesses over the last 5+ years.
    .works
      Work(v-for="work in getWorks('featured')" :key="work" :data="works[work]")
</template>

<script>
import WorkItem from './WorkItem'
import data from './data'

export default {
  name: 'Works',
  components: {
    Work: WorkItem
  },
  data () {
    return {
      works: data
    }
  },
  methods: {
    getWorks (category) {
      const mapping = {
        featured: ['asa', 'autolo', 'asianfanfics', 'lownotes', 'cyankart']
      }

      return mapping[category]
    }
  }
}
</script>

<style lang="stylus">
.header
  display flex
  width 100%
  justify-content space-between
  align-items center

.work-intro
  padding 3em 0

.title
  font-size 4em
  font-weight bold

.subtitle
  font-style italic
  font-size 1.5em
  font-weight 300
</style>
