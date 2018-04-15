<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <!-- <app-home></app-home> -->
      <app-admin></app-admin>
    </div>
    <div class="container">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Home from './components/Home.vue'
  import Menu from './components/Menu.vue'
  import Admin from './components/Admin.vue'
  
  export default {
    data() {
      return {}
    },
    components: {
      appHeader: Header,
      appFooter: Footer,
      appHome: Home,
      appMenu: Menu,
      appAdmin: Admin,
    }
  }
</script>

<style>
  
</style>
