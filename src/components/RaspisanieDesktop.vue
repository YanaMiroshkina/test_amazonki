<template lang='pug'>

  mixin thead()
    thead
      tr
        td
          span Время
        td
          span Понедельник
        td
          span Вторник
        td
          span Среда
        td
          span Четверг
        td
          span Пятница
        td
          span Суббота


  section

    h1.h2.mb-m.tac Расписание зала групповых программ

    table.table.screen
      +thead()
      tbody
        tr(v-for='(row, i) in raspisanie_groups' :key='i')
          td
            span {{ row[0]['time'] }}:00

          td(v-for='training in row')
            span
              template(v-if='training.activity')
                //- оставляем ссылки на описание тренировок в виде a(href),
                //- так как router-link не будет прокручивать к хэшу
                //- по умолчанию
                a(:href="'activities#' + training.activity_anchor")
                  strong(v-html="(training.corporative && training.activity) ? 'Корпоративная группа ' + training.activity + ',' : (training.activity ? training.activity + ',' : '')").ff-istok-b
                | {{ training.trainer || '' }}
              template(v-else) &nbsp;

    
    h2.h2.mt-l.mb-m.tac Расписание тренажерного зала

    table.table.screen
      +thead()
      tbody
        tr(v-for='(row, i) in raspisanie_gym' :key='i')
          td
            span {{ row[0]['time'] }}:00

          td(v-for='training in row') {{ training.trainer || '&nbsp;' }}


</template>

<script>

export default {
  data () {
    return {
      raspisanie_groups: this.$store.state.raspisanie_groups,
      raspisanie_gym: this.$store.state.raspisanie_gym
    }
  }
}

</script>

<style lang="sass">

</style>