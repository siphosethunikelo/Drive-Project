<template>
  <div id="app">
     <contact-Desktop id="Contact-Desktop"/>
    <home-Desktop id="Home-Desktop"/>
    <div class="view-container">
    <router-view/>
  </div>
</template>

<script>
import contactDesktopVue from './components/contact-Desktop.vue'
import homeDesktopVue from './components/home-Desktop.vue'



export default {
  components: {
    contactDesktopVue,
    homeDesktopVue
  }
}
</script>

<style lang="sass" scoped>
.view-container 
  @media screen and (max-width: 1096px)
  .view-container
    width: 100%
    margin-left: 0
  #desktop-nav
    display: none
  #mobile-nav
    display: flex
</style>
