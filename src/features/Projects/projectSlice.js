import { createSlice } from '@reduxjs/toolkit';

import { fetchProjects, getProject } from '../../services/projectApi';

const initialState = {
  projects: [],
  projectSelected: {},
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'project',

  initialState,

  extraReducers: (builder) => {
    builder
      // Fetch all projects
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.loading = false;
        state.error = null;
      })

      // Get project
      .addCase(getProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.projectSelected = action.payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export { fetchProjects, getProject };

export default projectSlice.reducer;

export const totalProjectsLength = (state) => state.project.projects.length;
