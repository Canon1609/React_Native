import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://6459e17165bd868e930aa3ad.mockapi.io/users');
  return response.data;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export default taskSlice.reducer;
