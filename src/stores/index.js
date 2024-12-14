import { createStore } from 'vuex';
import auth from './modules/auth';
import products from './modules/products';

const store = createStore ({
  state() {
    return {
      loading: false,
    }
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading
    },
  },
  actions: {
    setLoading({commit}, isLoading){
      commit('SET_LOADING', isLoading);
    },
  },
  getters: {
    isLoading(state) {
      return state.loading
    },
  },

  modules: {
    auth,
    products
  },
});

export default store;
