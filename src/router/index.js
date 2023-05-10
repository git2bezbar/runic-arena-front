import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import CardView from '../views/CardView.vue'
import CardUpsert from '../views/CardUpsert.vue'
import AbilitiesView from '../views/AbilitiesView.vue'
import AbilityView from '../views/AbilityView.vue'
import AbilityUpsert from '../views/AbilityUpsert.vue'
import AbilityAdd from '../views/AbilityAdd.vue'
import SkillsView from '../views/SkillsView.vue'
import SkillView from '../views/SkillView.vue'
import SkillUpsert from '../views/SkillUpsert.vue'
import SkillAdd from '../views/SkillAdd.vue'
import ClassesView from '../views/ClassesView.vue'
import ClassView from '../views/ClassView.vue'
import ClassAdd from '../views/ClassAdd.vue'
import ClassUpsert from '../views/ClassUpsert.vue'
import TypesView from '../views/TypesView.vue'
import TypeView from '../views/TypeView.vue'
import TypeUpsert from '../views/TypeUpsert.vue'
import TypeAdd from '../views/TypeAdd.vue'

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
      path: '/abilities/add',
      name: 'ability-add',
      component: AbilityAdd
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
      path: '/skills/add',
      name: 'skill-add',
      component: SkillAdd
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
      path: '/classes/add',
      name: 'class-add',
      component: ClassAdd
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
    {
      path: '/types/add',
      name: 'type-add',
      component: TypeAdd
    },
  ]
})

export default router
