import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createStore } from 'vuex'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

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
  },
  actions: {
    addToCart({ commit }, product) {
  commit('ADD_TO_CART'), product;
},
 },
  getters: {
    cartItems(state) {
      return state.cart;
    },
  },
});

export default store;
