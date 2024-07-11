import { createRouter, createWebHistory } from "vue-router";
import ProjectsView from "../views/ProjectsView.vue";
import ProjectDetailView from "../views/ProjectDetailView.vue";

const routes = [
  { path: "/", component: ProjectsView },
  { path: "/projects/:id", component: ProjectDetailView, name: "ProjectDetailView" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
