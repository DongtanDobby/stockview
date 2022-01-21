import { createRouter, createWebHistory } from 'vue-router'
import StockList from '../views/StockList.vue'
import StockLayout from '../views/stock/Layout.vue'
import StockDetail from '../views/stock/Detail.vue'
import StockInterest from '../views/stock/Interest.vue'
import StockNews from '../views/stock/News.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'StockList',
    component: StockList,
    //페이지처리. 만약 페이지에 해당하는 숫자 입력이 없으면 첫 페이지로
    props: route => ({ pageNo: parseInt(route.query.pageNo) || 1 , perPage: parseInt(route.query.perPage) || 10})
  },
  {
    path: '/stock/:idxNm',
    name: 'StockLayout',
    props: true,
    component: StockLayout,
    children: [
      {
        path: '',
        name: 'StockDetail',
        component: StockDetail
      },
      {
        path: 'interest',
        name: 'StockInterest',
        component: StockInterest
      },  
      {
        path: 'news',
        name: 'StockNews',
        component: StockNews
      },  
    ]
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
