<script>
import { mapActions} from 'vuex'

export default {
  name: "ProductDetails",
  props: {
    product: {
      type: Object,
      required: true,
      validator(value) {
        return (
          typeof value.name === 'string' &&
          typeof value.image === 'string' &&
          typeof value.price === 'number' &&
          typeof value.id === 'string'
        );
      },
    },
  },
  methods: {
    ...mapActions(['addToCart']),
    handleAddToCart() {
      this.addToCart(this.product);
      this.$router.push('/cart');
    },
  },
};
</script>

<template>
  <div class="product">
    <img :src="product.image || '/default-image-path.jpg'" :alt="product.name" class="product-image" />
    <h3 class="product-name">
      <RouterLink :to="'/product/' + product.id">{{ product.name }}</RouterLink>
    </h3>
    <p class="product-price">${{ (product.price || 0).toFixed(2) }}</p>
    <button class="add-to-cart" v-on:click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<style>
.product {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-name {
  display: flex;
  font-size: 1rem;
  margin: 1rem 0;
  align-items: center;
  white-space: nowrap;
}
.product-name a {
  color: darkred;
  font-size: larger;
}

.product-name a:hover {
  color: firebrick;
}

.product-price {
  color: black;
  font-weight: bold;
  margin: 1rem;
}

.add-to-cart {
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #005fa3;
}
</style>
