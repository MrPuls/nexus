<script setup>
import ProjectList from "./ProjectTiles.vue";

</script>

<template>
  <div class="flex pt-10 pl-10">
    <div class="flex">
      <h1 class="text-5xl font-sans">
        Projects
      </h1>
    </div>
  </div>
  <Suspense>
    <ProjectList />
    <template #fallback>
      Loading ...
    </template>
  </Suspense>
</template>

<style scoped>
</style>