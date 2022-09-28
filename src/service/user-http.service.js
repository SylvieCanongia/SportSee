import { axiosInstance } from "../http-common";

/**
 * Send custom request using Axios instance.
 * Retrieves information from a user. Includes the user id, user information
 * (first name, last name and age), the current day's score (todayScore)
 * and key data (calorie, macronutrient, etc.).
 * @param { Integer } userId 
 * @returns { promise }
 */
export const getUserMainData = (userId) => {
  return new Promise((onSuccess, onFail) => {
     axiosInstance.get(`/user/${userId}`)
      .then((response, error) => {
        if(!response || error) {
          return onFail(`Erreur : ${error}`);
        }
        onSuccess(response.data);
      });
  });
};

/**
 * Send custom request using Axios instance.
 * Retrieves a user's activity day by day with kilograms and calories.
 * @param { Integer } userId 
 * @returns { promise }
 */
export const getUserActivity = (userId) => {
  return new Promise((onSuccess, onFail) => {
    axiosInstance.get(`/user/${userId}/activity`)
      .then((response, error) => {
        if(!response || error) {
          return onFail(`Erreur : ${error}`);
        }
        onSuccess(response.data);
      });
  });
};

/**
 * Send custom request using Axios instance.
 * Retrieves the average sessions of a user per day. The week starts on Monday.
 * @param { Integer } userId 
 * @returns { promise }
 */
export const getUserAverageSession = (userId) => {
  return new Promise((onSuccess, onFail) => {
    axiosInstance.get(`/user/${userId}/average-sessions`)
      .then((response, error) => {
        if(!response || error) {
          return onFail(`Erreur : ${error}`);
        }
        onSuccess(response.data);
      });
  });
};

/**
 * Send custom request using Axios instance.
 * Retrieves a user's performance (energy, endurance, etc.).
 * @param { Number } userId 
 * @returns { promise }
 */
export const getUserPerformance = (userId) => {
  return new Promise((onSuccess, onFail) => {
    axiosInstance.get(`/user/${userId}/performance`)
      .then((response, error) => {
        if(!response || error) {
          return onFail(`Erreur : ${error}`);
        }
        onSuccess(response.data);
      });
  });
};