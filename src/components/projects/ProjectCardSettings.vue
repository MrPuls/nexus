<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  projectName: String,
  projectDescription: String,
})

defineEmits(["editClicked"]);

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const edit = () => {
  // Implement edit logic
  isOpen.value = false // Close dropdown after action
}

const confirmDelete = () => {
  if (confirm('Are you sure you want to delete ...?')) {
    // Implement delete logic
    console.log('Item deleted')
  }
  isOpen.value = false // Close dropdown after action
}
</script>

<template>
  <div class="dropdown dropdown-bottom dropdown-end absolute top-0 right-0">
    <div tabindex="0" role="button" class="btn btn-ghost hover:bg-transparent scale-150" @focusin="isOpen = false" @click="toggleDropdown">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="1.75" fill="currentColor" />
        <circle cx="19" cy="12" r="1.75" fill="currentColor" />
        <circle cx="5" cy="12" r="1.75" fill="currentColor" />
      </svg>
    </div>
    <ul v-if="isOpen" tabindex="0" class="dropdown-content menu bg-base-100 rounded-box w-24 p-2 shadow">
      <li><a @click="$emit('editClicked')" class="hover:bg-base-200">Edit</a></li>
      <li><a @click="confirmDelete" class="text-red-500 hover:bg-red-100">Delete</a></li>
    </ul>
  </div>
</template>


<style scoped>

</style>