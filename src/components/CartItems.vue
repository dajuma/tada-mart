<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "CartItems",
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
  },
  methods: {
    ...mapActions(['removeFromCart']),
    handleRemoveFromCart(item) {
      this.removeFromCart(item);
    },
  },
};
</script>

<template>
  <div class="cart-items">
    <h2>Your Cart Items</h2>
    <table v-if="cartItems.length > 0" class="cart-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Item name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td><img :src="item.image" :alt="item.name" class="cart-item-image" /> </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price.toFixed(2) }}</td>
          <td>
          <button @click="handleRemoveFromCart(item)" class="remove-button" />
            Remove
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <p>Your cart is empty!</p>
    </div>
    <div v-if="cartItems.length" > 0" class="cart-summary">
    <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
    <button class="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<style scoped>
.cart-items {
  margin: 2rem;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.cart-table th,
.cart-table td {
  padding: 1rem;
  text-align: center;
  border: 1px solid #ddd;
}

.cart-table img {
  max-width: 50px;
  height: auto;
}

.cart-summary {
  margin-top: 1rem;
  text-align: right;
}

.remove-button {
  background-color: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.remove-button:hover {
  background-color: #c0392b;
}

.checkout-button {
  background-color: #27ae60;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.checkout-button:hover {
  background-color: #1e8449;
}
</style>
