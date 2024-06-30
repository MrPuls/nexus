<script setup>
import CreateProjectModal from "./CreateProjectModal.vue";
import {ref} from "vue";

defineEmits([
    'formSubmit'
])
/** @type ref[T] **/
const projects = ref([]);


// TODO: At some point this should be a connection to DB
function renderProjects(projectArray) {
  console.log("Emit Received, projects pulled from backend", projectArray)
  projects.value.push(projectArray)
}

</script>

<template>
  <div class="flex justify-between pl-10 pt-5">
    <div>
      <h1
        v-if="projects.length === 0"
        class="text-xl font-sans"
      >
        Seems like you have no projects yet.
      </h1>
      <div
        v-else
        class="flex flex-row flex-wrap gap-4"
      >
        <div
          v-for="project in projects"
          :key="project.id"
          class="flex "
        >
          <router-link
            :to="{ name: 'ProjectDetails', params: { id: project.id } }"
            class="card bg-base-100 w-96 shadow-xl hover:scale-105 hover:shadow-2xl ease-in-out transition duration-300 text-left cursor-pointer"
          >
            <div class="card-body">
              <h2 class="card-title">
                {{ project.name }}
              </h2>
              <p>{{ project.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <CreateProjectModal
        @form-submit="renderProjects"
      />
    </div>
  </div>
</template>

<style scoped>

</style>