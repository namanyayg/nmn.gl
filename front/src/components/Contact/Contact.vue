<template lang="pug">
  .page
    .contact
      .wrap
        .row
          .col-md-4
            .title Contact
            .content
              p Tell me about yourself, your brand, and your goals. Let's create something extraordinary, together.

              p(v-if="isAccepting") Accepting new projects for {{ currentQuarter }}.

              p Don't like forms? Write to me at&nbsp;
                a(href="mailto:mail@namanyayg.com") mail@namanyayg.com
          .col-md-6.offset-md-2
            form(@submit.prevent="submitRfq")
              label.control
                input.element(v-model="rfq.name" required)
                span.label(class="") Name
                .foci
              label.control
                input.element(v-model="rfq.email" required)
                span.label Email
                .foci
              label.control
                textarea.element(v-model="rfq.description" required)
                span.label What are you looking for?
                .foci
              label.control
                select.element(v-model="rfq.budget" required)
                  option(disabled selected style="display: none")
                  option $1000&thinsp;&ndash;&thinsp;$2000
                  option $2000&thinsp;&ndash;&thinsp;$5000
                  option $5000&thinsp;&ndash;&thinsp;$15000
                  option $15000+
                span.label Budget
                .foci
              button Send Message
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      rfq: {
        name: null,
        email: null,
        description: null,
        budget: null
      },
      isAccepting: true
    }
  },
  computed: {
    currentQuarter () {
      const d = new Date()
      const q = Math.floor((d.getMonth() + 3) / 3)
      return `Q${q} ${d.getFullYear()}`
    }
  },
  methods: {
    submitRfq () {
      console.log(this.rfq)
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  padding 8em 0 12em
  background linear-gradient(45deg, #111, #222)
  color #bbb

a
  font-weight 700
  color white

.title
  font-size 4em
  font-weight 700
  margin 0 0 1em
  color white

.content
  font-size 1.5em
  font-weight 300

input, textarea, select
  color white

button
  margin-top 1.5em
  background #000
  padding 1.5em
  color #fff

@media (max-width 60em)
  .content
    font-size 1.25em

@media (max-width 48em)
  .title
    margin 0 0 .5em

  .page
    padding 6em 0 8em

@media (max-width 30em)
  .title
    font-size 2.75em
    line-height 1
    margin 0 0 2rem
</style>
