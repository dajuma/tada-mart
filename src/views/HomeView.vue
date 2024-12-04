<script>
import Product from "@/components/Product.vue";
import CategoryBox from "@/components/Category/CategoryBox.vue";

export default {
  name: "Home",
  components: {CategoryBox, Product},
  props: {
  categories: {
    type: Array,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
},
data() {
    return {
      categorySize: 0,
      productSize: 0,
    };
  },
  mounted() {
  if (this.categories) {
    this.categorySize = Math.min(6, this.categories.length);
  }
  if (this.products) {
    this.productSize = Math.min(8, this.products.length);
  }
},
};
</script>

<template>
  <div id="home">
    <div id="background-div" class="hero-background"></div>
    <!-- Display categories -->
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2 class="part-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in categorySize" :key="index">
          <CategoryBox :category="categories[index - 1]" />
        </div>
      </div>
    </div>

    <hr />
    <!-- Display top products -->
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2 class="part-3">Top Products</h2>
        </div>
      </div>

      <div class="row">
        <div v-for="index in productSize" :key="index">
          <Product :product="products[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  .hero-background{
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    background-image: url('/assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;

  }
</style>
