import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-http-954c9.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'fseidkei'
axios.defaults.headers.get['Acceppt'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('request interceptors', config)
  return config
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('response interceptors', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
