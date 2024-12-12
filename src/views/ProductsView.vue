<template>
  <div class="products-view">
    <h2>Our Products</h2>
    <div class="products-grid">
      <Product
        v-for="product in allProducts"
        :key="product.id"
        :product="product">
        <RouterLink :to="`/product/${product.id}`">View Details</RouterLink>
      </Product>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import { mapGetters, mapActions } from "vuex";

 export default {
  name: "ProductsView",
  components: {
    Product,
  },
  computed: {
    ...mapGetters('products', ['allProducts', 'isLoading']),
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    loadProducts(){
      this.fetchProducts();
    }
  },
  created(){
    if (!this.allProducts.length){
      this.loadProducts();
    }
  },

};
</script>

<style scoped>
.products-view {
  padding: 2rem;
  min-height: 100vh;
  min-width: 100vw;
}

.products-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
}
a {
  color: darkred;
  font-weight: bold;
}
</style>
