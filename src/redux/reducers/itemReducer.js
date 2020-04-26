import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case ActionTypes.LOAD_ITEMS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}
