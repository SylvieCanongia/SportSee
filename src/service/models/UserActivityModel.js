import PropTypes from 'prop-types';

export class UserActivityModel {

  constructor(activity) {
    this.userId = activity.userId;
    this.sessions = activity.sessions.map((session) => (
      {
      day: session.day,
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
    
      sessions: PropTypes.array(
        PropTypes.shape({
          day: PropTypes.string.isRequired,
          kilogram: PropTypes.number.isRequired,
          calories: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired
    })
  )
};