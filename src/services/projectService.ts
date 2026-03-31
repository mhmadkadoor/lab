import { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('/data/projects.json');
  if (!response.ok) {
    throw new Error('Projeler yüklenemedi');
  }
  return response.json();
}
