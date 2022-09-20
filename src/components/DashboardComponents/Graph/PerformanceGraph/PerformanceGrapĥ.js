import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from '../../../../mocks/mock-data';
// import {getUserPerformance} from '../../../../service/user-http.service';
import { UserPerformanceModel } from '../../../../service/models/UserPerformanceModel';

import './performanceGraph.scss';

const PerformanceGrapĥ = ({ id }) => {
  console.log(id)
  const userPerformanceData = USER_PERFORMANCE.find((userData) => userData.userId === id);
  console.log("=======================")
  console.log("performanceGraph user data from id :")
  console.log(userPerformanceData)
  console.log("=======================")

  const userData = new UserPerformanceModel(userPerformanceData);
  // We use the property data inside the object userData.
  // It's an array so we don't need to convert the model into array for Recharts
  const data = userData.data;
  // console.log(data)
  // console.log(userData)

  return (
    <div className='performanceGraph'>
      <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}
        margin={{
            top: 30,
            right: 5,
            left: 5,
            bottom: 15,
          }}
      >
          <PolarGrid stroke='white' radialLines={false} />
          <PolarAngleAxis dataKey="kind" fontSize="12px" stroke='white' tickLine={false} />
          {/* <PolarRadiusAxis /> */}
          <Radar name="Perf" dataKey="value" fill="hsl(0, 100%, 50%)" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default PerformanceGrapĥ;