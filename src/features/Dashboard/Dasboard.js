import Welcome from '../../components/DashboardComponents/Welcome/Welcome';
// Graphs
import ActivityGraph from '../../components/DashboardComponents/Graph/ActivityGraph/ActivityGraph';
import AverageSessionGraph from '../../components/DashboardComponents/Graph/AverageSessionGraph/AverageSessionGraph';
import PerformanceGraph from '../../components/DashboardComponents/Graph/PerformanceGraph/PerformanceGrapĥ';
import Score from '../../components/DashboardComponents/Graph/Score/Score';

// Energy consumed detail
import Calories from '../../components/DashboardComponents/EnergyConsumed/Calories/Calories';
import Proteins from '../../components/DashboardComponents/EnergyConsumed/Proteins/Proteins';
import Sugars from '../../components/DashboardComponents/EnergyConsumed/Sugars/Sugars';
import Lipids from '../../components/DashboardComponents/EnergyConsumed/Lipids/Lipids';



import './Dashboard.scss';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <Welcome />
      <article className='dashboard__graphsAndEnergy__container'>
        <article className='dashboard__graphs'>
          <ActivityGraph />
          <div className='dashboard__graphs__row2'>
            <AverageSessionGraph />
            <PerformanceGraph />
            <Score />
          </div>
        </article>
        <article className='dashboard__energyConsumed'>
          <Calories />
          <Proteins />
          <Sugars />
          <Lipids />
        </article>
      </article>
    </section>
  );
};

export default Dashboard;