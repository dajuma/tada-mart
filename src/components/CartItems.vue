<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "CartItems",
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
  },
  methods: {
    ...mapActions(['removeFromCart']),
    handleRemoveFromCart(product) {
      this.removeFromCart(product);
    },
  },
};
</script>

<template>
  <div>
    <ul class="cart-list">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-details">
          <h3>{{ item.name }}</h3>
          <p>${{ item.price.toFixed(2) }}</p>
        </div>
        <button @click="handleRemoveFromCart" class="remove-button">
          Remove
        </button>
      </li>
    </ul>
    <div class="cart-summary">
      <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
      <button class="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<style scoped>
.cart-list {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.cart-item-image {
  max-width: 50px;
  margin-right: 1rem;
}

.cart-item-details {
  flex-grow: 1;
}

.remove-button {
  padding: 0.5rem;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #cc0000;
}

.cart-summary {
  margin-top: 1rem;
  text-align: right;
}

.checkout-button {
  padding: 0.5rem 1rem;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #005fa3;
}
</style>
