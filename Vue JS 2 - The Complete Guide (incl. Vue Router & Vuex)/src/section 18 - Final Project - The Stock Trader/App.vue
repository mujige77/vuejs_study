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
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header,
        },
        created() {
        	this.$store.dispatch('initStocks')
        }
    }
</script>

<style>
    body {
        padding: 30px
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
