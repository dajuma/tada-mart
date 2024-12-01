import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductdetailsView from '../views/ProductdetailsView.vue'
import CartView from '@/views/CartView.vue'
import CartItems from '@/components/CartItems.vue'

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
      path: '/cartitems',
      name: 'CartItems',
      component: CartItems,
    }

  ],
})

export default router
