import { combineReducers } from 'redux';
import movieSlice from "./movieSlice"



const rootReducer = combineReducers({
  
    movie: movieSlice,
  
});

export default rootReducer;
