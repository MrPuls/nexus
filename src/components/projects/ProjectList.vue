<script setup lang="ts">
import CreateProjectModal from "./ProjectModal.vue";
import { ref } from 'vue'
import ProjectCard from "./ProjectCard.vue";
import type { Project } from '@/types/project'
import { projectStore } from '@/stores/project'


const store = projectStore();
const refProjects = ref(store.allProjects);

function addProject(projectArray: Array<Partial<Project>>) {
  console.log("Emit Received, project pulled from backend", projectArray);
  refProjects.value.push(projectArray);
}
</script>

<template>
  <div class="flex pt-10 pl-10 flex-row justify-between">
    <div class="flex">
      <h1 class="text-5xl font-sans">Projects</h1>
    </div>
    <div>
      <CreateProjectModal @form-submit="addProject" />
    </div>
  </div>
  <div>
    <h1 v-if="refProjects.length === 0" class="text-xl font-sans">
      Seems like you have no projects yet.
    </h1>
  </div>
  <div class="flex flex-row flex-wrap gap-4 pt-10 pl-5 pr-5">
    <ProjectCard
      v-for="project in refProjects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<style scoped></style>
