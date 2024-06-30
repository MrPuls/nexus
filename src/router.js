import { createRouter, createWebHistory } from 'vue-router'
import AboutView from "./components/aboutPage/AboutView.vue";
import ProjectsView from "./components/home/projects/ProjectsView.vue";
import Home from "./components/home/HomeView.vue";
import ProjectHome from "./components/projects/projectsHome/projectHome.vue";

const routes = [
    { path: '/', component: ProjectsView },
    { path: '/about', component: AboutView },
    {path: '/projects/:id', component: ProjectHome, name:"ProjectDetails"}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router