import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // Carrega somente quando o component ou view for acessada
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/produtos/:brand',
    name: 'Products',
    // Carrega somente quando o component ou view for acessada
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  }
]
// mode: 'history' =  Remove tralha(#) da url
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
