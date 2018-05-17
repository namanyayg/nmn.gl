<template lang="pug">
.page
  Hero
  Works
  Contact
</template>

<script>
import Hero from './Hero/Hero'
import Works from './Works/Works'
import Contact from './Contact/Contact'

export default {
  name: 'Landing',
  components: {
    Hero,
    Works,
    Contact
  }
}
</script>
