import { createSlice } from '@reduxjs/toolkit';

import { getMoviesThunkAction } from '../action/movieAction';

const initialState = {
  loading: false,
  movieData: [],
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearMovieError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle createSession
      .addCase(getMoviesThunkAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMoviesThunkAction.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        state.movieData = [];
      })
      .addCase(getMoviesThunkAction.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload;
      })
  },
});

export const {
  clearMovieError,
} = movieSlice.actions;

export default movieSlice.reducer;
