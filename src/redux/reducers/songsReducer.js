import { SEARCH_SONGS } from "../actions";

const initialState = {
  content: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        ...state,

        content: [...state.content, ...action.payload],
      };

    default:
      return state;
  }
};

export default songsReducer;
