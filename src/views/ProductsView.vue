<template>
  <div class="products-view">
    <h2>Our Products</h2>
    <div class="products-grid">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product">
        <RouterLink :to="`/product/${product.id}`">View Details</RouterLink>
      </Product>

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
          image: "/public/images/brake-pads.jpg",
        },
        {
          id: 2,
          name: "Car Battery",
          price: 99.99,
          image: "/public/images/car-battery.png",
        },
        {
          id: 3,
          name: "Oil Filter",
          price: 19.99,
          image: "/public/images/oil-filter.jpg",
        },
        {
          id: 4,
          name: "Spark Plug",
          price: 14.99,
          image: "/public/images/spark-plug.jpg",
        },
        {
          id: 5,
          name: "Benz wheel rim",
          price: 300.99,
          image: "/public/images/Benz-wheel-rim.jpg",
        },
        {
          id: 6,
          name: "Bmw steering wheel",
          price: 50.99,
          image: "/public/images/bmw-steering-wheel.jpg",
        },
        {
          id: 7,
          name: "Car tires",
          price: 100.99,
          image: "/public/images/tires.jpg",
        },
        {
          id: 8,
          name: "Vintage steering wheel",
          price: 300.99,
          image: "/public/images/car-Mustang-Vintage.jpg",
        },
        {
          id: 9,
          name: "Tyres",
          price: 300.99,
          image: "/public/images/car-tyres-63928.jpg",
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
</style>
