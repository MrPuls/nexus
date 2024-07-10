<script setup lang="ts">
import ProjectsView from "../components/projects/ProjectList.vue";
</script>

<template>
  <Suspense>
    <ProjectsView />
    <template #fallback> Loading ... </template>
  </Suspense>
</template>

<style scoped></style>
