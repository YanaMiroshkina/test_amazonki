<template lang='pug'>

  //- article-about
  //- article-raspisanie
  article-activities
  //- article-useful

</template>

<script>

import ArticleAbout from '../article-types/ArticleAbout'
import ArticleRaspisanie from '../article-types/ArticleRaspisanie'
import ArticleActivities from '../article-types/ArticleActivities'
import ArticleUseful from '../article-types/ArticleUseful'

export default {
  components: {
    ArticleAbout,
    ArticleRaspisanie,
    ArticleActivities,
    ArticleUseful
  },
  data () {
    return {
      
    }
  }
}

</script>

<style lang="sass">

.article
  position: relative
  padding: 30px 27px 40px
  width: 647px
  background-color: white
  -webkit-box-shadow: 0 20px 100px rgba(0, 0, 0, 0.3)
  box-shadow: 0 20px 100px rgba(0, 0, 0, 0.3)
  overflow: hidden

</style>