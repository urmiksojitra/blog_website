import { toast } from "react-toastify";

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  ADD_USER,
} from "../Type/LoginType";

const initialState = {
  loginData: [],
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      toast.success("Login Success");
      return {
        ...state,
        loading: false,
        loginData: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      toast.error("invalid username ");
      return { ...state, loading: false, loginData: [], error: action.payload };

    default:
      return state;
  }
};
