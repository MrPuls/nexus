import type { Project } from '@/types/project'
const BASE_URL = "http://localhost:8080/api/v1";
const HEADERS = {
  "Content-Type": "application/json",
}

export default {
  async createProject(projectData: Partial<Project>) {
    const response = await fetch(`${BASE_URL}/projects`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(projectData),
    });
    if (!response.ok) {
      throw new Error("Failed to create project");
    }
    return response.json();
  },

  async getProjects() {
    const response = await fetch(`${BASE_URL}/projects`,{
      method: "GET",
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    return response.json();
  },

  async getProject(id: number) {
    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      method: "GET",
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch project");
    }
    return response.json();
  },

  async updateProject(id: number, projectData: Project) {
    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      method: "PUT",
      headers: HEADERS,
      body: JSON.stringify(projectData),
    });
    if (!response.ok) {
      throw new Error("Failed to update project");
    }
    return response.json();
  },

  async deleteProject(id: number) {
    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      method: "DELETE",
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error("Failed to delete project");
    }
    return response.json();
  },
};
