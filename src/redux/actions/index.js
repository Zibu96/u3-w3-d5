export const SEARCH_SONGS = "SEARCH_SONGS";
export const SELECTED_SONG = "SELECTED_SONG";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const searchSongsAction = (query) => {
  return async (dispatch, getState) => {
    console.log("getState", getState());
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
      );
      if (response.ok) {
        let { data } = await response.json();

        dispatch({ type: SEARCH_SONGS, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const selectedSongAction = (art) => ({
  type: SELECTED_SONG,
  payload: art,
});

export const addToFavouriteAction = (song) => ({
  type: ADD_TO_FAVOURITE,
  payload: song,
});

export const removeFromFavouriteAction = (song) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: song,
});
