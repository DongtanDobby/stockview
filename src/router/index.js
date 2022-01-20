import { createRouter, createWebHistory } from 'vue-router'
import StockList from '../views/StockList.vue'
import StockDetail from '../views/StockDetail.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'StockList',
    component: StockList
  },
  {
    path: '/stock/:idxNm',
    name: 'StockDetail',
    props: true,
    component: StockDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
