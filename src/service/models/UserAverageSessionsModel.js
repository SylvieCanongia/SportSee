import PropTypes from 'prop-types';

export class UserAverageSessionsModel {
  
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