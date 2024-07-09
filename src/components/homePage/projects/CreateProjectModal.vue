<script setup>
import {ref} from 'vue';
import apiService from '../../../services/api/api.js'

const name = ref('');
const description = ref('');
const projectArray = ref([]);

function addProject(project) {
  projectArray.value.push(project);
}

const emit = defineEmits(['formSubmit'])

async function submitForm () {
  let filledForm = { name: name.value, description: description.value }
  const response = await apiService.createProject(filledForm)
  filledForm["id"] = response.id;
  addProject(filledForm)
  emit('formSubmit', filledForm)
}

function clearForm() {
  // Reset form fields
  name.value = '';
  description.value = '';
}

</script>

<template>
  <div class="flex pr-20">
    <label
      for="my-modal"
      class="btn btn-primary"
      @click="clearForm"
    >Create project</label>
    <input
      id="my-modal"
      type="checkbox"
      class="modal-toggle"
    >
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">
          Enter Project Details
        </h3>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Project's Name</span>
          </label>
          <input
            v-model="name"
            type="text"
            placeholder="project name"
            class="input input-bordered"
          >
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description (optional)</span>
          </label>
          <textarea
            v-model="description"
            type="text"
            placeholder="Your project description"
            class="textarea textarea-bordered"
          />
        </div>
        <div class="modal-action">
          <label
            for="my-modal"
            class="btn"
            @click="submitForm"
          >Submit</label>
          <label
            for="my-modal"
            class="btn"
            @click="clearForm"
          >Close</label>
        </div>
      </div>
    </div>
  </div>
</template>