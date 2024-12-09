<script>
export default {
  name: "HeaderSect",
  data() {
    return {
      searchQuery: "",
      cartItemCount: 3,
      products: [
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
        {
          id: 3,
          name: "Oil Filter",
          price: 19.99,
          image: "/images/oil-filter.jpg",
          description: "durable",
        },
        {
          id: 4,
          name: "Spark Plug",
          price: 14.99,
          image: "/images/spark-plug.jpg",
          description: "Affordable",
        },
        {
          id: 5,
          name: "Benz wheel rim",
          price: 300.99,
          image: "/images/Benz-wheel-rim.jpg",
          description: "What your brand needs",
        },
        {
          id: 6,
          name: "Bmw steering wheel",
          price: 50.99,
          image: "/images/bmw-steering-wheel.jpg",
          description: "Flexible",
        },
        {
          id: 7,
          name: "Car tires",
          price: 100.99,
          image: "/images/tires.jpg",
          description: "What drives you on?"
        },
        {
          id: 8,
          name: "Vintage steering wheel",
          price: 300.99,
          image: "/images/car-Mustang-Vintage.jpg",
          description: "Classy",
        },
        {
          id: 9,
          name: "Tyres",
          price: 300.99,
          image: "/images/car-tyres-63928.jpg",
          description: "flexibility counts",
        },

      ],
      filteredProducts: [],
    };
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

    <div class="wrapper">
      <TADAMART msg="Your one-stop motor spare shop" />

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
        <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
        </RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        </div>
        <RouterLink to="/checkout">Checkout</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/order-tracking">Order Tracking</RouterLink>
       </nav>


      </div>
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
.wrapper {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 15vh;
  top: 0px;
  left: -33px;
}
nav {
  position: absolute;
  left: 700px;
  display: flex;
  gap: 1rem;
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
  right: 50rem;
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
  gap: 0;
  top: 0;
}
.cart-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
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
