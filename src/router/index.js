import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/products/ProductsView.vue'
import ProductdetailsView from '../views/products/ProductdetailsView.vue'
import CartView from '@/views/CartView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductdetailsView,
      props: (route) => ({ id: parseInt(route.params.id) }),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
  { path: '/register',
    name: 'Register',
    component: RegisterView
  },
  ],
})

export default router
