import { createRouter, createWebHistory } from "vue-router";
import ProjectsHome from "../views/ProjectsView.vue";
import ProjectHome from "../views/ProjectDetailView.vue";

const routes = [
  { path: "/", component: ProjectsHome },
  { path: "/projects/:id", component: ProjectHome, name: "ProjectDetails" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
