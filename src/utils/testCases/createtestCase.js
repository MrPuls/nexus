import {ref} from "vue";

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

export {testCasesList, currentTestCase, addTestCase, createProject}