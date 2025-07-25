// src/main.js
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(MotionPlugin)
