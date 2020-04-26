import { combineReducers } from "redux";
import items from "./itemReducer";
import apiCallsInProgress from "./apiStatusReducer";
import order from "./orderReducer";
import authName from "./authReducer";

const rootReducer = combineReducers({
  items,
  apiCallsInProgress,
  order,
  authName,
});

export default rootReducer;
