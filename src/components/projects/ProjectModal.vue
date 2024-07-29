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
  console.log(response);
  filledForm["id"] = response.id;
  projectArray.value.push(filledForm);
  emit("formSubmit", filledForm);
}

function clearForm() {
  // Reset form fields
  name.value = "";
  description.value = "";
}

const showSubmitButton = computed(() => {
  return name.value.length < 3
})
</script>

<template>
  <div class="flex pr-20" data-testid="create-project-modal">
    <label for="create-project-modal" class="btn btn-primary" data-testid="create-project-button" @click="clearForm"
      >Create project</label
    >
    <input id="create-project-modal" type="checkbox" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg" data-testid="create-project-header">Enter Project Details</h3>
        <div class="form-control">
          <label class="label justify-start">
            <span class="label-text" data-testid="create-project-name">Name</span>
            <span class="text-red-700 pl-0.5">*</span>
          </label>
          <input
            data-testid="create-project-name-input"
            v-model="name"
            type="text"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text" data-testid="create-project-description">Description</span>
          </label>
          <textarea
            data-testid="create-project-description-input"
            v-model="description"
            type="text"
            class="textarea textarea-bordered"
          />
        </div>
        <div class="modal-action">
          <label data-testid="create-project-submit-button" v-if="showSubmitButton" for="create-project-modal" class="btn btn-disabled" @click="submitForm">Create project</label>
          <label data-testid="create-project-submit-button" v-else for="create-project-modal" class="btn" @click="submitForm">Create project</label>
          <label data-testid="create-project-close-button" for="create-project-modal" class="btn" @click="clearForm">Close</label>
        </div>
      </div>
    </div>
  </div>
</template>
