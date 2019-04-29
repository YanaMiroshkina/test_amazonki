<template lang='pug'>
  
  main.main.main--error.tac
    p.num-error 404
    p.text-error Упс! Ничего не найдено

</template>

<script>

import TheHeader from '../page-sections/TheHeader'
import TheFooter from '../page-sections/TheFooter'

export default {
  components: {
    'header-block': TheHeader,
    'footer-block': TheFooter
  },
  data () {
    return {
      
    }
  }
}

</script>

<style lang="sass">

.main--error
  padding: 70px 0 160px

.num-error
  font-family: 'istok-b'
  font-weight: bold
  font-size: 80px
  line-height: 120px
  color: white
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15)

.text-error
  display: inline-block
  padding: 10px 25px
  font-size: 16px
  background: white
  -webkit-box-shadow: 0 7px 33px -5px rgba(0, 0, 0, 0.3)
  box-shadow: 0 7px 33px -5px rgba(0, 0, 0, 0.3)


</style>