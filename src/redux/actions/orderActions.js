import * as ActionTypes from "./actionTypes";

export const addOrderItem = (orderItem) => {
  return { type: ActionTypes.ADD_ORDER, payload: orderItem };
};
