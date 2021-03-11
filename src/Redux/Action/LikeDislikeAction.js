import axios from "axios";
import {
  LIKE_DELIKE_BLOG_FAILURE,
  LIKE_DELIKE_BLOG_REQUEST,
  LIKE_DELIKE_BLOG_SUCCESS,
} from "../Type/LikeDislikeType";

export const likeRequset = () => {
  return {
    type: LIKE_DELIKE_BLOG_REQUEST,
  };
};
export const likeSuccess = (user) => {
  return {
    type: LIKE_DELIKE_BLOG_SUCCESS,
    payload: user,
  };
};
export const likefailure = (error) => {
  return {
    type: LIKE_DELIKE_BLOG_FAILURE,
    payload: error,
  };
};

export function likeBlogApi(data) {
  return (dispatch) => {
    dispatch(likeRequset());
    axios
      .get(`http://localhost:3003/status`)
      .then((res) => {
        // debugger
        var data1 = res.data;
        var userData = data1.find(
          (values) =>
            values.user_id === data.user_id && values.blog_id === data.blog_id
        );
        console.log(userData);
        if (userData) {
          if (userData.status === data.status) {
            axios.delete(`http://localhost:3003/status/${userData.id}`);
          } else if (userData.status !== data.status) {
            userData.status = data.status;
            axios.put(`http://localhost:3003/status/${userData.id}`, userData);
          }
        } else {
          if (data.blog_id) {
            axios.post(`http://localhost:3003/status`, data);
          }
        }
        dispatch(fecthLike());
        return res.data;
      })
      .catch((error) => {
        dispatch(likefailure("Unable To Fetch Data"));
      });
  };
}
export function fecthLike() {
  return (dispatch) => {
    dispatch(likeRequset());
    // debugger
    axios
      .get("http://localhost:3003/status")
      .then((res) => {
        var user = res.data;
        console.log("like action", user);
        if (user === undefined) {
          throw res.error;
        }

        dispatch(likeSuccess(user));
        return res.data;
      })
      .catch((error) => {
        dispatch(likefailure("error "));
      });
  };
}
