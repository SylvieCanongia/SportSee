import http from "../http-common";

export const getUserById = (id) => {
  return http.get(`/user/${id}`);
};

// export const createCountry = (data) => {
//   return http.post("/countries", data);
// };
// export const updateCountry = (id, data) => {
//   return http.put(`/countries/${id}`, data);
// };
// export const removeCountry = (id) => {
//   return http.delete(`/countries/${id}`);
// };