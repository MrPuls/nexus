<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  projName: String,
  projDescription: String
})

defineEmits(['closeEditModal'])

const editName = ref("")
const editDescription = ref("")

function submitEditForm() {
  console.log("Project was edited")
  console.log(editName.value)
  console.log(editDescription.value)
}
</script>

<template>
    <div class="modal modal-open">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Edit Project Details</h3>
        <div class="form-control">
          <label class="label">
            <span class="label-text">New Name</span>
          </label>
          <input
            v-model="editName"
            type="text"
            required
            class="input input-bordered"
          />
          <p class="text-xs text-gray-500 italic pt-1">
            Current name: {{projName}}
          </p>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">New description</span>
          </label>
          <textarea
            v-model="editDescription"
            type="text"
            placeholder="Updated project description"
            class="textarea textarea-bordered"
          />
          <p class="text-xs text-gray-500 italic pt-1">
            Current description: {{projDescription}}
          </p>
        </div>
        <div class="modal-action">
          <label for="edit-project-modal" class="btn" @click="submitEditForm">Edit</label>
          <label for="edit-project-modal" class="btn" @click="$emit('closeEditModal')" >Close</label>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>