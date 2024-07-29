<script setup lang="ts">
import ProjectCardSettings from '@/components/projects/ProjectCardSettings.vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

defineEmits(['editProject', 'deleteProject'])
</script>

<template>
  <div class="card bg-base-100 w-64 h-40 shadow-xl hover:scale-105 hover:shadow-2xl ease-in-out transition duration-300 text-left cursor-pointer" :data-testid="`project-card-${project.id}`">
    <ProjectCardSettings @delete-clicked="$emit('deleteProject', project.name, project.id)" @edit-clicked="$emit('editProject', project.name, project.description, project.id)" :project-name="project.name" :project-description="project.description" />
    <div>
      <router-link
        :to="{ name: 'ProjectDetailView', params: { id: project.id } }"
      >
        <div class="card-body">
          <h2 class="card-title" :data-testid="`project-card-${project.id}-title`">
            {{ project.name }}
          </h2>
          <p :data-testid="`project-card-${project.id}-description`">{{ project.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
