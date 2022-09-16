import PropTypes from 'prop-types';

class UserPerformanceModel {
  constructor(performance) {
    this.userId = performance.userId;
    // converts the object
    // this.kind = new Map(Object.entries(performance.kind));
    this.kind = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    }
    this.data = performance.data.map((perfData) => (
      {
      value: perfData.value,
      kind: perfData.kind
      }
    ));
  };
}

UserPerformanceModel.propTypes = {
  USER_PERFORMANCE: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      kind: PropTypes.shape({
        1: PropTypes.number.isRequired,
        2: PropTypes.number.isRequired,
        3: PropTypes.number.isRequired,
        4: PropTypes.number.isRequired,
        5: PropTypes.number.isRequired,
        6: PropTypes.number.isRequired
      }),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          kind: PropTypes.number.isRequired,
          }).isRequired
      ).isRequired

    })
  )
};