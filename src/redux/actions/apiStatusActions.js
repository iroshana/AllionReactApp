import * as ActionTypes from "./actionTypes";

export function beginApiCall() {
  return { type: ActionTypes.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: ActionTypes.API_CALL_ERROR };
}
