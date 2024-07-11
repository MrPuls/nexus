<script setup lang="ts">
import ProjectsList from "../components/projects/ProjectList.vue";
</script>

<template>
  <Suspense>
    <ProjectsList />
    <template #fallback> Loading ... </template>
  </Suspense>
</template>

<style scoped></style>
