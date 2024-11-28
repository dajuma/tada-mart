<script>
export default {
  name: "HeaderSect",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      console.log("Search query:", this.searchQuery);
    },
    performSearch() {
      if (this.searchQuery.trim()) {
        console.log("Performing search for:", this.searchQuery);
      } else {
        alert("Please enter a search term.");
      }
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

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cartegory">Category</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <RouterLink to="/checkout">Checkout</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/order-tracking">Order Tracking</RouterLink>
      </nav>

      <div class="search-bar">
        <input
          type="text"
          placeholder="Search..."
          v-model="searchQuery"
          @input="handleSearch"
        />
        <button v-on:click="performSearch">Search</button>
      </div>
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
.search-bar {
  position: absolute;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  left: 300px;
}
.search-bar input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid darkred;
  border-radius: 5px;
}
.search-bar button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #00aaff;
  color:black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.search-bar button:hover {
  background-color: #0077cc;
}
</style>
