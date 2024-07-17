<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  name: String,
  description: String
})

const editName = ref("")
const editDescription = ref("")

function submitEditForm() {
  console.log("Project was edited")
  console.log(editName.value)
  console.log(editDescription.value)
}
</script>

<template>
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Edit Project Details</h3>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Project's Name</span>
          </label>
          <input
            v-model="editName"
            type="text"
            placeholder={{name}}
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Description (optional)</span>
          </label>
          <textarea
            v-model="editDescription"
            type="text"
            placeholder={{description}}
            class="textarea textarea-bordered"
          />
        </div>
        <div class="modal-action">
          <label for="edit-project-modal" class="btn" @click="submitEditForm">Edit</label>
          <label for="edit-project-modal" class="btn" >Close</label>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>