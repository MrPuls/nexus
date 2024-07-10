import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import "./style.css"
import router from './router/router.ts'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')