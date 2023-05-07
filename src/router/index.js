import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import CardView from '../views/CardView.vue'
import CardUpsert from '../views/CardUpsert.vue'
import AbilitiesView from '../views/AbilitiesView.vue'
import AbilityView from '../views/AbilityView.vue'
import AbilityUpsert from '../views/AbilityUpsert.vue'
import SkillsView from '../views/SkillsView.vue'
import SkillView from '../views/SkillView.vue'
import SkillUpsert from '../views/SkillUpsert.vue'
import ClassesView from '../views/ClassesView.vue'
import ClassView from '../views/ClassView.vue'
import ClassUpsert from '../views/ClassUpsert.vue'
import TypesView from '../views/TypesView.vue'
import TypeView from '../views/TypeView.vue'
import TypeUpsert from '../views/TypeUpsert.vue'

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
      name: 'ability-edit',
      component: AbilityUpsert
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/skills/:id',
      name: 'skill',
      component: SkillView
    },
    {
      path: '/skills/:id/edit',
      name: 'skill-edit',
      component: SkillUpsert
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassesView
    },
    {
      path: '/classes/:id',
      name: 'class',
      component: ClassView
    },
    {
      path: '/classes/:id/edit',
      name: 'class-edit',
      component: ClassUpsert
    },
    {
      path: '/types',
      name: 'types',
      component: TypesView
    },
    {
      path: '/types/:id',
      name: 'type',
      component: TypeView
    },
    {
      path: '/types/:id/edit',
      name: 'type-edit',
      component: TypeUpsert
    },
  ]
})

export default router
