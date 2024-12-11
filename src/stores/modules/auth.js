export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    registerUser({ commit }, userData) {
      commit('setUser', userData);
      console.log('User registered:', userData);
    },
    loginUser({ commit }, loginData) {
      commit('setUser', loginData);
      console.log('User logged in:', loginData);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
};
