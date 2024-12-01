import { createStore } from 'vuex'

const store = createStore ({
  state() {
    return {
      cart: [],
      products: [
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
          description: "durable",
        },
        {
          id: 4,
          name: "Spark Plug",
          price: 14.99,
          image: "/images/spark-plug.jpg",
          description: "Affordable",
        },
        {
          id: 5,
          name: "Benz wheel rim",
          price: 300.99,
          image: "/images/Benz-wheel-rim.jpg",
          description: "What your brand needs",
        },
        {
          id: 6,
          name: "Bmw steering wheel",
          price: 50.99,
          image: "/images/bmw-steering-wheel.jpg",
          description: "Flexible",
        },
        {
          id: 7,
          name: "Car tires",
          price: 100.99,
          image: "/images/tires.jpg",
          description: "What drives you on?"
        },
        {
          id: 8,
          name: "Vintage steering wheel",
          price: 300.99,
          image: "/images/car-Mustang-Vintage.jpg",
          description: "Classy",
        },
        {
          id: 9,
          name: "Tyres",
          price: 300.99,
          image: "/images/car-tyres-63928.jpg",
          description: "flexibility counts",
        },
      ],

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
    availableProducts(state) {
      return state.products;
    },
  },
});

export default store;
