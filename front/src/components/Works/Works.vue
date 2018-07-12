<template lang="pug">
  .work#works
    .work-intro
      .content
        .wrap
          header.header
            h1.title Works
            .subtitle Selected cases from advancing 60+ businesses over the last 5+ years.
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

@media (max-width 67.5em)
  .header
    flex-direction column
    justify-content center
    margin 0 0 2em
    text-align center

  .title
    margin 0

@media (max-width 60em)
  .subtitle
    font-size 1.125em

@media (max-width 50em)
  .title
    font-size 3em

  .subtitle
    font-size 1em
</style>
