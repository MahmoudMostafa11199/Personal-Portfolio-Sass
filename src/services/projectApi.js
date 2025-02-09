import { createAsyncThunk } from '@reduxjs/toolkit';

import { portfolioDataAll } from '../features/Projects/projectsData';

export const fetchProjects = createAsyncThunk(
  'project/fetchProjects',
  async () => {
    if (!portfolioDataAll.length) {
      throw new Error('No projects to fetch');
    }
    return portfolioDataAll;
  }
);

export const getProject = createAsyncThunk(
  'project/getProject',
  async (projectId) => {
    if (!portfolioDataAll.length) {
      throw new Error('No projects to fetch');
    }

    console.log(projectId);

    const project = portfolioDataAll.find((p) => p.id === projectId);

    if (!project) {
      throw new Error(`Project with id ${projectId} not found`);
    }

    return project;
  }
);
