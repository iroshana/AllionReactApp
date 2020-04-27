import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function orderReducer(state = initialState.orderItems, action) {
  switch (action.type) {
    case ActionTypes.ADD_ORDER:
      var orderItem = action.payload;
      orderItem.id = state.length;
      return state.concat(orderItem);
    case ActionTypes.LOGOUT_SUCCESS:
      return (state = initialState.orderItems);
    case ActionTypes.LOGIN_SUCCESS:
      return (state = initialState.orderItems);
    default:
      return state;
  }
}
