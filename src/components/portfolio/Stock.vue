<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header bg-info">
        {{ stock.name }}
        <small>{Price: {{ stock.price }} | Quantity: {{ stock.quantity }}}</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="text"
                 class="form-control"
                 placeholder="Quantity"
                 v-model="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0 || !parseInt(quantity)">
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

	import {mapActions} from 'vuex'

	export default {
		props: ['stock'],
		data() {
			return {
				quantity: Number(0)
			}
		},
		methods: {
			...mapActions({
                placeSellOrder: 'sellStock'
            }),
			// buyStock() {
			// 	const order = {
			// 		stockId: this.stock.id,
			// 		stockPrice: this.stock.price,
			// 		quantity: this.quantity
			// 	}
			// 	this.$store.dispatch('buyStock', order)
			// 	this.quantity = 0
			// },
			sellStock() {
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				}
				this.placeSellOrder(order)
                this.quantity = 0;
			}
		}
	}
</script>
