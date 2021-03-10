import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { RegisterReducer } from "./RegisterReducer";
import { ContactReducer } from "./ContactReducer";
import { CreateBlogReducer } from "./CreateBlogReducer";
import { BlogDisplayReducer } from "./BlogDisplayReducer";
import { CommentsReducer } from "./CommentsReducer";
import { LikeDislikeReducer } from "./LikeDislikeReducer";

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  ContactReducer,
  CreateBlogReducer,
  BlogDisplayReducer,
  CommentsReducer,
  LikeDislikeReducer,
});

export default rootReducer;
