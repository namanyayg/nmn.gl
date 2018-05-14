<template lang="pug">
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

</style>
