import { createRouter, createWebHistory } from 'vue-router'
import SessionView from '../views/SessionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/session',
      name: 'session',
      component: SessionView
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/mainBoardLayout.vue')
    }
  ]
})

export default router
