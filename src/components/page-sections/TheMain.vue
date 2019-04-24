<template lang='pug'>

  main.main.cf
    aside-block
    article-block  

</template>

<script>

import TheAside from './TheAside'
import TheArticle from './TheArticle'

export default {
  components: {
    'aside-block': TheAside,
    'article-block': TheArticle
  },
  data () {
    return {
      
    }
  }
}

</script>

<style lang="sass">

</style>