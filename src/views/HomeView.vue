<script>
import { ref } from "vue";
import Product from "@/components/Product.vue";
import CategoryBox from "@/components/Category/CategoryBox.vue";

export default {
  name: "HomeView",
  components: { CategoryBox, Product },
  setup() {
    const categories = ref([
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
        description: "Durable and efficient.",
      },
      {
        id: 4,
        name: "Spark Plug",
        price: 14.99,
        image: "/images/spark-plug.jpg",
        description: "Affordable and high-performance.",
      },
      {
        id: 5,
        name: "Benz Wheel Rim",
        price: 300.99,
        image: "/images/Benz-wheel-rim.jpg",
        description: "Stylish and reliable.",
      },
      {
        id: 6,
        name: "BMW Steering Wheel",
        price: 50.99,
        image: "/images/bmw-steering-wheel.jpg",
        description: "Flexible and durable.",
      },
      {
        id: 7,
        name: "Car Tires",
        price: 100.99,
        image: "/images/tires.jpg",
        description: "High-quality tires for smooth driving.",
      },
      {
        id: 8,
        name: "Vintage Steering Wheel",
        price: 300.99,
        image: "/images/car-Mustang-Vintage.jpg",
        description: "Classy and elegant.",
      },
      {
        id: 9,
        name: "Tyres",
        price: 300.99,
        image: "/images/car-tyres-63928.jpg",
        description: "Flexible and reliable.",
      },
    ]);

    const products = ref(categories.value); // Reuse categories for demonstration
    const categorySize = ref(6);
    const productSize = ref(8);

    const handleViewCategory = (category) => {
      console.log("Viewing category:", category);
    };

    return {
      categories,
      products,
      categorySize,
      productSize,
      handleViewCategory,
    };
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
        <CategoryBox
          v-for="(category) in categories.slice(0, categorySize)"
          :key="category.id"
          :category="category"
          @view-category="handleViewCategory"
        />

      </div>
    </div>

    <hr />

    <!-- Display top products -->
    <div class="container2">
      <div class="row">
        <div class="text-center">
          <h2 class="part-3">Top Products</h2>
        </div>
      </div>
      <div class="row">
        <Product
          v-for="(product) in products.slice(0, productSize)"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  background-image: url("/assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  width: 100vw;
}

.container {
  margin: 2rem auto;
}
.container2 {
  margin: 2rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  color: black;
}
.text-center {
  text-align: center;
  width: 100%;
  color: brown;
  margin-bottom: 1rem;
}
</style>
