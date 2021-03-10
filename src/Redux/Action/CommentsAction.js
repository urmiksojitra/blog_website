import {
  COMMENTS_USERS_FAILURE,
  COMMENTS_USERS_REQUEST,
  COMMENTS_USERS_SUCCESS,
  ADD_USER,
} from "../Type/CommentsType";
import axios from "axios";
import { blogDisplayApi } from "./BlogDisplayAction";

export const commentsUsersRequest = () => {
  return {
    type: COMMENTS_USERS_REQUEST,
  };
};

export const commentsUsersSuccess = (users) => {
  return {
    type: COMMENTS_USERS_SUCCESS,
    payload: users,
  };
};
export const commentsUsersFailure = (error) => {
  return {
    type: COMMENTS_USERS_FAILURE,
    payload: error,
  };
};

export default function commentsApi(commentsdata) {
  return (dispatch) => {
    dispatch(commentsUsersRequest());
    axios
      .post("http://localhost:3003/comments", commentsdata)
      .then((res) => {
        var user = res.data;
        dispatch(commentsUsersSuccess(user));
        return res.data;
      })
      .catch((error) => {
        dispatch(commentsUsersFailure("Comments api falled"));
      });
  };
}
// export function userComment(contact) {
//     return dispatch => {
//         dispatch(userCommentRequest())
//         axios.post('http://localhost:3003/comments',contact)
//             .then(res => {
//                 var cUser = res.data
//                 dispatch(userCommentSuccess(cUser))
//                 return res.data;
//             }).catch(error => {
//                 dispatch(userCommentFailuer(" comment not success   "));
//             })
//     }
// }
