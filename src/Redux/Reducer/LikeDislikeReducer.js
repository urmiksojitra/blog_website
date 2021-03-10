import {
  LIKE_DELIKE_BLOG_FAILURE,
  LIKE_DELIKE_BLOG_REQUEST,
  LIKE_DELIKE_BLOG_SUCCESS,
} from "../Type/LikeDislikeType";

const initialState = {
  likedislikedata: [],
};

export const LikeDislikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_DELIKE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIKE_DELIKE_BLOG_SUCCESS:
      console.log(action.payload);
      // let value = state.likedislikedata
      // value.push(action.payload)
      return {
        ...state,
        loading: false,
        likedislikedata: action.payload,
        error: "",
      };
    case LIKE_DELIKE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        likedislikedata: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
