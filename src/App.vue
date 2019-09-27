<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {mapActions} from 'vuex'
// eslint-disable-next-line no-unused-vars
// import {reqFoodCategroys} from './api'

export default {
  mounted () {
    this.$store.dispatch('getAddress')
  },
  methods: {
    ...mapActions(['getAddress'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style>
</style>
