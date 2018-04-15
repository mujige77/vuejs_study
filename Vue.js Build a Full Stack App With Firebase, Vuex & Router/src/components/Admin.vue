<template>
<div>
    <div class="row">
    <div class="col-sm-12 col-md-6">
        <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-6">
        <h3>Menu:</h3>
        <table class="table table-sm">
            <thead class="thead-default">
                <tr>
                    <th>Item</th>
                    <th>Remove from menu</th>
                </tr>
            </thead>
            <tbody>
                <div class="order-number">
                    <strong><em>Order Number: 1</em></strong>
                    <button class="btn btn-outline-danger btn-sm">X</button>
                </div>
                <tr>
                    <td>Margherita</td>
                    <td>91</td>
                    <td>91</td>
                    <td>91</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
  <div class="row">
        <div class="col-sm-12">
            <h3>Current order</h3>
            <table class="table table-sm">
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
                        <strong><em>Order Number: 1</em></strong>
                        <button class="btn btn-outline-danger btn-sm">X</button>
                    </div>
                    <tr>
                        <td>Margherita</td>
                        <td>91</td>
                        <td>91</td>
                        <td>91</td>
                    </tr>
                </tbody>
        </table>
        </div>
    </div>  
</div>
</template>

<script>
import NewPizza from './NewPizza'
export default {
  components: {
      appNewPizza: NewPizza
  }
}
</script>

