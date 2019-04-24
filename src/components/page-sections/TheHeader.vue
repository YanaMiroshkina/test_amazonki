<template lang='pug'>
  include ../../svg-mixins.pug

  mixin nav-btn(link, title)
    a(itemprop='name url' href=link title=title).nav__btn.link= title

  header(itemscope itemtype='http://schema.org/WPHeader')
    nav(itemscope itemtype='http://schema.org/SiteNavigationElement').nav
      a(href='/' title='Амазонки').nav__logo.link
        +logo
      +nav-btn('/', 'О компании').active.active-style
      +nav-btn('/raspisanie', 'Расписание')
      +nav-btn('/activities', 'Тренировки')
      +nav-btn('/useful', 'Интересное')
      .nav__hover-div

</template>

<script>

export default {
  data () {
    return {
      
    }
  }
}

</script>

<style lang="sass">

header
  height: 80px
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)
  background-color: rgba(255, 255, 255, 0.8)

.nav
  position: relative
  margin: 0 auto
  width: 940px
  height: 100%
  font-size: 0

  &__logo,
  &__btn
    display: inline-block
    vertical-align: middle
    position: relative
    height: 100%
    z-index: 1

  &__logo
    margin-left: 24px
    margin-right: 68px
    width: 200px
    font-size: 17px
    line-height: 80px

  &__logo > svg
    vertical-align: middle
    width: 100%
    height: 100%
    line-height: 32px

  &__btn
    font-size: 20px
    line-height: 80px
    text-align: center
    -webkit-transition: color 0.2s, text-shadow 0.2s
    -moz-transition: color 0.2s, text-shadow 0.2s
    -ms-transition: color 0.2s, text-shadow 0.2s
    -o-transition: color 0.2s, text-shadow 0.2s
    transition: color 0.2s, text-shadow 0.2s
    &:nth-child(2)
      width: 162px

    &:nth-child(3)
      width: 162px

    &:nth-child(4)
      width: 162px

    &:nth-child(5)
      width: 162px

    &:nth-child(2).active ~ .nav__hover-div
      width: 162px
      -webkit-transform: translateX(292px)
      -moz-transform: translateX(292px)
      -ms-transform: translateX(292px)
      -o-transform: translateX(292px)
      transform: translateX(292px)

    &:nth-child(3).active ~ .nav-hover-div
      width: 162px
      -webkit-transform: translateX(454px)
      -moz-transform: translateX(454px)
      -ms-transform: translateX(454px)
      -o-transform: translateX(454px)
      transform: translateX(454px)

    &:nth-child(4).active ~ .nav-hover-div
      width: 162px
      -webkit-transform: translateX(616px)
      -moz-transform: translateX(616px)
      -ms-transform: translateX(616px)
      -o-transform: translateX(616px)
      transform: translateX(616px)

    &:nth-child(5).active ~ .nav-hover-div
      width: 162px
      -webkit-transform: translateX(778px)
      -moz-transform: translateX(778px)
      -ms-transform: translateX(778px)
      -o-transform: translateX(778px)
      transform: translateX(778px)

/* ========= NOT MOBILE ========== */

@media (min-width: 1000px)
  /* --------- active and hover on menu ---------- */

  .nav
    &__btn.active-style
      color: white
      text-shadow: 1px 1px 3px green

    &__hover-div
      display: block
      position: absolute
      top: 0
      left: 0
      height: 100%
      background-color: rgb(57, 191, 79)
      -webkit-transition: all 0.2s
      -moz-transition: all 0.2s
      -ms-transition: all 0.2s
      -o-transition: all 0.2s
      transition: all 0.2s
      z-index: 0



</style>