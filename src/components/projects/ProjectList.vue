<script setup lang="ts">
import ProjectModal from "./ProjectModal.vue";
import { ref } from 'vue'
import ProjectCard from "./ProjectCard.vue";
import type { Project } from '@/types/project'
import { projectStore } from '@/stores/project'
import ProjectEditModal from '@/components/projects/ProjectEditModal.vue'


const store = projectStore();
const refProjects = ref(store.allProjects);
const projectDetailsName = ref("");
const projectDetailsDescription = ref("");
const showEditModal=ref(false)

function addProject(projectArray: Array<Partial<Project>>) {
  console.log("Emit Received, project pulled from backend", projectArray);
  refProjects.value.push(projectArray);
}

function openEditProjectModal(name: string, description: string) {
  showEditModal.value = true
  projectDetailsName.value = name;
  projectDetailsDescription.value = description;
}

function closeEditProjectModal() {
  showEditModal.value = false
}
</script>

<template>
  <div class="flex pt-10 pl-10 flex-row justify-between">
    <div class="flex">
      <h1 class="text-5xl font-sans">Projects</h1>
    </div>
    <div>
      <ProjectModal @form-submit="addProject" />
    </div>
    <ProjectEditModal @close-edit-modal="closeEditProjectModal" v-if="showEditModal" :proj-name="projectDetailsName" :proj-description="projectDetailsDescription" />
  </div>
  <div>
    <h1 v-if="refProjects.length === 0" class="text-xl font-sans">
      Seems like you have no projects yet.
    </h1>
  </div>
  <div class="flex flex-row flex-wrap gap-4 pt-10 pl-5 pr-5">
    <ProjectCard
      @edit-project="openEditProjectModal"
      v-for="project in refProjects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<style scoped></style>
