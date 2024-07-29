<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  projName: String,
  projDescription: String
})

defineEmits(['closeEditModal', 'editProject'])

const editName = ref(props.projName || "")
const editDescription = ref(props.projDescription || "")

</script>

<template>
    <div class="modal modal-open" data-testid="edit-project-modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Edit Project Details</h3>
        <div class="form-control">
          <label class="label justify-start">
            <span data-testid="edit-project-modal-name-header" class="label-text">Name</span>
          </label>
          <input
            data-testid="edit-project-modal-name-input"
            v-model="editName"
            type="text"
            class="input input-bordered"
          />
        </div>
        <div class="form-control pt-5">
          <label class="label">
            <span data-testid="edit-project-modal-description-header" class="label-text">Description</span>
          </label>
          <textarea
            data-testid="edit-project-modal-description-input"
            v-model="editDescription"
            type="text"
            class="textarea textarea-bordered"
          />
        </div>
        <div class="modal-action">
          <label data-testid="edit-project-modal-edit-button" for="edit-project-modal" class="btn btn-disabled" @click="$emit('editProject', editName, editDescription)">Edit</label>
          <label data-testid="edit-project-modal-close-button" for="edit-project-modal" class="btn" @click="$emit('closeEditModal')" >Close</label>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>