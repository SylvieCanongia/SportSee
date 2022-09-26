import PropTypes from "prop-types";
import Welcome from "../../components/DashboardComponents/Welcome/Welcome";
// Graphs
import ActivityGraph from "../../components/DashboardComponents/Graph/ActivityGraph/ActivityGraph";
import AverageSessionGraph from "../../components/DashboardComponents/Graph/AverageSessionGraph/AverageSessionGraph";
import PerformanceGraph from "../../components/DashboardComponents/Graph/PerformanceGraph/PerformanceGrapĥ";
import Score from "../../components/DashboardComponents/Graph/Score/Score";
// Energy consumed (calories, protein, sugar and lipid)
import Energy from "../../components/DashboardComponents/Energy/Energy";

import "./Dashboard.scss";

const Dashboard = ({ id, mock }) => {
  return (
    <>
    { (id === 12 || id === 18) &&
    <div>
      <section className="dashboard">
        <Welcome id={ id } mock={ mock }/>
        <article className="dashboard__graphsAndEnergy__container">
          <article className="dashboard__graphs">
            <ActivityGraph id={ id } mock={ mock } />
            <div className="dashboard__graphs__row2">
              <AverageSessionGraph id={ id } mock={ mock } />
              <PerformanceGraph id={ id } mock={ mock } />
              <Score id={ id } mock={ mock } />
            </div>
          </article>
          <article className="dashboard__energyConsumed">
            <Energy id={ id } mock={ mock } />
          </article>
        </article>
      </section>
    </div>
    }
    </>
  );
};

export default Dashboard;