<template>
    <div class="container">
        <!-- <a href="#" data-toggle="collapse" data-target="#toggleDemo" class="collapsed">
            <span class="glyphicon glyphicon-cloud"></span> Submenu 1 <span class="caret pull-right"></span>
        </a>
        <div class="collapse" id="toggleDemo" style="height: 0px;">
            <ul class="nav nav-list">
                <li><a href="#">Submenu1.1</a></li>
                <li><a href="#">Submenu1.2</a></li>
                <li><a href="#">Submenu1.3</a></li>
            </ul>
        </div> -->
        <app-header></app-header>
        <div class="col-xs-12">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header,
        }
    }
</script>

<style>
    body {
        padding: 30px
    }
</style>
