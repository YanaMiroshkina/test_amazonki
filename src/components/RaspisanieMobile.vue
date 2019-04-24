<template lang='pug'>

  mixin thead
    thead
      tr
        td Время
        td Тренировка


  section

    h1.h2.mb-m.tac Расписание зала групповых программ

    table(v-for='table in raspisanie_groups_mobile').table.mobile.mt-m
      caption.h3.mb-s {{ table[0]['day'] }}
      +thead()
      tbody
        tr(v-for='training in table')
          td
            span {{ training.time }}:00
          td
            span
              a(:href="'activities#' + training.activity_anchor")
                strong(v-html="(training.corporative && training.activity) ? 'Корпоративная группа ' + training.activity + ',' : (training.activity ? training.activity + ',' : '')").ff-istok-b
              | {{ training.trainer || '' }}


    h2.h2.mt-l.mb-m.tac Расписание тренажерного зала

    table.table.mobile.mt-m
      +thead()
      tbody
        tr(v-for='row in raspisanie_gym_mobile')
          td
            span {{ row.day }}
          td
            span(v-for='training in row.trainings') {{ training }}

</template>

<script>

export default {
  data () {
    return {
      raspisanie_groups_mobile: this.$store.getters.raspisanie_groups_mobile,
      raspisanie_gym_mobile: this.$store.getters.raspisanie_gym_mobile
    }
  }

}

</script>

<style lang="sass">


</style>