<template lang='pug'>

  aside.aside.fl

    template(v-if="aside=='notices' && img_notices")
      img(@click="open_modal(notice['img_path'])" v-for='notice in img_notices' :src="'./src/assets/img/' + notice['img_path']" :alt="notice['alt']").aside__img.mb-m

    template(v-if="aside=='notices' && text_notices")
      .aside__inner.mb-m(v-for='notice in text_notices')
        h3.mb-xs {{ notice.title }}
        p {{ notice.text }}

    template(v-if="aside=='contacts'")

      .aside__inner.screen.mb-m(itemscope itemtype='http://schema.org/Organization')
        h2.h2.mb-s Контакты
        
        p
          span(itemprop='name') Женский фитнес-клуб
          |  «
          span(itemprop='brand') Амазонки
          |»
        address(itemprop='address' itemscope itemtype='http://schema.org/PostalAddress')
          span(itemprop='addressLocality')  {{ club_info.city }}
          |, 
          span(itemprop='streetAddress')  {{ club_info.street_address }}
        address тел.: 
          span(itemprop='telephone')  
            a(:href="'tel:+7' + club_info.phone_code + club_info.phone_number")
              span.dn +7 ({{ club_info.phone_code }}) 
              | {{ club_info.phone_number_formatted }}
        address.mt-s email: 
          a(itemprop='email' :href="'mailto:' + club_info.email").color-green {{ club_info.email }}
        address ВК: 
          a(itemprop='sameAs' :href="'/' + club_info.vk_group" target='_blank' title='Фитнес-клуб «Амазонки» в Твери').color--green  {{ club_info.vk_group }}
        a(href='https://api-maps.yandex.ru/frame/v1/-/C6a3RWpH' title='Посмотреть на карте женский фитнес-клуб «Амазонки» в Твери' target='_blank').aside__map.mt-s



</template>

<script>

import {bus} from '../../main'

export default {
  props: ['aside'],
  data () {
    return {
      club_info: this.$store.getters.club_info,

      img_notices: this.$store.getters.img_notices,
      text_notices: this.$store.state.text_notices
    }
  },
  methods: {
    open_modal: function(img_path) {
      bus.$emit('open_modal', {type: 'img', img_path: img_path})
    }
  }
}

</script>

<style lang="sass">

/* ------- ASIDE ------- */

.aside
  width: 250px
  font-size: 14px
  > *
    box-shadow: 0 20px 100px rgba(0, 0, 0, 0.3)

  &__img
    display: block
    width: 100%
    background-color: white
    cursor: pointer

  &__inner
    padding: 15px 20px 20px
    line-height: 1.5
    background-color: white

  &__map
    display: block
    width: 100%
    height: 167px
    background-image: url("../../assets/img/map.png")
    background-position: right bottom
    -webkit-background-size: cover
    -o-background-size: cover
    background-size: cover

/* ----------------------- */


</style>