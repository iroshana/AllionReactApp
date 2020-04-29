import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/orders/";

export const saveOrder = (order) => {
  return fetch(baseUrl + (order.id || ""), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(order),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const getTodayOrders = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};
