import * as ActionTypes from "./actionTypes";

export const login = (name) => {
  return { type: ActionTypes.LOGIN_SUCCESS, payload: name };
};

export const logout = () => {
  return { type: ActionTypes.LOGOUT_SUCCESS };
};
