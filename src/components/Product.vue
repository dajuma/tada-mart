<script>
export default {
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
      required: true,
      validator(value) {
        return (
          typeof value.name === 'string' &&
          typeof value.image === 'string' &&
          typeof value.price === 'number'
        );
      },
    },
  },
  methods: {
    addToCart(product) {
      console.log(`${product.name} added to cart`);

    },
  },
};
</script>

<template>
  <div class="product">
    <img :src="product.image || 'default-image-path.jpg'" :alt="product.name" class="product-image" />
    <h3 class="product-name">{{ product.name }}</h3>
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
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-name {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.product-price {
  color: green;
  font-weight: bold;
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
