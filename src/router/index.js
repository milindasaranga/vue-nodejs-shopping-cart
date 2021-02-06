import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue'
import ProductPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/products',
    name:'Products',
    component:ProductPage
  },
  {
    path:'/products/:id',
    name:'ProductDetail',
    component:ProductDetailPage
  },
  {
    path:'/cart',
    name:'Cart',
    component:CartPage
  },
  {
    path:'/',
    redirect:'/products'
  },
  {
    path:'*',
    component:NotFoundPage
  }
]

const router = new VueRouter({
  routes
})

export default router
