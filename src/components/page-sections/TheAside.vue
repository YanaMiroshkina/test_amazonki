<template lang='pug'>

  aside.aside.fl

    template(v-if='!(img_notices || text_notices)')

      .aside__inner(itemscope itemtype='http://schema.org/Organization')
        h2.h2.mb-s Контакты
        
        p
          span(itemprop='name') Женский фитнес-клуб
          |  «
          span(itemprop='brand') Амазонки
          |»
        address(itemprop='address' itemscope itemtype='http://schema.org/PostalAddress')
          |г. 
          span(itemprop='addressLocality')  Тверь
          |, 
          span(itemprop='streetAddress')  ул. Тестовая, 1
        address тел.: 
        span(itemprop='telephone')  
          a(href='tel:+74822123456')
            span.dn +7 (4822) 
            | 123-456
        address.mt-s email: 
          a(itemprop='email' href='mailto:fake-email@yandex.ru').color-green fake-email@yandex.ru
        address ВК: 
          a(itemprop='sameAs' href='//vk.com/' target='_blank' title='Фитнес-клуб «Амазонки» в Твери').color--green  vk.com/fake-vk-group
        a(href='https://api-maps.yandex.ru/frame/v1/-/C6a3RWpH' title='Посмотреть на карте женский фитнес-клуб «Амазонки» в Твери' target='_blank').aside__map.mt-s

    template(v-if='img_notices')
      img(v-for='notice in img_notices' :src="'./src/assets/img/notices/' + notice['img']" :alt="notice['alt']").aside__img.mb-m

    template(v-if='text_notices')
      .aside__inner.mb-m(v-for='notice in text_notices')
        h3.mb-xs {{ notice.title }}
        p {{ notice.text }}



</template>

<script>

export default {
  data () {
    return {
      img_notices: this.$store.state.img_notices,
      text_notices: this.$store.state.text_notices
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
    // background-image: url("../img/map.png")
    background-position: right bottom
    -webkit-background-size: cover
    -o-background-size: cover
    background-size: cover

/* ----------------------- */


</style>