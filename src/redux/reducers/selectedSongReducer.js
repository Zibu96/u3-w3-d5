import { SELECTED_SONG } from "../actions";

const initialState = {
  content: null,
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_SONG:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default selectedSongReducer;
