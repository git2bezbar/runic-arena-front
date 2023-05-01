import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/cards'
    },
    {
      path: '/cards',
      name: 'cards',
      component: HomeView
    },
    {
      path: '/abilities',
      name: 'abilities',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skills',
      component: HomeView
    },
    {
      path: '/classes',
      name: 'classes',
      component: HomeView
    },
    {
      path: '/types',
      name: 'types',
      component: HomeView
    },
  ]
})

export default router
