import axios from "axios";

/**
 * Creates an instance of Axios on port 3000
 * @module axiosInstance
 */
export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Content-type": "application/json"
    }
});