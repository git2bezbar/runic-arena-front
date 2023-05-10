import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import AbilityIcon from './components/icons/AbilityIcon.vue'
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
import QuantityIcon from './components/icons/QuantityIcon.vue'
import TitleIcon from './components/icons/TitleIcon.vue'
import DescIcon from './components/icons/DescIcon.vue'
import InputComponent from './components/InputComponent.vue'
import ListComponent from './components/ListComponent.vue'
import TableComponent from './components/TableComponent.vue'
import TextAreaComponent from './components/TextAreaComponent.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
  .component('AbilityIcon', AbilityIcon)
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
  .component('QuantityIcon', QuantityIcon)
  .component('TitleIcon', TitleIcon)
  .component('DescIcon', DescIcon)
  .component('InputComponent', InputComponent)
  .component('ListComponent', ListComponent)
  .component('TableComponent', TableComponent)
  .component('TextAreaComponent', TextAreaComponent)
  .mount('#app')
