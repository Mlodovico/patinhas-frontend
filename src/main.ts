import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaFlag,
  RiZhihuFill,
  MdFacebook,
  BiTwitter,
  FaWordpress,
  IoCloseCircleSharp
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'
import './main.css'

addIcons(FaFlag, RiZhihuFill, MdFacebook, BiTwitter, FaWordpress, IoCloseCircleSharp)

const app = createApp(App)

app.use(createPinia())
app.component('v-icon', OhVueIcon)
app.use(router)

app.mount('#app')
