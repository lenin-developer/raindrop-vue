import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from '../views/LoginUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeRaindrop.vue')
    }
  ]
})

export default router
