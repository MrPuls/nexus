<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  projName: String,
})

defineEmits(['closeDeleteModal', 'deleteProject'])

const deleteName = ref("")

const showDeleteButton = computed(() => {
  return deleteName.value !== props.projName
})

</script>

<template>
  <div class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Delete project</h3>
      <div>
        <label class="label">
          <span class="label-text">Are you sure you want to delete project "{{projName}}"?</span>
        </label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">To confirm, please enter project's name</span>
        </label>
        <input
          v-model="deleteName"
          type="text"
          class="input input-bordered"
        />
      </div>
      <div class="modal-action">
        <label v-if="showDeleteButton" for="delete-project-modal" class="btn btn-disabled" @click="$emit('deleteProject', deleteName)">Delete</label>
        <label v-else for="delete-project-modal" class="btn text-red-500 hover:bg-red-100" @click="$emit('deleteProject', deleteName)">Delete</label>
        <label for="delete-project-modal" class="btn" @click="$emit('closeDeleteModal')" >Cancel</label>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>