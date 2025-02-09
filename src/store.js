import { configureStore } from '@reduxjs/toolkit';

import projectReducer from './features/Projects/projectSlice';

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
