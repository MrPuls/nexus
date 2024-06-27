<script setup>
import { ref } from 'vue';

const name = ref('');
const description = ref('');
const projectArray = ref([]);
const projID = ref(0)

function addProject(project) {
  projectArray.value.push(project);
}

const emit = defineEmits(['formSubmit'])

// TODO: Add ID for it to be routed later
function submitForm () {
  const filledForm = { name: name.value, description: description.value, id: projID.value}
  console.log('Form submitted:', filledForm);
  // Add your form submission logic here
  // Reset form fields
  addProject(filledForm)
  emit('formSubmit', filledForm)
}

function incrementID() {
  projID.value ++
}

function clearForm() {
  // Reset form fields
  name.value = '';
  description.value = '';
  incrementID()
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