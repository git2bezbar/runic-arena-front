import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '../views/CardsView.vue'
import CardView from '../views/CardView.vue'
import CardUpsert from '../views/CardUpsert.vue'
import CardAdd from '../views/CardAdd.vue'
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
      component: CardsView,
      meta: { title: 'Cartes' },
    },
    {
      path: '/cards/:id',
      name: 'card',
      component: CardView,
      meta: { title: 'Carte' },
    },
    {
      path: '/cards/:id/edit',
      name: 'card-edit',
      component: CardUpsert,
      meta: { title: 'Modification de carte' },
    },
    {
      path: '/cards/add',
      name: 'card-add',
      component: CardAdd,
      meta: { title: 'Ajout de carte' },
    },
    {
      path: '/abilities',
      name: 'abilities',
      component: AbilitiesView,
      meta: { title: 'Capacités' },
    },
    {
      path: '/abilities/:id',
      name: 'ability',
      component: AbilityView,
      meta: { title: 'Capacité' },
    },
    {
      path: '/abilities/:id/edit',
      name: 'ability-edit',
      component: AbilityUpsert,
      meta: { title: 'Modification de capacité' },
    },
    {
      path: '/abilities/add',
      name: 'ability-add',
      component: AbilityAdd,
      meta: { title: 'Ajout de capacité' },
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
      meta: { title: 'Compétences' },
    },
    {
      path: '/skills/:id',
      name: 'skill',
      component: SkillView,
      meta: { title: 'Compétence' },
    },
    {
      path: '/skills/:id/edit',
      name: 'skill-edit',
      component: SkillUpsert,
      meta: { title: 'Modification de compétence' },
    },
    {
      path: '/skills/add',
      name: 'skill-add',
      component: SkillAdd,
      meta: { title: 'Ajout de compétence' },
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassesView,
      meta: { title: 'Classes' },
    },
    {
      path: '/classes/:id',
      name: 'class',
      component: ClassView,
      meta: { title: 'Classe' },
    },
    {
      path: '/classes/:id/edit',
      name: 'class-edit',
      component: ClassUpsert,
      meta: { title: 'Modification de classe' },
    },
    {
      path: '/classes/add',
      name: 'class-add',
      component: ClassAdd,
      meta: { title: 'Ajout de classe' },
    },
    {
      path: '/types',
      name: 'types',
      component: TypesView,
      meta: { title: 'Types' },
    },
    {
      path: '/types/:id',
      name: 'type',
      component: TypeView,
      meta: { title: 'Type' },
    },
    {
      path: '/types/:id/edit',
      name: 'type-edit',
      component: TypeUpsert,
      meta: { title: 'Modification de type' },
    },
    {
      path: '/types/add',
      name: 'type-add',
      component: TypeAdd,
      meta: { title: 'Ajout de type' },
    },
  ]
})

export default router
