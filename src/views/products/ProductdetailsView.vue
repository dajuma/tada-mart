<script>
import ProductDetails from '@/components/ProductDetails.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "ProductdetailsView",
  components: {
    ProductDetails
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  created() {
    if(!this.currentProduct || this.currentProduct.id !== this.id){
      this.loadProduct();
    }
  },

  computed: {
    ...mapGetters('products', ['currentProduct', 'isLoading']),
  },

  methods: {
    ...mapActions('products', ['fetchProduct']),
    handleAddToCart() {
      this.addToCart(this.product);
      console.log(`${this.product.name} added to cart`);
      this.$router.push("/cart");
    },
    loadProduct() {
      this.fetchProduct(this.id);
    },
  },
};
</script>

<template>
  <div>
    <ProductDetails :product="currentProduct" />
  </div>
</template>

<style scoped>

</style>

