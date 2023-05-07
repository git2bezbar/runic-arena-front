import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import ChaosIcon from './components/icons/types/ChaosIcon.vue'
import WarriorIcon from './components/icons/classes/WarriorIcon.vue'
import EditIcon from './components/icons/EditIcon.vue'
import DeleteIcon from './components/icons/DeleteIcon.vue'
import CardItem from './components/CardItem.vue'
import PowerIcon from './components/icons/PowerIcon.vue'
import StopIcon from './components/icons/StopIcon.vue'
import HeartIcon from './components/icons/HeartIcon.vue'
import MadnessIcon from './components/icons/MadnessIcon.vue'
import ShuffleIcon from './components/icons/ShuffleIcon.vue'
import ArrowIcon from './components/icons/ArrowIcon.vue'
import InputComponent from './components/InputComponent.vue'
import ListComponent from './components/ListComponent.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
  .component('ChaosIcon', ChaosIcon)
  .component('WarriorIcon', WarriorIcon)
  .component('EditIcon', EditIcon)
  .component('DeleteIcon', DeleteIcon)
  .component('CardItem', CardItem)
  .component('PowerIcon', PowerIcon)
  .component('StopIcon', StopIcon)
  .component('HeartIcon', HeartIcon)
  .component('MadnessIcon', MadnessIcon)
  .component('ShuffleIcon', ShuffleIcon)
  .component('ArrowIcon', ArrowIcon)
  .component('InputComponent', InputComponent)
  .component('ListComponent', ListComponent)
  .mount('#app')
