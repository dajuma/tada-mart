<script>
import { ref } from "vue";
import Product from "@/components/Product.vue";
import CategoryBox from "@/components/Category/CategoryBox.vue";

import { mapGetters, mapActions } from "vuex";

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

    const products = ref(categories.value);
    const categorySize = ref(9);
    const productSize = ref(9);

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
  computed: {
    ...mapGetters(['allProducts', 'isLoading']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
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
          class="categories"
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
          v-for="(product) in allProducts"
          :key="product.id"
          :product="product"
          class="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-background {
  position: absolute;
  z-index: -1;
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
  position: relative;
  margin: 26rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  height: auto;
  padding-top: 1rem;
  max-width: 800px;
  width: 90%;
}

.container2 {
  position: relative;
  margin: -7rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-around;
  height: auto;
  padding-top: 1rem;
  bottom: 10rem;
  max-width: 800px;
  width: 90%;
}

hr {
  position: relative;
  bottom: 20rem;
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
.product {
  flex: 1 1 calc(25% - 1rem);
  max-width: calc(25% - 1rem);
  box-sizing: border-box;
  padding: 1rem;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}


.product:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.categories {
  flex: 1 1 calc(25% - 1rem);
  max-width: calc(25% - 1rem);
  box-sizing: border-box;
  padding: 1rem;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}


.categories:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


@media (max-width: 768px) {
  .product {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
  }
}

@media (max-width: 480px) {
  .product {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
@media (max-width: 480px) {
.categories {
    flex: 1 1 calc(50% - 1rem);
    max-width: calc(50% - 1rem);
}
}
@media (max-width: 480px) {
  .categories {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

</style>
