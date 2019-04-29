<template lang='pug'>

  #app
    modals
    router-view

</template>

<script>

import TheModals from './components/page-sections/TheModals'

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments,
    later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    },
    call_now = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (call_now) func.apply(context, args)
  }
}

export default {
  name: 'app',
  components: {
    'modals': TheModals
  },
  data () {
    return {

    }
  },
  methods: {
    on_resize: function() {
      this.$store.commit('change_is_mobile', window.innerWidth < 1000)
    }
  },
  created() {
    this.on_resize()
  },
  mounted: function () {
    window.addEventListener('resize', debounce(this.on_resize, 250))
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.on_resize)
  }
}
</script>

<style lang="sass">

/* ======= TAGS ======== */

html
  min-width: 320px
  height: 100%

body
  margin: 0
  padding: 0
  height: 100%
  -webkit-font-smoothing: antialiased
  -webkit-tap-highlight-color: transparent

summary
  cursor: pointer

input[type='file']
  display: block

/* ====== ВСПОМОГАТЕЛЬНЫЕ КЛАССЫ ====== */

.h1, .h2, .h3, .h4, .h5, .h6
  font-family: 'istok-b'
  font-weight: bold
  -webkit-font-smoothing: subpixel-antialiased

.h1
  font-size: 33px
  line-height: 1.3

.h2
  font-size: 27px
  line-height: 1.35

.h3
  font-size: 23px
  line-height: 1.35

.h4
  font-size: 21px

.mt-xl
  margin-top: 50px

.mt-l
  margin-top: 40px

.mt-m
  margin-top: 30px

.mt-s
  margin-top: 20px

.mt-xs
  margin-top: 15px

.mt-xxs
  margin-top: 10px

.mb-xl
  margin-bottom: 50px

.mb-l
  margin-bottom: 40px

.mb-m
  margin-bottom: 30px

.mb-s
  margin-bottom: 20px

.mb-xs
  margin-bottom: 15px

.mb-xxs
  margin-bottom: 10px

.fl
  float: left

.fr
  float: right

.db
  display: block

.dn
  display: none

.dni
  display: none!important

.dib
  display: inline-block

.dib-center
  position: relative
  left: 50%
  -webkit-transform: translateX(-50%)
  -moz-transform: translateX(-50%)
  -ms-transform: translateX(-50%)
  -o-transform: translateX(-50%)
  transform: translateX(-50%)

.dt
  display: table

.dtc
  display: table-cell

.vam
  vertical-align: middle

.vat
  vertical-align: top

.vabase
  vertical-align: baseline

.vh
  visibility: hidden

.ovh
  overflow: hidden

.ff-istok-i
  font-family: 'istok-i'
  font-style: italic

.ff-istok-b
  font-family: 'istok-b'
  font-weight: bold

.ff-istok-bi
  font-family: 'istok-bi'
  font-weight: bold
  font-style: italic

.ff-liberation-b
  font-family: 'liberation-serif-b', serif
  font-weight: bold

.tac
  text-align: center

.tdu
  text-decoration: underline

.cb
  clear: both

.cf:after
  content: ''
  display: table
  clear: both

.link
  font-family: 'istok-b'
  font-weight: bold
  color: green

.color--green
  color: green

.bold-italic-tags 
  b
    font-family: 'liberation-serif-b'
  i
    font-family: 'liberation-serif-i'
  b i,
  i b
    font-family: 'liberation-serif-bi'

.cta
  display: inline-block
  padding: 9px 24px 10px
  font-family: 'istok-b'
  font-weight: bold
  font-size: 20px
  text-align: center
  color: white
  background-color: #228a33
  border: 1px solid #228a33
  -webkit-border-radius: 5px
  border-radius: 5px
  -webkit-transition: height .2s, background .2s
  -moz-transition: height .2s, background .2s
  -ms-transition: height .2s, background .2s
  -o-transition: height .2s, background .2s
  transition: height .2s, background .2s
  cursor: pointer

.cta:hover
  background-color: #196926
  border: 1px solid #196926

#app
  height: 100%

.wrapper
  position: relative
  min-height: 100%
  background: linear-gradient(to right, rgba(34, 185, 35, 0.83), rgba(84, 249, 39, 0.55))
  perspective: 100px

.main
  margin: 0 auto
  padding: 30px 0 100px
  width: 940px
  &--error
    padding: 70px 0 160px

.amazonka
  position: relative
  margin-top: -132px
  margin-left: 10px
  margin-right: -52px
  width: 307px
  height: 368px
  background-image: url(../src/assets/img/amazonka.png)
  -webkit-background-size: auto 100%
  -o-background-size: auto 100%
  background-size: auto 100%
  background-position: -16px 61px
  background-repeat: no-repeat
  -webkit-border-radius: 150px
  border-radius: 150px
  &:before
    display: block
    content: ''
    position: absolute
    top: 0
    right: 0
    width: 77px
    height: 100%
    background: white

.yandex-map
  width: 100%
  height: 450px
  background-image: url(../src/assets/img/map.png)
  -webkit-background-size: cover
  -o-background-size: cover
  background-size: cover
  border: 0

/* ======== АНИМАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ======= */

.main
  opacity: 1
  transform: translate3d(0, 0, 0)

  /* previous transition opacity was ease-out */
  transition: opacity 0.27s ease-out, transform 0.27s cubic-bezier(0.34, 1.05, 0.79, 1.24)

.animated-main-content
  opacity: 0
  transform: translate3d(0, 0, -1.5px)
  transition: opacity 0s, transform 0s

/* ===================== */


</style>
