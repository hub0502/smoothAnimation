import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/HomePage.vue'
import MouseMovePrac from './pages/MouseMovePrac.vue'

const routes = [
    {name : 'home', path : '/', component : Home},
    {name : 'museMove', path : '/mouseMove', component : MouseMovePrac}
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
  
  const app = createApp(App)
  app.use(router)
  
  app.mount('#app')