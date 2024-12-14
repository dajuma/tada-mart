<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "CartView",
  components: {

  },
  computed: {
    ...mapGetters('products', ['cartItems', 'cartTotal']),
  },
  methods: {
    ...mapActions('products',['removeFromCart']),
    handleRemoveFromCart(product) {
      this.removeFromCart(product);
    },
  },
};
</script>

<template>
  <div class="cart-container">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length > 0">
      <ul class="cart-list">
        <li v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.imageURL" :alt="item.name" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p>${{ item.price.toFixed(2) }}</p>
          </div>
          <button @click="handleRemoveFromCart(item)" class="remove-button">
            Remove
          </button>
        </li>
      </ul>
      <div class="cart-summary">
        <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
        <button class="checkout-button">Checkout</button>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty!</p>
    </div>
    <RouterLink to="/products">Go back to Products</RouterLink>
  </div>
</template>

<style scoped>
.cart-container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 1rem;
}

.cart-item-details {
  flex: 1;
  text-align: left;
}

.remove-button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  background-color: #d9534f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c9302c;
}

.cart-summary {
  margin-top: 2rem;
}

.checkout-button {
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #5cb85c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #4cae4c;
}

a {
  color: #0077cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
