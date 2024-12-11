import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
      products: [],
      loading: false,
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, product) {
      state.cart = state.cart.filter((item) => item !== product)
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading
    },
  },
  actions: {
    addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
},
    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product)
    },
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true);
      console.log(`Fetching products from: ${import.meta.env.VITE_API_URL}`)
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        const data = response.data.data;
        const products = data.map(product => {
          return {
            ...product,
            'imageURL' : `${import.meta.env.VITE_API_URL}/storage/` + product.image
          }
        })
        commit('SET_PRODUCTS', products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price, 0)
    },
    allProducts(state){
      return state.products
    },
    isLoading(state){
      return state.loading
    }
  },
}
