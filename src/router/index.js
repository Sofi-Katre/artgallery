import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ThePart1 from '@/components/ThePart1.vue'
import ThePart2 from '@/components/ThePart2.vue'
import ThePart4 from '@/components/ThePart4.vue'
import ThePart3 from '@/components/ThePart3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ThePart1',
      name: 'part1',
      component: ThePart1,
    },
    {
      path: '/ThePart2',
      name: 'part2',
      component: ThePart2,
    },
    {
      path: '/ThePart3',
      name: 'part3',
      component: ThePart3,
    },
    {
      path: '/ThePart4',
      name: 'part4',
      component: ThePart4,
    },
  ],
})

export default router
