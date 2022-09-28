import PropTypes from 'prop-types';

/**
 * @class
 * @classdesc Creates a model of the average session data of a user
 */
export class UserAverageSessionsModel {
  
/**
 * Represents the user averageSessions.
 * @constructor
 * @param { Object } averageSessions
 * @param { Integer } averageSessions.userId - The id of the user.
 * @param { Array.<{day: Integer, sessionLength: Integer}> } averageSessions.sessions - The day and the length of the session.
 */
  constructor(averageSessions) {
    this.userId = averageSessions.userId;
    this.sessions = averageSessions.sessions.map((session) => (
      {
      day: session.day,
      sessionLength: session.sessionLength
      }
    ));
  };
}

UserAverageSessionsModel.propTypes = {
  USER_AVERAGE_SESSIONS: PropTypes.arrayOf(
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