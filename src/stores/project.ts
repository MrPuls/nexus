import { defineStore } from 'pinia'
import apiService from '@/services/api/api'

const projects = await apiService.getProjects();

export const projectStore = defineStore('project', () => {
  const allProjects = projects;
  return {allProjects}
})