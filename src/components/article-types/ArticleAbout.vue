<template lang='pug'>

  article.article.fr
    section.mb-m
      h1.h2.h2-index.mb-l «Амазонки» — высший класс!
        br
        | В нашем клубе всё для Вас!
      .amazonka.fr.mb-m
      p.mb-s Мы открылись 7 февраля 2011 года и вот уже 7 лет радуем прекрасных девушек — помогаем им стать успешнее, красивее и здоровее.
      p.mb-s В нашем фитнес-клубе два просторных светлых зала, оснащенных системой кондиционирования. В одном зале находятся различные тренажёры, позволяющие эффективно укрепить все группы мышц. 
        br
        | Во втором зале проводятся фитнес-тренировки в группах. Групповые программы — это великолепная возможность приобрести и поддержать хорошую физическую форму, укрепить сердечно-сосудистую систему, развить координацию движений и весело провести время с подругами и просто единомышленницами, стремящимися к успеху.
      p.mb-s Мы предлагаем вам уютную атмосферу, удобное месторасположение (Заволжский район, остановка «Речной вокзал») и возможность поменять свою жизнь к лучшему. 
        br
        | Приходите, мы ждём вас :)

    section.mb-m
      div(itemscope itemtype='http://schema.org/Organization')
        h2.h3.mb-m Наши контакты
        span
          span(itemprop='name') Женский фитнес-клуб
            span(itemprop='brand')  «Амазонки»
        address(itemprop='address' itemscope itemtype='http://schema.org/PostalAddress')
          span(itemprop='addressLocality')  {{ club_info.city }}
          |, 
          span(itemprop='streetAddress')  {{ club_info.street_address }}
        address
          | тел.:
          span(itemprop='telephone')
            a(:href="'tel:+7' + club_info.phone_code + club_info.phone_number")
              span.dn +7 ({{ club_info.phone_code }}) 
              |  {{ club_info.phone_number_formatted }}
        address
          | email:
          a(itemprop='email' :href="'mailto:' + club_info.email")  {{ club_info.email }}
        address
          | Мы ВКонтакте:
          a(itemprop='sameAs' :href="'/' + club_info.vk_group" target='_blank')  {{ club_info.vk_group }}

      p.mt-s Приглашаем фитнес-инструктора по йоге в нашу дружную команду.

      iframe(class="yandex-map mt-l" title="Посмотреть женский фитнес-клуб &quot;Амазонки&quot; на карте Твери" src="")
      //- iframe(class="yandex-map mt-l" title="Посмотреть женский фитнес-клуб &quot;Амазонки&quot; на карте Твери" src="https://api-maps.yandex.ru/frame/v1/-/C6a3RWpH")

    section.ff-istok-i
      | Вы можете посмотреть 
      a(href='raspisanie' title='Расписание тренировок женского фитнес-клуба «Амазонки»').ff-istok-bi.color--green Расписание
      |  занятий в нашем фитнес-клубе, 
      br
      | почитать краткое описание тренировок и посмотреть фотографии клуба на странице 
      a(href='activities' title='Описание тренировок женского фитнес-клуба «Амазонки»').ff-istok-bi.color--green Тренировки
      | , а еще у нас есть 
      a(href='useful' title='Полезная информация').ff-istok-bi.color--green интересная и полезная информация
      |  для вас!

    base-button(:base_btn='base_btn')



</template>

<script>

import BaseButton from '../BaseButton.vue'

export default {
  components: {
    BaseButton
  },
  data () {
    return {
      club_info: this.$store.getters.club_info,
      base_btn: {
        route: 'raspisanie',
        btn_text: 'Посмотреть расписание'
      }
    }
  }
}

</script>

<style lang="sass">


</style>