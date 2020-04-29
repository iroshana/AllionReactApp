import * as ActionTypes from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as orderApi from "../../api/orderApi";

export const addOrderItem = (orderItem) => {
  return { type: ActionTypes.ADD_ORDER, payload: orderItem };
};

export const confirmOrder = (order) => {
  return { type: ActionTypes.CONFIRM_ORDER_SUCCESS, payload: order };
};

export const loadTodayOrdersSuccess = (orders) => {
  return { type: ActionTypes.LOAD_TODAY_ORDER_SUCCESS, payload: orders };
};

export function saveOrder(order) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall);
    return orderApi
      .saveOrder(order)
      .then((savedOrder) => dispatch(confirmOrder(savedOrder)))
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export const loadTodayOrders = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return orderApi
      .getTodayOrders()
      .then((order) => {
        dispatch(loadTodayOrdersSuccess(order));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};
