import PropTypes from "prop-types";

export class UserMainDataModel {
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