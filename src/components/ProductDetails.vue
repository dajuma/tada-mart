<template>
    <div class="product-details" v-if="product">
      <img class="product-image" :src="product.imageURL" :alt="product.name" />
      <h1>{{ product.name }}</h1>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <p class="product-description">{{ product.description }}</p>
      <button @click="handleAddToCart">Add to Cart</button>
      <RouterLink to="/">Back to Products</RouterLink>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

import { mapActions} from 'vuex';

export default {
  components: {
    RouterLink
  },
  props: {
    product : {}
  },
  methods: {
    ...mapActions('products', ['addToCart']),
    handleAddToCart() {
      this.addToCart(this.product);
      console.log(`${this.product.name} added to cart`);
      this.$router.push("/cart");
    },
  },
}
</script>
<style scoped>
.product-details {
  padding: 2rem;
  text-align: center;
}

.product-image {
  max-width: 30%;
  height: 30%;
  margin-bottom: 1rem;
}

.product-price {
  color: green;
  font-size: 1.5rem;
  font-weight: bold;
}

.product-description {
  margin: 1rem 0;
  font-size: 1.2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #0077cc;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #2b2d2e;
}

a {margin-top: 1rem;
  display: inline-block;
  color: #0077cc;
  text-decoration: none;
  border-radius: 10px 10px 10px 10px;
}

a:hover {
  background-color: #2b2d2e;
}
</style>
