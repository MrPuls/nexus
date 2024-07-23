<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Ref } from "vue"
import apiService from "../../services/api/api.js";
import type { Project } from '@/types/project'

const name = ref("");
const description = ref("");
const projectArray: Ref<Array<Partial<Project>>> = ref([]);

const emit = defineEmits(["formSubmit"]);
let filledForm: Partial<Project>;

async function submitForm() {
  filledForm = { name: name.value, description: description.value };
  const response = await apiService.createProject(filledForm);
  filledForm["id"] = response.id;
  projectArray.value.push(filledForm);
  emit("formSubmit", filledForm);
}

function clearForm() {
  // Reset form fields
  name.value = "";
  description.value = "";
}

const showEditButton = computed(() => {
  return name.value.length < 3
})
</script>

<template>
  <div class="flex pr-20">
    <label for="create-project-modal" class="btn btn-primary" @click="clearForm"
      >Create project</label
    >
    <input id="create-project-modal" type="checkbox" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Enter Project Details</h3>
        <div class="form-control">
          <label class="label justify-start">
            <span class="label-text">Name</span>
            <span class="text-red-700 pl-0.5">*</span>
          </label>
          <input
            v-model="name"
            type="text"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            v-model="description"
            type="text"
            class="textarea textarea-bordered"
          />
        </div>
        <div class="modal-action">
          <label v-if="showEditButton" for="create-project-modal" class="btn btn-disabled" @click="submitForm">Create project</label>
          <label v-else for="create-project-modal" class="btn" @click="submitForm">Create project</label>
          <label for="create-project-modal" class="btn" @click="clearForm">Close</label>
        </div>
      </div>
    </div>
  </div>
</template>
