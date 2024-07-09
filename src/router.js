import { createRouter, createWebHistory } from 'vue-router'
import AboutView from "./components/aboutPage/AboutView.vue";
import ProjectsView from "./components/homePage/projects/ProjectsView.vue";
import ProjectHome from "./components/project/projectHome/projectHome.vue";

const routes = [
    { path: '/', component: ProjectsView },
    { path: '/about', component: AboutView },
    {path: '/project/:id', component: ProjectHome, name:"ProjectDetails"}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router