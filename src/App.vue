<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqFoodTypes} from './api'

export default {
  async mounted () {
    const result = await reqFoodTypes()
    console.log(result)
  },
  components: {
    FooterGuide
  }

}
</script>

<style>
</style>
