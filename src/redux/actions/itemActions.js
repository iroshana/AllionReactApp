import * as ActionTypes from "./actionTypes";
import * as itemApi from "../../api/itemApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadItemsSuccess(items) {
  return { type: ActionTypes.LOAD_ITEMS_SUCCESS, items };
}

export const loadItems = () => {
  return function (dispatch) {
    dispatch(beginApiCall());
    return itemApi
      .getItems()
      .then((items) => {
        dispatch(loadItemsSuccess(items));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};
