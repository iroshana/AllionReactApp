import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/items/";

export function getItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
