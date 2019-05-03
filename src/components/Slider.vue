<template lang='pug'>

  .slider.mb-l
    .slider__block.cf
      //- клон последнего изображения
      .slider__item.cloned(ref='first_clone' @click.self='open_modal(first_clone.img_path)' :style="[first_clone.style, {'transform': 'translateX(-100%)'}]" :alt='first_clone.alt' :class="{animating: (clone_animating == 'first')}")

      .slider__content.cf(ref='slider_content' :style="{width: slider_items.length * 100 + '%', 'transform': 'translateX(' + slider_position + '%)'}")
        .slider__item(@click.self='open_modal(slide.img_path)' v-for='slide in slider_items' :style="[slide.style, {'width': 100 / slider_items.length + '%'}]" :alt='slide.alt')

      //- клон первого изображения
      .slider__item.cloned(ref='last_clone' @click.self='open_modal(last_clone.img_path)' :style="[last_clone.style, {'transform': 'translateX(100%)'}]" :alt='last_clone.alt' :class="{animating: (clone_animating == 'last')}")

    .slider__arrow.slider__arrow--left(@click="set_slide('prev')")
    .slider__arrow.slider__arrow--right(@click="set_slide('next')")


</template>

<script>

import {bus} from '../main'

function set_styles(slides) {
  let length = slides.length;
  for (let i=0; i < length; i++) {
    slides[i]['url'] = '../src/assets/img/' + slides[i]['img_path'];
    slides[i]['style'] = {
      'background-image': 'url(' + slides[i]['url'] + ')',
      'padding-top': 62 / length + '%'
    };
  }
  return slides;
}

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
window.requestAnimationFrame = requestAnimationFrame

export default {
  props: ['slides'],
  data () {
    return {
      animation_is_going: false,
      active_slide: 1,
      slider_position: 0,
      clone_animating: ''
    }
  }, 
  computed: {
    slider_length() {
      return this.slider_items.length
    },
    slider_step() {
      return 100 / this.slider_length
    },
    slider_items() {
      return set_styles(this.slides)
    },
    first_clone() {
      return this.slider_items[this.slider_length - 1]
    },
    last_clone() {
      return this.slider_items[0]
    }
  },
  methods: {

    open_modal: function(img_path) {
      bus.$emit('open_modal', {type: 'img', img_path: img_path})
    },

    set_slide: function(dirrection) {
      let t = this

      if (t.animation_is_going) return

      t.animation_is_going = true
      if (dirrection == 'next') {
        ++t.active_slide
      } else {
        --t.active_slide
      }
      t.clone_animating = t.active_slide > t.slider_length ? 'last' : (t.active_slide < 1 ? 'first' : '')
        
      let duration = 300,
      start = (new Date()).getTime(),
      end = start + duration,
      regexp = /^(?:translateX\()((?:\-?)[0-9]+(?:\.)?[0-9]*)(?:\%\))$/,
      left = t.$refs['slider_content'].style.transform,
      end_left = -(t.active_slide - 1) * t.slider_step

      left = +left.match(regexp)[1]

      if (this.clone_animating) {
        var cl = t.clone_animating + '_clone',
        clone_left = +t.$refs[cl].style.transform.match(regexp)[1],
        end_clone_left = 0
      }

      let return_slider = () => {
        switch(t.clone_animating) {
          case 'first': 
            t.$refs[cl].style.transform = 'translateX(-100%)'
            t.active_slide = t.slider_length
            t.slider_position = -(100 - t.slider_step)
            break
          case 'last':
            t.$refs[cl].style.transform = 'translateX(100%)'
            t.active_slide = 1
            t.slider_position = 0
            break
        }
        t.clone_animating = ''
      }

      let step = () => {
        let timestamp = (new Date()).getTime()

        if (timestamp < end) {
          let progress = (timestamp - start) / duration,
          result = left + (end_left - left) * progress
          t.slider_position = result

          if (t.clone_animating) {
            let clone_result = clone_left + (end_clone_left - clone_left) * progress
            t.$refs[cl].style.transform = 'translateX(' + clone_result + '%)'
          }
          requestAnimationFrame(step)

        } else if (timestamp >= end) {
          // докручиваем слайд до конца
          t.slider_position = end_left
          if (t.clone_animating) {
            t.$refs[cl].style.transform = 'translateX(0%)'
            return_slider()
          }
          this.animation_is_going = false
        }
      }
      step()
    }

  }
}

</script>

<style lang="sass">

.slider
  position: relative

  &__block
    position: relative
    width: 100%
    font-size: 0
    overflow: hidden

  &__content
    position: relative

  &__item
    display: inline-block
    float: left
    -webkit-background-size: contain
    -o-background-size: contain
    background-size: contain
    background-position: center center
    background-repeat: no-repeat
    cursor: pointer

    &.cloned
      opacity: 0
      transition: none
      z-index: -1

      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

      &.animating
        opacity: 1
        z-index: 2

  &__arrow
    position: absolute
    top: 0
    width: 60px
    height: 100%
    font-size: 28px
    font-weight: bold
    color: rgb(2, 175, 2)
    cursor: pointer
    z-index: 2

    &:before
      display: block
      position: absolute
      top: 50%
      width: 31px
      height: 38px
      line-height: 42px
      border: 1px solid #24ad24
      -webkit-box-shadow: 0 0 13px 6px white
      box-shadow: 0 0 13px 6px white
      background: rgba(163, 255, 163, 0.55)
      -webkit-transform: translateY(-50%)
      -moz-transform: translateY(-50%)
      -ms-transform: translateY(-50%)
      -o-transform: translateY(-50%)
      transform: translateY(-50%)
      cursor: pointer

    &:hover:before
      -webkit-box-shadow: inset 0 0 2px 0 #5fa920
      box-shadow: inset 0 0 2px 0 #5fa920

    &--left
      left: 0
      text-align: left

      &:before
        content: 'ᐊ'
        left: 0
        padding-left: 7px

    &--right
      right: 0
      text-align: right

      &:before
        content: 'ᐅ'
        right: 0
        padding-right: 7px

</style>




