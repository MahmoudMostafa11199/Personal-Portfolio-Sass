import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, API_BIN_ID } from '../utils/config.js';

// import { portfolioDataAll } from '../features/Projects/projectsData';

export const fetchProjects = createAsyncThunk(
  'project/fetchProjects',
  async () => {
    const res = await fetch(
      `https://api.jsonbin.io/v3/b/${API_BIN_ID}/latest`,
      {
        headers: { 'X-Master-Key': API_KEY },
      }
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const {
      record: { projects },
    } = await res.json();

    if (!projects) {
      throw new Error('No projects found in the API response');
    }

    return projects;
  }
);

// export const fetchProjects = createAsyncThunk(
//   'project/fetchProjects',
//   async () => {
//     if (!portfolioDataAll.length) {
//       throw new Error('No projects to fetch');
//     }
//     return portfolioDataAll;
//   }
// );

export const getProject = createAsyncThunk(
  'project/getProject',
  async (projectId) => {
    const res = await fetch(
      `https://api.jsonbin.io/v3/b/${API_BIN_ID}/latest`,
      {
        headers: { 'X-Master-Key': API_KEY },
      }
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const {
      record: { projects },
    } = await res.json();

    const project = projects.find((p) => p.id === projectId);

    if (!project) {
      throw new Error(`Project with id ${projectId} not found`);
    }

    return project;
  }
);

// export const getProject = createAsyncThunk(
//   'project/getProject',
//   async (projectId) => {
//     if (!portfolioDataAll.length) {
//       throw new Error('No projects to fetch');
//     }

//     const project = portfolioDataAll.find((p) => p.id === projectId);

//     if (!project) {
//       throw new Error(`Project with id ${projectId} not found`);
//     }

//     return project;
//   }
// );
