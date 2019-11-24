import { combineReducers } from "redux";
import AdminReducers from "./AdminReducers";

export const Reducers = combineReducers({
  admin: AdminReducers
});
