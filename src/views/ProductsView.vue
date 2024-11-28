<template>
  <div class="products-view">
    <h2>Our Products</h2>
    <div class="products-grid">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";

 export default {
  name: "ProductsView",
  components: {
    Product,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Brake Pads",
          price: 29.99,
          image: "/assets/products/brake-pads.jpg",
        },
        {
          id: 2,
          name: "Car Battery",
          price: 99.99,
          image: "/assets/products/car-battery.jpg",
        },
        {
          id: 3,
          name: "Oil Filter",
          price: 19.99,
          image: "/assets/products/oil-filter.jpg",
        },
        {
          id: 4,
          name: "Spark Plug",
          price: 14.99,
          image: "/assets/products/spark-plug.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.products-view {
  padding: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
