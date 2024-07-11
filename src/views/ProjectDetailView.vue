<script setup lang="ts">
import ProjectMenu from '@/components/projects/ProjectMenu.vue'
import ProjectHome from '@/components/projects/ProjectHome.vue'
</script>


<template>
  <div class="flex flex-row justify-between">
    <ProjectMenu />
    <Suspense>
      <ProjectHome />
    </Suspense>
  </div>
</template>

<style scoped></style>
