import axios from "axios";

// Gets data from API by default.
//Uncomment 'true' and comment 'false' if you want to get mocked data from json server;

// API DATA
export const mock = false;

// MOCKED DATA
// export const mock = true;

let API_URL = null;

// Gets the mocked data from json server
if (mock === true) {
  API_URL = "http://localhost:3500";
}

// Gets the data from Sportsee back-end
if (mock === false) {
  API_URL = "http://localhost:3000";
}

/**
 * Creates an instance of Axios on port 3000
 * @module axiosInstance
 */
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
