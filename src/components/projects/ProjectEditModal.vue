<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps({
  projName: String,
  projDescription: String
})

defineEmits(['closeEditModal', 'editProject'])

const editName = ref("")
const editDescription = ref("")
const minLength = 3

const showHint = computed(() => {
  return editName.value.length > 0 && editName.value.length <= minLength
})

const hintText = computed(() => {
  return `The field must be longer than ${minLength} symbols`
})

const showEditButton = computed(() => {
  return editName.value.length === 0 || showHint.value
})
</script>

<template>
    <div class="modal modal-open">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Edit Project Details</h3>
        <div class="form-control">
          <label class="label justify-start">
            <span class="label-text">New name</span>
            <span class="text-red-700 pl-0.5">*</span>
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
          <p v-if="showHint" class="text-sm text-red-500 italic">
            {{ hintText }}
          </p>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">New description</span>
          </label>
          <textarea
            v-model="editDescription"
            type="text"
            class="textarea textarea-bordered"
          />
          <p class="text-xs text-gray-500 italic pt-1">
            Current description: {{projDescription}}
          </p>
        </div>
        <div class="modal-action">
          <label v-if="showEditButton" for="edit-project-modal" class="btn btn-disabled" @click="$emit('editProject', editName, editDescription)">Edit</label>
          <label v-if="!showEditButton" for="edit-project-modal" class="btn" @click="$emit('editProject', editName, editDescription)">Edit</label>
          <label for="edit-project-modal" class="btn" @click="$emit('closeEditModal')" >Close</label>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>