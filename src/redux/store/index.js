import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSongsReducer from "../reducers/songsReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
  searchSongs: searchSongsReducer,
  selectedSong: selectedSongReducer,
  favourite: favouriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
