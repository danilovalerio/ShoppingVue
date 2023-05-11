import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'
import ProductItem from '../views/ProductItem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/produto',
    name: 'ProductItem',
    component: ProductItem
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
