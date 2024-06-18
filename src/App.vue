<script setup>
import { ref } from 'vue'
import NavBar from "./components/navBar/NavBar.vue";

const testCasesList = ref([])

const testCase = ref('')

function addTestCase() {
  testCasesList.value.push(testCase.value)
  testCase.value = ''
}
</script>

<template>
  <NavBar></NavBar>
  <div>
    <h1>Test Cases</h1>
    <div>
      <ul>
        <li v-for="testCase in testCasesList" :key="testCase">{{ testCase }}</li>
      </ul>
    </div>
    <div>
      <label class="input input-bordered w-full max-w-xs">
        Input Test Case Name:
        <input  type="text" class="grow" placeholder="Test Case name" v-model="testCase"/>
      </label>
    </div>
    <div>
      <button class="btn btn-primary" @click="addTestCase">Add Test Case</button>
    </div>

  </div>
</template>

<style scoped>
</style>