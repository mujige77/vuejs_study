<template>
  <div class="row">
    {{$route.params.item}}
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
        <tr>
          <th>Size</th>
          <th>Price</th>
          <th>Add To basket</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
        <tr>
          <td><strong>{{ item.name }}</strong></td>
        </tr>
        <tr v-for="option in item.options">
          <td>{{ option.size }}</td>
          <td>{{ option.price }}</td>
          <td>
            <button class="btn btn-sm btn-outline-sucess"
                    type="button"
                    @click="addToBasket(item, option)">+
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="col-sm-12 col-md-6">
      <div v-if="basket.length > 0">
        <table class="table">
          <thead class="thead-default">
          <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody v-for="item in basket">
          <tr>
            <td>
              <button class="btn btn-sm"
                      type="button"
                      @click="increaseQuantity(item)">-
              </button>
              <span>{{ item.quantity }}</span>
              <button class="btn btn-sm"
                      type="button"
                      @click="decreaseQuantity(item)">+
              </button>
            </td>
            <td>{{ item.name }} {{item.size}}</td>
            <td>{{ item.price * item.quantity}}</td>
          </tr>
          </tbody>
        </table>
        <p>Order total: </p>
        <button class="btn btn-success btn-block" @click="addNewOrder"> Place Order</button>
      </div>
      <div v-else>
        {{ basketText }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        basket: [],
        basketText: 'your basket is empty',
      }
    },
    computed: {
      ...mapGetters([
        'getMenuItems'
      ])
    },
    methods: {
      addToBasket(item, option) {
        this.basket.push({
          name: item.name,
          price: item.price,
          size: option.size,
          quantity: 1,
        })
      },
      removeFromBasket(item) {
        this.basket.splice(this.basket.indexOf(item), 1)
      },
      decreaseQuantity(item) {
        ++item.quantity
      },
      increaseQuantity(item) {
        --item.quantity
        if (item.quantity == 0)
          this.removeFromBasket(item)
      },
      addNewOrder() {
        this.$store.commit('addOrder', this.basket)
        this.basket = []
        this.basketText = 'Thank you, your order has been placed! :)'
      }
    }
  }
</script>
