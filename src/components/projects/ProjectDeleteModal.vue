<script setup lang="ts">
import { computed, ref } from 'vue'
import apiService from "../../services/api/api.js";


const props = defineProps({
  projName: String,
  projId: {
    type: Number,
    default: 0
  },
})

const emits = defineEmits(['closeDeleteModal', 'deleteProject'])

const deleteName = ref("")

const showDeleteButton = computed(() => {
  return deleteName.value !== props.projName
})

async function callDeleteProject() {
  if (props.projId === 0) {
    throw new Error('Invalid project id')
  }
  await apiService.deleteProject(props.projId)
  emits('deleteProject')
}

</script>

<template>
  <div class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Delete project</h3>
      <div>
        <label class="label">
          <span class="label-text text-red-700">
            Are you sure you want to delete this project?<br><br>All data within the project will be erased
          </span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text font-bold">To confirm, please enter project's name:</span>
        </label>
        <input
          v-model="deleteName"
          type="text"
          :placeholder="props.projName"
          class="input input-bordered"
        />
      </div>
      <div class="modal-action">
        <label v-if="showDeleteButton" for="delete-project-modal" class="btn btn-disabled" @click="callDeleteProject">Delete</label>
        <label v-else for="delete-project-modal" class="btn text-red-500 hover:bg-red-100" @click="callDeleteProject">Delete</label>
        <label for="delete-project-modal" class="btn" @click="$emit('closeDeleteModal')" >Cancel</label>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>