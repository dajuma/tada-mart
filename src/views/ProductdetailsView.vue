<script>
import { mapActions } from 'vuex';
import { RouterLink } from 'vue-router';

export default {
  name: "ProductdetailsView",
  components: {
    RouterLink,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      allProducts: [],
    };
  },
  created() {
    this.loadProduct();
  },

  methods: {
    ...mapActions(['addToCart']),
    handleAddToCart() {
      this.addToCart(this.product);
      console.log(`${this.product.name} added to cart`);
      this.$router.push("/cart");
    },
    loadProduct() {
      const productId = this.id;
      this.product = this.allProducts.find((prod) => prod.id === productId);

      if (!this.product) {
        alert("Product not found!");
        this.$router.push("/");
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="product-details" v-if="product">
      <ProductDetails :product="someProduct" />
      <img class="product-image" :src="product.image" :alt="product.name" />
      <h1>{{ product.name }}</h1>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <p class="product-description">{{ product.description }}</p>
      <button @click="handleAddToCart">Add to Cart</button>
      <RouterLink to="/">Back to Products</RouterLink>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
</template>

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

