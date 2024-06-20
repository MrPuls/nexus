import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from "./components/aboutPage/AboutView.vue";
import Home from "./components/home/HomeView.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: AboutPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router