import Meditation from './../../components/SportsActivitiesDetail/Meditation/Meditation';
import Swimming from './../../components/SportsActivitiesDetail/Swimming/Swimming';
import Cycling from './../../components/SportsActivitiesDetail/Cycling/Cycling';
import Bodybuilding from './../../components/SportsActivitiesDetail/Bodybuilding/Bodybuilding';
import './SportsActivities.scss';

const Activities = () => {
  return (
    <div>
      <Meditation />
      <Swimming />
      <Cycling />
      <Bodybuilding />
    </div>
  );
};

export default Activities;