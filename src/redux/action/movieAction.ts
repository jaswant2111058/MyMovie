import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMovies } from '../../services/movie';




export const getMoviesThunkAction = createAsyncThunk(
    'GET_MOVIES',
    async (_, thunkApi) => {
        try {
            const response = await getAllMovies();
            return response;
        } catch (error) {
            console.log('error', error);
            return [];
        }
    }
);

