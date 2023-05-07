import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import CardView from '../views/CardView.vue'
import CardUpsert from '../views/CardUpsert.vue'
import AbilitiesView from '../views/AbilitiesView.vue'
import AbilityView from '../views/AbilityView.vue'
import AbilityUpsert from '../views/AbilityUpsert.vue'

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
      component: CardsView
    },
    {
      path: '/cards/:id',
      name: 'card',
      component: CardView
    },
    {
      path: '/cards/:id/edit',
      name: 'card-edit',
      component: CardUpsert
    },
    {
      path: '/abilities',
      name: 'abilities',
      component: AbilitiesView
    },
    {
      path: '/abilities/:id',
      name: 'ability',
      component: AbilityView
    },
    {
      path: '/abilities/:id/edit',
      name: 'ability',
      component: AbilityUpsert
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
