<script setup>
import { ref } from 'vue'
import CreateProjectModal from "./CreateProjectModal.vue";
/** @type {ref[list]} **/
const testCasesList = ref([])

/** @type {ref[string]} **/
const currentTestCase = ref('')

function addTestCase() {
  /* Add test case to the list */
  testCasesList.value.push(currentTestCase.value)
  currentTestCase.value = ''
}

function createProject() {
  /* Create project */
  console.log('Project created')
}
</script>

<template>
  <div>
    <CreateProjectModal />
    <h1>Test Cases</h1>
    <div>
      <ul>
        <li
          v-for="testCase in testCasesList"
          :key="testCase"
        >
          {{ testCase }}
        </li>
      </ul>
    </div>
    <div>
      <label class="input input-bordered w-full max-w-xs">
        Input Test Case Name:
        <input
          v-model="currentTestCase"
          type="text"
          class="grow"
          placeholder="Test Case name"
        >
      </label>
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="addTestCase"
      >
        Add Test Case
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>