import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMoviesThunkAction } from '../action/movieAction';

interface Movie {
  id: number;
  title: string;
  genre: string[];
  year: number;
  plot: string;
  poster: string;
}

interface MovieState {
  loading: boolean;
  movieData: Movie[];
  error: string | null;
  favMovies: Movie[];
}

const initialState: MovieState = {
  loading: false,
  movieData: [],
  error: null,
  favMovies: []
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearMovieError: (state) => {
      state.error = null;
    },
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const exists = state.favMovies.some(movie => movie.id === action.payload.id);
      if (!exists) {
        state.favMovies.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favMovies = state.favMovies.filter(movie => movie.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
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
  addToFavorites,
  removeFromFavorites
} = movieSlice.actions;

export default movieSlice.reducer;