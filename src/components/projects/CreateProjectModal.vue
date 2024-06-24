<script setup>
import { ref } from 'vue';

const name = ref('');
const description = ref('');

function submitForm () {
  console.log('Form submitted:', { name: name.value, email: description.value });
  // Add your form submission logic here
  // Reset form fields
  name.value = '';
  description.value = '';
}

function clearForm() {
  // Reset form fields
  name.value = '';
  description.value = '';
}

</script>

<template>
  <div>
    <!-- Button to open the modal -->
    <label
      for="my-modal"
      class="btn btn-primary"
    >Create project</label>

    <!-- Modal -->
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