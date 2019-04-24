<template lang='pug'>

  .slider.mb-l
    .slider__block.cf
      //- клон последнего изображения
      .slider__item.cloned(:style='[first_clone.style]' :alt='first_clone.alt' :class="{animating: (clone_animating == 'first')}")

      .slider__content.cf(:class="{'not-animating': move_content_instantly}" :style="{width: slider_items.length * 100 + '%', 'transform': 'translateX(' + slider_position + '%)'}")
        .slider__item(v-for='slide in slider_items' :style="[slide.style, {'width': 100 / slider_items.length + '%'}]" :alt='slide.alt')

      //- клон первого изображения
      .slider__item.cloned(:style='[last_clone.style]' :alt='last_clone.alt' :class="{animating: (clone_animating == 'last')}")

    .slider__arrow.slider__arrow--left(@click='prev_slide')
    .slider__arrow.slider__arrow--right(@click='next_slide')


</template>

<script>

function set_styles(slides, folder) {
  let length = slides.length;
  for (let i=0; i < length; i++) {
    slides[i]['url'] = '../src/assets/img/slides-' + folder + '/' + slides[i]['img'];
    slides[i]['style'] = {
      'background-image': 'url(' + slides[i]['url'] + ')',
      'padding-top': 62 / length + '%'
    };
  }
  return slides;
}

export default {
  props: ['slides', 'folder'],
  data () {
    return {
      active_slide: 1,
      slider_position: 0,
      move_content_instantly: false,
      clone_animating: ''
    }
  }, 
  computed: {
    slider_length() {
      return this.slider_items.length;
    },
    slider_step() {
      return 100 / this.slider_length;
    },
    slider_items() {
      return set_styles(this.slides, this.folder);
    },
    first_clone() {
      return this.slider_items[this.slider_length - 1];
    },
    last_clone() {
      return this.slider_items[0];
    }
  },
  methods: {

    set_slider_position: function(slide, t) {
      t.active_slide = slide
      t.slider_position = -(t.active_slide - 1) * t.slider_step
    },

    move_clone: function(clone) {
      let t = this
      t.clone_animating = clone
      new Promise((resolve) => {
        setTimeout(() => {
          t.move_content_instantly = true
          let slide = clone == 'last' ? 1 : t.slider_length
          t.set_slider_position(slide, t)
          t.clone_animating = ''
          resolve(t)
        }, 400)
      }).then((t) => {
        return setTimeout(() => {
          t.move_content_instantly = false
        })
      })
    },

    open_slide: function(id) {
      this.set_slider_position(id, this)
      if (id > this.slider_length) {
        this.move_clone('last')
      } else if (id < 1) {
        this.move_clone('first')
      }
    },

    next_slide: function() {
      if (this.active_slide <= this.slider_length) {
        this.active_slide++
        this.open_slide(this.active_slide)
      }
    },

    prev_slide: function() {
      if (this.active_slide >= 1) {
        this.active_slide--
        this.open_slide(this.active_slide)
      }
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
    transition: transform 0.3s
    &.not-animating
      transition: none

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

      &:first-child
        -webkit-transform: translateX(-100%)
        -moz-transform: translateX(-100%)
        -ms-transform: translateX(-100%)
        -o-transform: translateX(-100%)
        transform: translateX(-100%)

      &:last-child
        -webkit-transform: translateX(100%)
        -moz-transform: translateX(100%)
        -ms-transform: translateX(100%)
        -o-transform: translateX(100%)
        transform: translateX(100%)

      &.animating
        opacity: 1
        transition: transform 0.3s
        transform: translateX(0)
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




