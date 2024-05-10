import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchSongsReducer from "../reducers/songsReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";

const rootReducer = combineReducers({
  searchSongs: searchSongsReducer,
  selectedSong: selectedSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
