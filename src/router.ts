import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/home/Index.vue'),
    meta: {
      title: 'Uncode',
    },
  },
  {
    path: '/about/',
    component: About,
    meta: {
      title: 'Uncode',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
