import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/items/";

export const getItems = () => {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
};
