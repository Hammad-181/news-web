import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  { 
    path: '/news/:id',
    name: 'SportsNews',
    //component: () => import('../components/SportsNews.vue')
    component: () => import(/* webpackChunkName: "Sportsnews" */ '../components/SportsNews.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
