import { toast } from "react-toastify";

import {
  COMMENTS_USERS_FAILURE,
  COMMENTS_USERS_REQUEST,
  COMMENTS_USERS_SUCCESS,
  ADD_USER,
} from "../Type/CommentsType";

export const commentState = {
  CommentsData: [],
};

export const CommentsReducer = (state = commentState, action) => {
  switch (action.type) {
    case COMMENTS_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COMMENTS_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        CommentsData: action.payload,
        error: "",
      };

    case COMMENTS_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        CommentsData: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
