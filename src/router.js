import { createRouter, createWebHistory } from 'vue-router'
import AboutView from "./components/aboutPage/AboutView.vue";
import ProjectsView from "./components/projects/ProjectsView.vue";
import Home from "./components/home/HomeView.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: AboutView },
    {path: '/projects', component: ProjectsView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router