import PropTypes from "prop-types";

export class UserMainDataModel {
/**
 * Represents the user main data.
 * @constructor
 * @param { Object } userMainData
 * @param { Integer } userMainData.id - The id of the user.
 * @param { {firstName: String, lastName: String, age: Integer} } userMainData.userInfos - The firstName, lastName and age of the user.
 * @param {Number} userMainData.todayScore - The score of the day of the user (can be todayScore or score).
 * @param { {calorieCount: Integer, proteinCount: Integer, carbohydrateCount: Integer, lipidCount: Integer} } userMainData.keyData - The energy consumed by the user (calorieCount, proteinCount, carbohydrateCount, lipidCount).
 */
  constructor(userMainData) {
    this.id = userMainData.id;
    this.userInfos = {
      firstName: userMainData.userInfos.firstName,
      lastName: userMainData.userInfos.lastName,
      age: userMainData.userInfos.age,
    };

    // condition || here because there's a property name error in backend data
    // between user 12 and 18 (both 'score' and 'todayScore')
    this.todayScore = userMainData.todayScore || userMainData.score;
    this.keyData = {
      calorieCount: userMainData.keyData.calorieCount,
      proteinCount: userMainData.keyData.proteinCount,
      carbohydrateCount: userMainData.keyData.carbohydrateCount,
      lipidCount: userMainData.keyData.lipidCount,
    };
  }
}

UserMainDataModel.propTypes = {
  USER_MAIN_DATA: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,

      userInfos: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      }).isRequired,

      todayScore: PropTypes.number.isRequired,

      keyData: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired,
      }).isRequired,
    })
  )
}