import PropTypes from 'prop-types';

export class UserPerformanceModel {
  constructor(performance) {
    this.userId = performance.userId;
    // this.kind = {
    //   1: 'cardio',
    //   2: 'energy',
    // ...
    // }
    this.kind = performance.kind
    this.data = performance.data.map((perfData) => (
      {
      value: perfData.value,
      // perfData.kind is the index (ex: 1 or 2 => output "cardio" or "energy"...)
      // perfData: [
      //   {
      //       value: 80,
      //       kind: 1
      //   },
      // .....
      // ]
      kind: this.kind[perfData.kind]
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