import PropTypes from 'prop-types';

/**
 * @class
 * @classdesc Creates a model of the activity data of a user
 */
export class UserActivityModel {

/**
 * Represents the user activity.
 * @constructor
 * @param { Object } activity
 * @param { Integer } activity.userId - The id of the user.
 * @param { Array.<{day: String, kilogram: Integer, calories: Integer}> } activity.sessions - The day of the session, weight of the user and calories consumed.
 */
  constructor(activity) {
    this.userId = activity.userId;
    this.sessions = activity.sessions.map((session) => (
      {
      // Keeps only the day number of the date
      // (for ex: day: '2020-07-01' => output : '1')
      day: session.day.toString().slice(-1),
      kilogram: session.kilogram,
      calories: session.calories
      }
    ));
  };
}

UserActivityModel.propTypes = {
  USER_ACTIVITY: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
    
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string.isRequired,
          kilogram: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired
    })
  )
};