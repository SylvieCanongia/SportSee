import { useState, useEffect, Component } from "react";
import axios from "axios";
import { axiosInstance } from "../../http-common";
import PropTypes from "prop-types";
import { getUserMainData } from "./../../service/user-http.service";
// import UserMainData from '../../service/api/UserMainData';
import Welcome from "../../components/DashboardComponents/Welcome/Welcome";
// Graphs
import ActivityGraph from "../../components/DashboardComponents/Graph/ActivityGraph/ActivityGraph";
import AverageSessionGraph from "../../components/DashboardComponents/Graph/AverageSessionGraph/AverageSessionGraph";
import PerformanceGraph from "../../components/DashboardComponents/Graph/PerformanceGraph/PerformanceGrapĥ";
import Score from "../../components/DashboardComponents/Graph/Score/Score";

// Energy consumed detail
import Energy from "../../components/DashboardComponents/Energy/Energy";
// import Proteins from "../../components/DashboardComponents/stopEnergyConsumed/Proteins/Proteins";
// import Sugars from "../../components/DashboardComponents/stopEnergyConsumed/Sugars/Sugars";
// import Lipids from "../../components/DashboardComponents/stopEnergyConsumed/Lipids/Lipids";

import "./Dashboard.scss";

const Dashboard = (props) => {
  const [userMainInfos, setUserMainInfos] = useState(null);
  const id = props.id;

  useEffect(() => {
    // getUserMainData(userId)
    //   .then((response) => {
    //     // console.log(response.data)
    //     setUserMainInfos(response.data)
    //   });
  }, []);

  // console.log(userMainInfos)

  return (
    <div>
      {/* <p>Id : {userMainInfos.id}</p> */}
      <p>Id : { id }</p>
      {/* <p>userInfos: {userMainInfos.userInfos}</p> */}
      <section className="dashboard">
        <Welcome id={ id }/>
        <article className="dashboard__graphsAndEnergy__container">
          <article className="dashboard__graphs">
            <ActivityGraph id={ id }/>
            <div className="dashboard__graphs__row2">
              <AverageSessionGraph id={ id }/>
              <PerformanceGraph id={ id }/>
              <Score id={ id }/>
            </div>
          </article>
          <article className="dashboard__energyConsumed">
            <Energy id={ id } />
            {/* <Proteins id={ id } />
            <Sugars id={ id } />
            <Lipids id={ id } /> */}
          </article>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userMainData: {},
//       id: this.props.id,
//     };
//   }

//   componentDidMount() {
//     const { id } = this.state

//     getUserMainData(id)
//       // .then((jsResponse) => console.log(jsResponse.data))
//       .then((response) => {
//         this.setState({userMainData: response.data })
//     })
//   }

//   render() {

//     const { userMainData } = this.state

//     // console.log(userMainData)
//     // console.log(userMainData.id)
//     const {
//       id,
//       userInfos,
//       todayScore,
//       keyData,
//     } = userMainData

//     // console.log(id)
//     console.log(userInfos)
//     // console.log(todayScore)
//     console.log(keyData)

//     return (
//       <div>
//         <p>Id : {id}</p>
//         <p>Coucou
//         {/* {Object.keys({userInfos}).map((userInfo, index) => {
//           return (
//             <span key={index}>userInfo : {userInfo}</span>
//           )
//         })} */}
//         </p>
//         <p>todayScore : {todayScore}</p>
//         {/* <p>keyData : {keyData}</p> */}

//         <section className="dashboard">
//           <Welcome />
//           <article className="dashboard__graphsAndEnergy__container">
//             <article className="dashboard__graphs">
//               <ActivityGraph />
//               <div className="dashboard__graphs__row2">
//                 <AverageSessionGraph />
//                 <PerformanceGraph />
//                 <Score />
//               </div>
//             </article>
//             <article className="dashboard__energyConsumed">
//               <Calories />
//               <Proteins />
//               <Sugars />
//               <Lipids />
//             </article>
//           </article>
//         </section>
//       </div>
//     );
//   }
// }

// Dashboard.propTypes = {};

// export default Dashboard;
