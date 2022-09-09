import { axiosInstance } from "../http-common";

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