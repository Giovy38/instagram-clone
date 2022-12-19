import { combineReducers } from "redux";
import authReducer from "./authReducer";
import createPostReducer from "./createPostReducer";
import likedReducer from "./likedReducer";
import savedReducer from "./savedReducer";

const rootReducer = combineReducers({
  authReducer,
  createPostReducer,
  likedReducer,
  savedReducer,
});

export default rootReducer;
