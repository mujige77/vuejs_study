<template>
  <header class="row">
      <nav class="navbar navbar-toggleable-md navbar-expand navbar-light bg-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <ul class="navbar-nav mr-auto">
                  <router-link :to="{ name: 'homeLink' }" tag="li">
                    <a class="nav-link"  href="">home</a>
                  </router-link>
                  <router-link :to="{ name: 'menuLink' }" tag="li">
                    <a class="nav-link"  href="">menu</a>
                  </router-link>
            </ul>
      </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style>
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em
    }
</style>

