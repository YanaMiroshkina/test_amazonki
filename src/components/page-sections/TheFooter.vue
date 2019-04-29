<template lang='pug'>
  include ../../svg-mixins.pug

  footer(itemscope itemtype='http://schema.org/WPFooter').footer
    div(itemscope itemtype='http://schema.org/Organization').footer__inner
      span.footer__copyright © 
        span(itemprop='name') Амазонки
        span.screen ,&nbsp;2011-2018
      address(itemprop='address' itemscope itemtype='http://schema.org/PostalAddress').footer__contacts
        span(itemprop='addressLocality') Тверь,
          span(itemprop='streetAddress')  ул. Тестовая, 1.
        a(itemprop='telephone' href='tel:+74822123456').footer__phone 
          span.screen +7 (4822)
          |  123-456
      span(@click="open_modal('me')").pulse.fr Создано с&nbsp;
        span.heart
          +heart

</template>

<script>

import {bus} from '../../main'

export default {
  data () {
    return {
      
    }
  },
  methods: {
    open_modal: function(type) {
      bus.$emit('open_modal', {type: type})
    }
  }
}

</script>

<style lang="sass">

.footer
  position: absolute
  bottom: 0
  width: 100%
  height: 50px
  font-family: 'istok-r'
  border-top: 1px solid rgba(0, 0, 0, 0.2)
  -webkit-box-sizing: content-box
  -moz-box-sizing: content-box
  box-sizing: content-box
  background-color: #1b4621

  & *
    color: white

  &__inner
    position: relative
    margin: 0 auto
    width: 940px
    font-size: 14px
    line-height: 50px
    letter-spacing: 0.1px

  &__copyright
    display: inline-block
    margin-left: 45px

  &__contacts
    display: inline-block
    margin-left: 92px

  &__phone
    margin-left: 14px

.pulse
  cursor: pointer

@keyframes pulse
  0%
    -webkit-transform: scale(1)
    -moz-transform: scale(1)
    -ms-transform: scale(1)
    -o-transform: scale(1)
    transform: scale(1)

  20%
    -webkit-transform: scale(1.1)
    -moz-transform: scale(1.1)
    -ms-transform: scale(1.1)
    -o-transform: scale(1.1)
    transform: scale(1.1)

  50%
    -webkit-transform: scale(1)
    -moz-transform: scale(1)
    -ms-transform: scale(1)
    -o-transform: scale(1)
    transform: scale(1)

  80%
    -webkit-transform: scale(1.1)
    -moz-transform: scale(1.1)
    -ms-transform: scale(1.1)
    -o-transform: scale(1.1)
    transform: scale(1.1)

  100%
    -webkit-transform: scale(1)
    -moz-transform: scale(1)
    -ms-transform: scale(1)
    -o-transform: scale(1)
    transform: scale(1)

.heart
  width: 23px
  height: 20px

.heart-svg
  display: inline-block
  vertical-align: middle
  -webkit-filter: drop-shadow(0 0 0.5px rgba(255, 255, 255, 0.8))
  filter: drop-shadow(0 0 0.5px rgba(255, 255, 255, 0.8))

.pulse:hover .heart-svg
  -webkit-animation: pulse 0.7s ease
  -moz-animation: pulse 0.7s ease
  -o-animation: pulse 0.7s ease
  animation: pulse 0.7s ease

/* ==== СТИЛИ, КОТОРЫЕ ДОЛЖНЫ ИДТИ ПОСЛЕДНИМИ ==== */ 
// находятся тут, потому что футер подключается в DOM последним,
// и его стили прописываются последними

.w100
  width: 100%

/* ------- hiding mobile and screen elements ------ */

@media (min-width: 1000px)
  [class*="mobile"]
    display: none

@media (max-width: 999px)
  [class*="screen"]
    display: none


</style>