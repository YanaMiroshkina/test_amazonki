<template lang='pug'>

  .wrapper
    header-block(:active="'raspisanie'")
    main.main.cf
      article-block(:article="'raspisanie'")
    footer-block

</template>

<script>

import TheHeader from '../page-sections/TheHeader'
import TheAside from '../page-sections/TheAside'
import TheArticle from '../page-sections/TheArticle'
import TheFooter from '../page-sections/TheFooter'

export default {
  components: {
    'header-block': TheHeader,
    'aside-block': TheAside,
    'article-block': TheArticle,
    'footer-block': TheFooter
  },
  data () {
    return {
      
    }
  }
}

</script>

<style lang="sass">



</style>