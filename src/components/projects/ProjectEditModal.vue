<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  projName: String,
  projDescription: String
})

defineEmits(['closeEditModal', 'editProject'])

const editName = ref(props.projName || "")
const editDescription = ref(props.projDescription || "")
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
            <span class="label-text">Name</span>
          </label>
          <input
            v-model="editName"
            type="text"
            class="input input-bordered"
          />
          <p v-if="showHint" class="text-sm text-red-500 italic">
            {{ hintText }}
          </p>
        </div>
        <div class="form-control pt-5">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            v-model="editDescription"
            type="text"
            class="textarea textarea-bordered"
          />
        </div>
        <div class="modal-action">
          <label v-if="showEditButton" for="edit-project-modal" class="btn btn-disabled" @click="$emit('editProject', editName, editDescription)">Edit</label>
          <label v-else for="edit-project-modal" class="btn" @click="$emit('editProject', editName, editDescription)">Edit</label>
          <label for="edit-project-modal" class="btn" @click="$emit('closeEditModal')" >Close</label>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>