<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>

        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>

        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>

    <div class="container">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import {dbMenuRef, dbOrdersRef} from './firebaseConfig'

  export default {
    data() {
      return {}
    },
    components: {
      appHeader: Header,
      appFooter: Footer,
    },
    created() {
      this.$store.dispatch('setMenuRef', dbMenuRef)
      this.$store.dispatch('setOrdersRef', dbOrdersRef)
    }
  }
</script>

<style>

</style>
