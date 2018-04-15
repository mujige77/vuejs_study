import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    data: {
    },
    methods: {
      changeAge(age) {
        this.$emit("ageWasEdited", age)
      }
    }
})

export const serverBus = new Vue({
  
})

new Vue({
  el: '#app',
  render: h => h(App)
})