import PropTypes from 'prop-types';

export class UserActivityModel {

  constructor(activity) {
    this.userId = activity.userId;
    this.sessions = activity.sessions.map((session) => (
      {
      // Keeps only the day number of the date. For example '1'
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