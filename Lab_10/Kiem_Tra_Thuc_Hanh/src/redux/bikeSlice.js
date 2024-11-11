import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBikes = createAsyncThunk(
    'bikes/fetchBikes',
    async () => {
        const response = await fetch('https://6459e17165bd868e930aa3ad.mockapi.io/bikes');
        const data = await response.json();
        return data;
    }
);

const bikeSlice = createSlice({
    name: 'bikes',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBikes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBikes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchBikes.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default bikeSlice.reducer; 