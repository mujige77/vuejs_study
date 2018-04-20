<template>
  <div>
    <div v-if="currentUser">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <app-new-pizza></app-new-pizza>
      </div>
      <div class="col-sm-12 col-md-6">
        <h3>Menu:</h3>
        <table class="table table-sm">
          <thead class="thead-default thead-light">
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
          </thead>
          <tbody v-for="(item, menuKey) in getMenuItems" :key="item['.key']">
          <tr>
            <td>{{item.name}}</td>
            <button class="btn btn-outline-danger btn-sm" @click="removeMenuItem(menuKey)">X</button>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h3>Current order: {{numberOfOrders}}</h3>
        <table class="table table-sm"  v-for="(order, orderIndex) in getOrders" :key="order['.key']">
          <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          <div class="order-number">
            <strong><em>Order Number: {{orderIndex + 1}}</em></strong>
            <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(order['.key'])">X</button>
          </div>
          <tr v-for="orderItem in order['.value']">
            <td>{{orderItem.name}}</td>
            <td>{{orderItem.size}}</td>
            <td>{{orderItem.quantity}}</td>
            <td>{{orderItem.price | currency}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <app-login></app-login>
      </div>
    </div>
  </div>
</template>

<script>
  import NewPizza from './NewPizza'
  import Login from './Login'
  import {mapGetters} from  'vuex'
  import { dbMenuRef, dbOrdersRef } from '../firebaseConfig';

  export default {
    components: {
      appNewPizza: NewPizza,
      appLogin: Login,
    },
    data() {
      return {
        name: 'Chris'
      }
    },
    beforeRouteLeave: (to, from, next) => {
      if (confirm("Have you remember")) {
        next()
      }
      else {
        next(false)
      }
    },
    computed: {
      ...mapGetters([
        'getMenuItems',
        'numberOfOrders',
        'getOrders',
        'currentUser'
      ])
    },
    methods: {
      removeMenuItem(key) {
        console.log(this.getMenuItems)
        console.log(key)
        dbMenuRef.child(key).remove()
      },
      removeOrderItem(key) {
        console.log(this.getMenuItems)
        console.log(key)
        dbOrdersRef.child(key).remove()
      }
    }
  }
</script>

