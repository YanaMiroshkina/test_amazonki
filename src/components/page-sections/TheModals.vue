<template lang='pug'>

  .modals
    .modals__list
      .modal.modal--image.modal--hidden
        img(src='../../assets/img/notices/1-notices-a.jpg' alt='')
        .modal__close
      .modal.modal--me.modal--hidden
        .modal__inner
          p.h3.mb-s Хотите сайт?
          p Напишите мне )
          a(href='mailto:miroshkina388@mail.ru' title='Яна Мирошкина').link.dib.mt-s miroshkina388@mail.ru
          .modal__close

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

/* ----- closing animation ------ */

.modals
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  overflow-x: hidden
  overflow-y: scroll
  visibility: hidden
  -webkit-transition: visibility 0.3s
  -moz-transition: visibility 0.3s
  -ms-transition: visibility 0.3s
  -o-transition: visibility 0.3s
  transition: visibility 0.3s
  z-index: 100

  &__list
    position: relative
    height: 100%
    text-align: center
    will-change: background
    background: transparent
    -webkit-transition: background 0.3s
    -moz-transition: background 0.3s
    -ms-transition: background 0.3s
    -o-transition: background 0.3s
    transition: background 0.3s
    overflow: scroll
    z-index: 1
    cursor: pointer
    perspective: 5000px

    &:before
      content: ''
      display: inline-block
      vertical-align: middle
      margin-right: -0.25em
      width: 0.1px
      height: 100%

.modal
  display: inline-block
  vertical-align: middle
  position: relative
  margin-top: 50px
  margin-bottom: 50px
  width: auto
  height: auto
  -webkit-box-shadow: 1px 0 11px rgba(0, 0, 0, 0.4)
  box-shadow: 1px 0 11px rgba(0, 0, 0, 0.4)
  visibility: hidden
  opacity: 0
  will-change: transform, opacity
  -webkit-transform: scale(0.8)
  -moz-transform: scale(0.8)
  -ms-transform: scale(0.8)
  -o-transform: scale(0.8)
  transform: scale(0.8)
  -webkit-transition: opacity 0.3s, transform 0.3s
  -moz-transition: opacity 0.3s, transform 0.3s
  -ms-transition: opacity 0.3s, transform 0.3s
  -o-transition: opacity 0.3s, transform 0.3s
  transition: opacity 0.3s, transform 0.3s
  cursor: auto
  z-index: 101

  &__inner
    padding: 30px 55px 40px 40px
    text-align: left
    background-color: white

  & > img
    display: block
    margin: 0
    width: 100%

  &__close
    position: absolute
    top: 0
    right: -86px
    width: 87px
    height: 87px
    background-color: rgba(255, 255, 255, 0.75)
    cursor: pointer

    &:before,
    &:after
      display: block
      content: ''
      position: absolute
      top: 48%
      left: 52%
      width: 4%
      height: 48%
      background-color: rgb(106, 134, 106)
      -webkit-transform-origin: 50% 49%
      -moz-transform-origin: 50% 49%
      -ms-transform-origin: 50% 49%
      -o-transform-origin: 50% 49%
      transform-origin: 50% 49%

    &:before
      -webkit-transform: translate(-50%, -50%) rotate(45deg)
      -moz-transform: translate(-50%, -50%) rotate(45deg)
      -ms-transform: translate(-50%, -50%) rotate(45deg)
      -o-transform: translate(-50%, -50%) rotate(45deg)
      transform: translate(-50%, -50%) rotate(45deg)

    &:after
      -webkit-transform: translate(-50%, -50%) rotate(-45deg)
      -moz-transform: translate(-50%, -50%) rotate(-45deg)
      -ms-transform: translate(-50%, -50%) rotate(-45deg)
      -o-transform: translate(-50%, -50%) rotate(-45deg)
      transform: translate(-50%, -50%) rotate(-45deg)

    &:hover
      background-color: rgba(255, 255, 255, 0.78)

/* ========== MODAL OPENED ======== */

/* ------- opening animation ------- */

.modal-opened
  overflow: hidden

  .modals
    visibility: visible
    -webkit-transition: visibility 0.3s
    -moz-transition: visibility 0.3s
    -ms-transition: visibility 0.3s
    -o-transition: visibility 0.3s
    transition: visibility 0.3s

    &__list
      perspective: 5000px
      -webkit-transition: background 0.3s
      -moz-transition: background 0.3s
      -ms-transition: background 0.3s
      -o-transition: background 0.3s
      transition: background 0.3s
      background: rgba(17, 66, 11, 0.4)

  .modal
    visibility: visible
    opacity: 1
    -webkit-transform: scale(1)
    -moz-transform: scale(1)
    -ms-transform: scale(1)
    -o-transform: scale(1)
    transform: scale(1)
    -webkit-transition: opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.15, 0.82, 0.56, 1.05)
    -moz-transition: opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.15, 0.82, 0.56, 1.05)
    -ms-transition: opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.15, 0.82, 0.56, 1.05)
    -o-transition: opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.15, 0.82, 0.56, 1.05)
    transition: opacity 0.3s ease-out, transform 0.3s cubic-bezier(0.15, 0.82, 0.56, 1.05)
    z-index: 102

    &--image
      max-width: 80%

/* ----------- MODAL HIDDEN ----------- */

.modal--hidden
  width: 0
  height: 0

  & > *,
  &:before,
  &:after
    visibility: hidden

</style>