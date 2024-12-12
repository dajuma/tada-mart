<script>
import { ref } from "vue";
import Product from "@/components/Product.vue";
import CategoryBox from "@/components/Category/CategoryBox.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: { CategoryBox, Product },
  setup() {
    const categories = ref([]);

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
    ...mapGetters('products', ['allProducts', 'isLoading']),
  },
  methods: {
    ...mapActions('products',['fetchProducts']),
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
  display: flex;
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
