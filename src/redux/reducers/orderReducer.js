import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function orderReducer(
  state = {
    orderItems: initialState.orderItems,
    todayOrderList: initialState.todayOrderList,
  },
  action
) {
  switch (action.type) {
    case ActionTypes.ADD_ORDER:
      var orderItem = action.payload;
      orderItem.id = state.length;
      return { ...state, orderItems: state.orderItems.concat(orderItem) };
    case ActionTypes.LOGOUT_SUCCESS:
      return { ...state, orderItems: initialState.orderItems };
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, orderItems: initialState.orderItems };
    case ActionTypes.CONFIRM_ORDER_SUCCESS:
      var order = action.payload;
      order.id = state.todayOrderList.length;
      return {
        ...state,
        todayOrderList: state.todayOrderList.concat(order),
        orderItems: initialState.orderItems,
      };
    case ActionTypes.LOAD_TODAY_ORDER_SUCCESS:
      return { ...state, todayOrderList: action.payload };
    default:
      return state;
  }
}
