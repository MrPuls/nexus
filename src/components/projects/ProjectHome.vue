<script setup lang="ts">
import { useRoute } from 'vue-router'
import apiService from "@/services/api/api"

const router = useRoute()
const projectID = Number(router.params.id)
const projectInfo = await apiService.getProject(projectID)


</script>

<template>
  <div>
    project name {{ projectInfo }}
  </div>
</template>

<style scoped>

</style>