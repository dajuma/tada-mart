import { createStore } from 'vuex'

const store = createStore ({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, product) {
      state.cart = state.cart.filter(item => item !== product);
    }
  },
  actions: {
    addToCart({ commit }, product) {
    commit('ADD_TO_CART', product);
},
    removeFromCart({ commit }, product) {
      commit('REMOVE_FROM_CART', product);
    }
 },
  getters: {
    cartItems(state) {
      return state.cart;
    },
  },
});

export default store;
