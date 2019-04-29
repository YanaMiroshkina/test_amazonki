<template lang='pug'>

   router-link(:to='base_btn.route').cta.dib-center.mt-m {{ base_btn.btn_text }}

</template>

<script>

export default {
  props: ['base_btn'],
  data () {
    return {

    }
  }
}

</script>

<style lang="sass">


</style>