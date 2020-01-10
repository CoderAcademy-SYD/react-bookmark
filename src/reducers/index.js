import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import bookmarksReducer from "./bookmarks_reducer";

export default combineReducers({
    auth: authReducer,
    bookmarks: bookmarksReducer
});