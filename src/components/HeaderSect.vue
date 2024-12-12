<script>
import { mapGetters } from 'vuex';

export default {
  name: "HeaderSect",
  data() {
    return {
      searchQuery: "",
      products: [],
      filteredProducts: [],
    };
  },
  computed: {
    ...mapGetters('products', ['cartItems']),
    cartItemsCount(){
      return this.cartItems.length;
    }
  },
  methods: {
    handleSearch() {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      console.log("Search query:", this.searchQuery);
    },
    performSearch() {
      if (this.searchQuery.trim()) {
        console.log("Performing search for:", this.searchQuery);
      } else {
        alert("Please enter a search term.");
      }
    },

    focusSearchBar() {
      this.$refs.searchInput.focus();
      this.filteredProducts = [];
    },
  },
};
</script>
<template>
  <header>
    <img
      alt="tadamart logo"
      class="logo"
      src="@/assets/tadamart-logo.png"
      width="80"
      height="80"
    />

      <div class="search-bar">
       <input
       type="text"
        placeholder="Search for products, brands and more..."
        v-model="searchQuery"
        @input="handleSearch"
        class="search-input"
        ref="searchInput"
        />
      <button class="search-button" @click="performSearch">
       <img src="/images/search.png" alt="Search" class="search-icon" />
      </button>
      </div>

      <div v-if="filteredProducts.length" class="search-results">
        <h2>Search Results:</h2>
        <ul>
          <li v-for="product in filteredProducts" :key="product.id" class="product-item">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <p><strong>Price:</strong> ${{ product.price }}</p>
            </div>
          </li>
        </ul>
        <button class="back-to-search" @click="focusSearchBar">Back to Search</button>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cartegory">Category</RouterLink>
        <div class="cart-container">
        <RouterLink to="/cart" class="cart-link">
        <img src="/images/shopping-cart.png" alt="Cart" class="cart-icon" />
        <span v-if="cartItemsCount > 0" class="cart-count">{{ cartItemsCount }}</span>
        </RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        </div>
        <RouterLink to="/checkout">Checkout</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/order-tracking">Order Tracking</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
       </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
#app {
  position: relative;
  color: white;
  margin: 0;
}
nav {
  position: relative;
  left: 25rem;
  display: flex;
  gap: 0.5rem;
}
nav a {
  color: darkred;
  text-decoration: none;
}
nav a:hover {
  color: rgb(236, 156, 156);
}
.logo {
  display: flex;
  align-items: center;
}

.search-results {
  position: relative;
  display: flex;
  margin-top: 0;
  padding: 0rem;
  background-color: grey;
  border-radius: 4px;
  width: 20rem;
  top: 10rem;
  right: 50rem;
}

.search-results h2 {
  margin-bottom: 0;
}
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0;
  left: 15rem;
}

.search-icon {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

.search-input {
  padding: 0.5rem;
  border-radius: 5%;
}
.search-input:hover {
  background-color: grey;
}

.search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 2%;
}

.search-button:hover {
  background-color: grey;
}
.cart-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.2;
  bottom: 0.56rem;
}
.cart-icon {
  width: 2rem;
  height: 2rem;
}

.cart-count {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  min-width: 1rem;
  text-align: center;
  line-height: 1rem;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}


</style>
