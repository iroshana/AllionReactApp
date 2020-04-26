import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.authName, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      state = action.payload;
      return state;
    case ActionTypes.LOGOUT_SUCCESS:
      return (state = "");
    default:
      return state;
  }
}
