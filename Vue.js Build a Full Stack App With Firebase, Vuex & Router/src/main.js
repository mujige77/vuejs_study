import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import {routes} from "./routes";

import {store} from "./store/store";

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if (to.hash) {
      return to.hash
    }
    else {
      return {x: 0, y: 0}
    }
  }
})

// router.beforeEach((to, from, next) => {
//   // if(to.path === '/menu') {
//   //   next()
//   // }
//   // else {
//   //   next(false)
//   // }
//   next()
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
