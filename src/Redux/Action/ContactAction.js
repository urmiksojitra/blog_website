import {
  CONTACT_USERS_FAILURE,
  CONTACT_USERS_REQUEST,
  CONTACT_USERS_SUCCESS,
  ADD_USER,
} from "../Type/ContactType";
import axios from "axios";

export const contactUsersRequest = () => {
  return {
    type: CONTACT_USERS_REQUEST,
  };
};

export const contactUsersSuccess = (users) => {
  return {
    type: CONTACT_USERS_SUCCESS,
    payload: users,
  };
};
export const contactUsersFailure = (error) => {
  return {
    type: CONTACT_USERS_FAILURE,
    payload: error,
  };
};

export default function contactApi(contactData) {
  return (dispatch) => {
    dispatch(contactUsersRequest());
    axios
      .post("http://localhost:3003/Contact", contactData)
      .then((res) => {
        var user = res.data;
        dispatch(contactUsersSuccess(user));
        // toast.success("Login Success");
        return res.data;
      })
      .catch((error) => {
        dispatch(contactUsersFailure("UserName or Password "));
        //  toast.error();("Login Succ5ess");
      });
  };
}
