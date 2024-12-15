import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

window.axios = axios

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    registerUser({ commit }, userData) {
      // wrap in a promise for view to track status
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true, { root: true}); //loading animation

        // before calling register, set CSRF cookie
        axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`).then(() => {
          // Call register...
          return axios.post(`${import.meta.env.VITE_API_URL}/register`, userData).then((resp) => {
            console.log(`response from register `, resp);

            //get user details after registering
            return axios.get(`${import.meta.env.VITE_API_URL}/api/user`).then(resp => {
              console.log('User is : ', resp.data);
              commit('SET_USER', resp.data);
              commit('SET_LOADING', false, { root: true});
              resolve('success');
            });
          });
        }).catch(error => {
          if(error.response){

            // Handle the error in the view
            reject(error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            reject(error.request);
          } else {
          // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            reject(error.message);
          }
          console.log(error.config);
          commit('SET_LOADING', false, { root: true});
        });
      });
    },

    loginUser({ commit }, loginData) {

      //we need to wrap it in a promise for view to detect when action completes
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true, { root: true}); //loading animation

        // before calling login, set CSRF cookie
        axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`).then(() => {

          // Login...
          return axios.post(`${import.meta.env.VITE_API_URL}/login`, loginData).then((resp) => {
            console.log('response from login ', resp);

            //get user details after login in
            return axios.get(`${import.meta.env.VITE_API_URL}/api/user`).then(resp => {
              console.log('User is : ', resp.data);
              commit('SET_USER', resp.data);
              commit('SET_LOADING', false, { root: true});
              resolve('success');
            });

          }).catch(error => {
            if(error.response){

              // Handle the error in the view
              reject(error.response.data);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
              reject(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              reject(error.message);
            }
            console.log(error.config);
            commit('SET_LOADING', false, { root: true});
            });
        });
      });
    },

    logoutUser({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true, { root: true});
        // before calling login, set CSRF cookie
        axios.get(`${import.meta.env.VITE_API_URL}/sanctum/csrf-cookie`).then(() => {
          // Logout the user
          return axios.post(`${import.meta.env.VITE_API_URL}/logout`).then(resp => {
            console.log("logged out ", resp);
            commit('SET_LOADING', false, { root: true});
            commit('SET_USER', null);
            resolve('success');
          });
        }).catch(error => {
          if(error.response){
            // Handle the error in the view
            reject(error.response.data);
          } else{
            reject(error.message);
          }
          commit('SET_LOADING', false, { root: true});
        });
      });
    },

    checkAuthStatus({ commit }) {
      return new Promise((resolve, reject) => {
        // Check if user is authenticated in session, improve to use local storage in future
        commit('SET_LOADING', true, { root: true});
        //get user details after registering
        return axios.get(`${import.meta.env.VITE_API_URL}/api/user`).then(resp => {
          console.log('User is : ', resp.data);
          commit('SET_USER', resp.data);
          commit('SET_LOADING', false, { root: true});
          resolve('success');
        }).catch(error => {
          if(error.response){
            // Handle the error in the view
            reject(error.response?.data?.message);
            if(error.response.status == '401'){
              commit('SET_USER', null);
            }
          } else{
            reject("No Auth: ", error.message);
          }
          commit('SET_LOADING', false, { root: true});
        });
      });
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
  },
}
