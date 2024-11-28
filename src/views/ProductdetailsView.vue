<script>
import { RouterLink } from "vue-router";

export default {
  name: "ProductdetailsView",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      product: null,
      allProducts: [
        {
          id: 1,
          name: "Brake Pads",
          price: 29.99,
          image: "/images/brake-pads.jpg",
          description: "High-performance brake pads for smooth braking.",
        },
        {
          id: 2,
          name: "Car Battery",
          price: 99.99,
          image: "/images/car-battery.png",
          description: "Reliable and durable car battery with long life.",
        },
        // Add more products as needed
      ],
    };
  },
  created() {
    this.loadProduct();
  },
  methods: {
    loadProduct() {
      const productId = this.id;
      this.product = this.allProducts.find((prod) => prod.id === productId);

      if (!this.product) {
        alert("Product not found!");
        this.$router.push("/");
      }
    },
    addToCart(product) {
      console.log(`${product.name} added to cart`);
    },
  },
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div>
    <div class="product-details" v-if="product">
      <img class="product-image" :src="product.image" :alt="product.name" />
      <h1>{{ product.name }}</h1>
      <p class="product-price">${{ product.price.toFixed(2) }}</p>
      <p class="product-description">{{ product.description }}</p>
      <button v-on:click="addToCart(product)">Add to Cart</button>
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
  max-width: 100%;
  height: auto;
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
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
}

button:hover {
  background-color: #005fa3;
}

a {margin-top: 1rem;
  display: inline-block;
  color: #0077cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

