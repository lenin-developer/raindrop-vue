import { createRouter, createWebHistory } from 'vue-router'
import SessionView from '@/ui/views/session/SessionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/session',
      name: 'session',
      component: () => import('@/ui/views/session/SessionView.vue') 
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/ui/views/home/homeView.vue')
    }
  ]
})

export default router
