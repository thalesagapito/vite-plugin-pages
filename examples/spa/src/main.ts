import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'pages-generated'
import App from './App.vue'
import './index.css'

console.log(routes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
