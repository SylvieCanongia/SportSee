import { axiosInstance } from "../http-common";

// retrieves information from a user. This first endpoint includes the user id,
//user information (first name, last name and age), the current day's score (todayScore)
//and key data (calorie, macronutrient, etc.).
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

// retrieves a user's activity day by day with kilograms and calories.
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

//retrieves the average sessions of a user per day. The week starts on Monday.
export const getUserAverageSession = (userId) => {
  return new Promise((onSuccess, onFail) => {
    axiosInstance.get(`/user/${userId}//average-sessions`)
      .then((response, error) => {
        if(!response || error) {
          return onFail(`Erreur : ${error}`);
        }
        onSuccess(response.data);
      });
  });
};

//retrieves a user's performance (energy, endurance, etc.).
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