<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link
    :to="{ name: 'ProjectDetails', params: { id: project.id } }"
    class="card bg-base-100 w-96 shadow-xl hover:scale-105 hover:shadow-2xl ease-in-out transition duration-300 text-left cursor-pointer"
  >
    <div class="card-body">
      <h2 class="card-title">
        {{ project.name }}
      </h2>
      <p>{{ project.description }}</p>
    </div>
  </router-link>
</template>

<style scoped>

</style>