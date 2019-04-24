<template lang='pug'>

  article.article.fr.w100
    //- raspisanie-desktop
    raspisanie-mobile

    base-button(:base_btn='base_btn')

</template>

<script>

import RaspisanieDesktop from '../RaspisanieDesktop'
import RaspisanieMobile from '../RaspisanieMobile'
import BaseButton from '../BaseButton.vue'

export default {
  components: {
    RaspisanieDesktop,
    RaspisanieMobile,
    BaseButton
  },
  data () {
    return {
      base_btn: {
        route: 'activities',
        btn_text: 'Посмотреть описание тренировок'
      }
    }
  }
}

</script>

<style lang="sass">

.table
  display: block
  width: 100%
  font-size: 15px
  overflow: hidden

table
  table-layout: fixed
  font-family: 'istok-r'
  word-break: break-word

table strong
  font-size: 15px

table span a
  display: block
  color: black

table span.new strong
  color: green

caption
  position: relative
  z-index: 1
  font-family: 'istok-b'
  font-weight: bold
  color: green
  background-color: white

thead
  position: relative
  background-color: rgba(66, 193, 46, 0.23)
  z-index: 1

thead td span
  font-family: 'istok-b'
  font-weight: bold

.table tr:nth-child(2n)
  background: rgba(36, 154, 36, 0.06)

td
  position: relative
  padding: 5px 8px

td:not(:first-child)
  width: 200px

.table td
  vertical-align: top
  border: 1px solid darkgreen

.table td:first-child
  padding-left: 9px
  width: 80px

.table td:not(:first-child)
  width: 155px

/* vertical block for highlighting */
.table td:hover:after
  content: ""
  position: absolute
  top: -5000px
  left: 0
  width: 100%
  height: 10000px

/* highlight */
.table tbody tr:hover,
.table td:not(:first-child):hover:after
  background-color: rgba(255, 235, 59, 0.42)

/* text over highlight */
.table span
  display: block
  position: relative
  width: 100%
  height: 100%
  z-index: 1

/* ======== WIDE MOBILE < 1000px ======== */

@media (max-width: 999px)

  .table
    margin-left: auto
    margin-right: auto
    width: 262px
    font-size: 13px

  .table strong
    font-size: 13px

  .table-gym-mobile td:first-child
    width: 110px

  .table-gym-mobile td:nth-child(2n)
    width: 152px

  caption
    font-size: 18px
    line-height: 22px

  thead td
    font-family: 'istok-r'

  td
    padding: 7px 5px 5px

  /* --- no highlight for columns and rows on mobile --- */
  .table tbody tr:hover,
  .table td:not(:first-child):hover:after
    background-color: initial

  .table tr:nth-child(2n):hover
    background: rgba(36, 154, 36, 0.06)

</style>