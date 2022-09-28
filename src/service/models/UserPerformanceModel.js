import PropTypes from 'prop-types';


/**
 * @class
 * @classdesc Creates a model of the data of the performance of a user
 */
export class UserPerformanceModel {
/**
 * Represents the user performance.
 * @constructor
 * @param { Object } performance
 * @param { Integer } performance.userId - The id of the user.
 * @param { {1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'} } performance.kind - The list of kind of performance.
 * @param { Array.<{ value: Integer, kind: Integer }> } performance.data[]
 */
  constructor(performance) {
    this.userId = performance.userId;
    // kind is the type of activity :
    // this.kind = {
    //   1: 'cardio',
    //   2: 'energy',
    // ...
    // }
    this.kind = performance.kind 
    this.data = performance.data.map((perfData) => (
      {
      value: perfData.value,
      // [perfData.kind] is the index of the activity
      // of the above property this.kind (ex: [perfData.kind] = 1 or 2 => output "cardio" or "energy"...)
      // data received from API :
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