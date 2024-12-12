import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
      products: [],
      currentProduct: undefined,
      loading: false,
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, product) {
      state.cart = state.cart.filter((item) => item !== product)
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.currentProduct = product
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product)
    },

    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      console.log(`Fetching products from: ${import.meta.env.VITE_API_URL}`)
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
        const data = response.data?.data || []
        if (!Array.isArray(data)) {
          console.error('Unexpected API response structure:', data)
          commit('SET_PRODUCTS', [])
          return
        }
        const products = data.map((product) => {
          return {
            ...product,
            imageURL: `${import.meta.env.VITE_API_URL}/storage/` + product.image,
          }
        })
        commit('SET_PRODUCTS', products)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    async fetchProduct({ commit }, productID) {
      try {
        commit('SET_LOADING', true)
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${productID}`,
        )
        const product = response.data?.data || []
        product['imageURL'] = `${import.meta.env.VITE_API_URL}/storage/` + product.image
        commit('SET_PRODUCT', product)
      } catch (error) {
        console.error('Failed to fetch product:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },
  },
  getters: {
    cartItems(state) {
      return state.cart
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price, 0)
    },
    allProducts(state) {
      return state.products
    },
    isLoading(state) {
      return state.loading
    },
    currentProduct(state) {
      return state.currentProduct
    },
  },
}
