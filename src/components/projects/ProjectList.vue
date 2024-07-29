<script setup lang="ts">
import ProjectModal from "./ProjectModal.vue";
import { ref } from 'vue'
import ProjectCard from "./ProjectCard.vue";
import type { Project } from '@/types/project'
import { projectStore } from '@/stores/project'
import ProjectEditModal from '@/components/projects/ProjectEditModal.vue'
import ProjectDeleteModal from '@/components/projects/ProjectDeleteModal.vue'

const store = projectStore();
const refProjects = ref(store.allProjects);
const projectDetailsName = ref("");
const projectDetailsDescription = ref("");
const projectDetailsID = ref(0);
const showEditModal=ref(false)
const showDeleteModal=ref(false)

function addProject(projectArray: Array<Partial<Project>>) {
  console.log("Emit Received, project pulled from backend", projectArray);
  refProjects.value.push(projectArray);
}

function openEditProjectModal(name: string, description: string, id: number) {
  showEditModal.value = true
  projectDetailsName.value = name;
  projectDetailsDescription.value = description;
  projectDetailsID.value = id;
}

function closeEditProjectModal() {
  showEditModal.value = false
}

function updateProject(newName: string, newDescription: string) {
  // TODO: Add backend handler
  let requestPayload: Partial<{id: number, name: string, description: string}> = {}
  if (newDescription !== projectDetailsDescription.value) {
    requestPayload["description"] = newDescription;
  }
  if (newName !== projectDetailsName.value) {
    requestPayload["name"] = newName;
  }
  showEditModal.value = false
  console.log(requestPayload);
}

function deleteProject() {
  // there is probably a better solution than a for loop, but now I'm just happy it works
  for (let project in refProjects.value) {
    if (refProjects.value[project]["id"] === projectDetailsID.value) {
      console.log(project);
      refProjects.value.splice(project, 1);
      console.log(refProjects.value);
    }
  }
  console.log("deleting project: ", projectDetailsID.value);
  showDeleteModal.value = false
}

function openDeleteProjectModal(name: string, id: number) {
  showDeleteModal.value = true
  projectDetailsName.value = name;
  projectDetailsID.value = id;
}

function closeDeleteProjectModal() {
  showDeleteModal.value = false
}


</script>

<template>
  <div class="flex pt-10 pl-10 flex-row justify-between">
    <div class="flex">
      <h1 class="text-5xl font-sans" data-testid="projects-header">Projects</h1>
    </div>
    <div>
      <ProjectModal @form-submit="addProject" />
    </div>
    <ProjectEditModal @edit-project="updateProject" @close-edit-modal="closeEditProjectModal" v-if="showEditModal" :proj-name="projectDetailsName" :proj-description="projectDetailsDescription" />
    <Suspense>
      <ProjectDeleteModal @delete-project="deleteProject" @close-delete-modal="closeDeleteProjectModal" v-if="showDeleteModal" :proj-name="projectDetailsName" :proj-id="projectDetailsID" />
    </Suspense>
  </div>
  <div>
    <h1 v-if="refProjects.length === 0" class="text-xl font-sans" data-testid="project-list-empty-header">
      Seems like you have no projects yet.
    </h1>
  </div>
  <div data-testid="project-list-container">
    <ol class="flex flex-row flex-wrap gap-4 pt-10 pl-5 pr-5" data-testid="project-list">
      <li v-for="project in refProjects"
          :key="project.id">
        <ProjectCard
          @delete-project="openDeleteProjectModal"
          @edit-project="openEditProjectModal"
          :project="project"
        />
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
