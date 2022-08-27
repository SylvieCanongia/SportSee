import Meditation from './../../components/ActivitiesGroup/Meditation/Meditation';
import Swimming from './../../components/ActivitiesGroup/Swimming/Swimming';
import Cycling from './../../components/ActivitiesGroup/Cycling/Cycling';
import Bodybuilding from './../../components/ActivitiesGroup/Bodybuilding/Bodybuilding';
import './Activities.scss';

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