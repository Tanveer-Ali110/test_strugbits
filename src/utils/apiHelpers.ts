import { API_URL } from "../config/environments";

const createHTTPRequest = async (
  endpoint: string,
  method = "GET",
  body = null || FormData
) => {
  let url = `${API_URL}/${endpoint}`;

  const headers: { [key: string]: string } = {};

  if (body !== null && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  let requestOption = {
    method,
    body:
      body instanceof FormData
        ? body
        : body === null
        ? null
        : JSON.stringify(body),
    headers,
  };

  const response = await fetch(url, requestOption);

  if (!response.ok) throw new Error(`HTTP error! status: ${response.text}`);
  return await response.json();
};

export const createAndUpdateCustomer = async (body: any, _id = "") => {
  if(_id){
    return await createHTTPRequest(`customer/${_id}`, "PUT", body);
  }
  return await createHTTPRequest("customer", "POST", body);
};
export const getCustomers = async () => {
  return await createHTTPRequest("customer");
};
export const removeCustomer = async (id: string) => {
  return await createHTTPRequest(`customer/${id}`, "DELETE");
};
