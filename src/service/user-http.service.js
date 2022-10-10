import { axiosInstance, mock } from "./http-common";
import { UserMainDataModel } from './models/UserMainDataModel';
import { UserActivityModel } from './models/UserActivityModel';

/**
 * Send custom request using Axios instance.
 * Retrieves information from a user. Includes the user id, user information
 * (first name, last name and age), the current day's score (todayScore)
 * and key data (calorie, macronutrient, etc.).
 * @param { Integer } userId 
 * @returns { promise } Promise
 */
export async function getUserMainData(userId) {
  let response = null;
	try {
    if (mock === true) {
      response = await axiosInstance.get(`USER_MAIN_DATA/${userId}`);
    } else {
      const apiData = await axiosInstance.get(`user/${userId}`);
      response = apiData.data;
    }
		const data = response.data;
    const userData = new UserMainDataModel(data);
    return userData;
	}
	catch (error) {
		console.log(error);
	}
}

/**
 * Send custom request using Axios instance.
 * Retrieves a user's activity day by day with kilograms and calories.
 * @param { Integer } userId 
 * @returns { promise }
 */
 export async function getUserActivity (userId) {
  let response = null;
    try {
      if (mock === true) {
        const activityData = await axiosInstance.get(`USER_ACTIVITY`);
        response = activityData.data.find((userData) => userData.userId === userId);
        // console.log(response)
      } else {
        const apiData = await axiosInstance.get(`user/${userId}/activity`);
        const responseData = apiData.data
        response = responseData.data;
        // console.log(response)
      }
      const userData = new UserActivityModel(response);
      return userData;
    }
    catch (error) {
      console.log(error);
    }
  }

/**
 * Send custom request using Axios instance.
 * Retrieves the average sessions of a user per day. The week starts on Monday.
 * @param { Integer } userId 
 * @returns { promise }
 */
export async function getUserAverageSession (userId) {
  try {
    const response = await axiosInstance.get(`user/${userId}/average-sessions`);
    const data = response.data;
    return data;
  }
  catch (error) {
    console.log(error);
  }
};

/**
 * Send custom request using Axios instance.
 * Retrieves a user's performance (energy, endurance, etc.).
 * @param { Number } userId 
 * @returns { promise }
 */
export async function getUserPerformance (userId) {
  return await new Promise((onSuccess, onFail) => {
    axiosInstance.get(`user/${userId}/performance`)
      .then((response, error) => {
        if(!response || error) {
          return onFail(`Erreur : ${error}`);
        }
        onSuccess(response.data);
      });
  });
};