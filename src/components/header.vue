<script>
export default {
    name: "header",
    data() {
      return {
        searchProduct: "",
      }
    }
};
</script>
<template>
    <header id="app">
    <img alt="tadamart logo" class="logo" src="@/assets/tadamart-logo.png" width="80" height="80" />

    <div class="wrapper">
      <TADAMART msg="Your one stop motor spare shop" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cartegory">Cartegory</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <RouterLink to="/checkout">checkout</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/order-tracking">Order tracking</RouterLink>
      </nav>
      <div class="search-bar">
        <input type="text" placeholder="Search"
         v-model="SearchProduct" @input="handleSearch"/>
         <button v-on:click="performSearch">Search</button>
      </div>
    </div>
  </header>
</template>
<style>
#app {
    position: relative;
    color: white;
}
.wrapper {
    position: fixed;
    width: 100vw;
    height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
}
nav {
    display: flex;
    position: absolute;
    top: 60px;
    left: 300px;
    font-size: 100%;
    padding-right: 50px;
    gap: 1rem;
    color: brown;
}
nav a {
    color: darkred;
    text-decoration: none;
}

nav a:hover {
    color: rgb(236, 156, 156);
    background: none;
}
.logo {
    position: absolute;
    left: -650px;
    display: flex;
    top: 0px;
}
</style>
