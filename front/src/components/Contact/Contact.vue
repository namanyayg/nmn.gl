<template lang="pug">
  .page.scene
    .contact
      .wrap
        .row
          .col-md-4.persp
            .title Contact
            .content
              p Tell me about yourself, your brand, and your goals. Let's create something extraordinary, together.

              p(v-if="isAccepting") Accepting new projects for {{ currentQuarter }}.

              p Don't like forms? Write to me at&nbsp;
                a(href="mailto:mail@namanyayg.com") mail@namanyayg.com
          .col-md-6.offset-md-2.persp
            form(@submit.prevent="submitRfq")
              label.control
                input.element(v-model="rfq.name" required)
                span.label(class="") Name
                .foci
              label.control
                input.element(v-model="rfq.from" required)
                span.label Email
                .foci
              label.control
                textarea.element(v-model="rfq.message" required)
                span.label Describe what you&rsquo;re looking for
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
              .button-container.control
                button Send Message
</template>

<script>
import { TweenLite, Power4, Elastic } from 'gsap'

export default {
  name: 'Contact',
  data () {
    return {
      rfq: {
        name: null,
        from: null,
        message: null,
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
      const { rfq } = this

      this.axios.post('/namaste', { rfq })
        .then(res => {

        })
    },

    beginAnimation () {
      this.$el.classList.remove('scene--set')
      const $ = el => this.$el.querySelector(el)
      const $$ = el => this.$el.querySelectorAll(el)

      TweenLite.from($('.title'), 1, {
        rotationX: 80,
        opacity: 0,
        ease: Power4.easeOut
      })

      ;[1, 2, 3].map(i => {
        TweenLite.from($(`.content p:nth-child(${i})`), 1, {
          y: 20,
          rotationX: -10,
          opacity: 0,
          ease: Power4.easeOut,
          delay: 0.25 * i
        })
      })

      ;[1, 2, 3, 4, 5].map(i => {
        TweenLite.from($$(`.control`)[i - 1], 1.5, {
          rotationY: -20,
          opacity: 0,
          ease: Elastic.easeInOut.config(1, 1),
          delay: 0.125 * (i - 1)
        })
      })
    }
  },
  mounted () {
    this.$el.addEventListener('enliven', this.beginAnimation)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styl/_variables'

.scene--set
  opacity 0

.page
  padding 8em 0 10em
  background-color $color--hero-bg
  background-image radial-gradient(circle at 25%, $color--hero-bg 10%, $color--hero-bg--dark)
  color $color--hero-text--light

a
  font-weight 700
  color white

.persp
  perspective 800

  &:nth-child(1)
    perspective-origin top center

  &:nth-child(2)
    perspective-origin center right

.title
  font-size 4em
  font-weight 700
  margin 0 0 1em
  color $color--hero-title
  transform-origin center bottom

.content
  font-size 1.5em
  font-weight 300

.control .element
  background darken($color--hero-bg--dark, 25%)

.foci
  background lighten($color--hero-bg, 10%)

input, textarea, select
  color $color--hero-text--light

  &:after
    background

.button-container
  display flex
  justify-content flex-end
  width 100%

.control
  transform-origin center right

button
  background $color--highlight
  padding 1.25em 1.5em
  color #fff
  font-size .875em

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
