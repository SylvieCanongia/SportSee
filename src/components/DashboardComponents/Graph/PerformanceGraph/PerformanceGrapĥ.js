import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
// import { USER_PERFORMANCE } from '../../../../mocks/mock-data';
import { getUserPerformance } from '../../../../service/user-http.service';
import { UserPerformanceModel } from '../../../../service/models/UserPerformanceModel';
import './performanceGraph.scss';

const PerformanceGrapĥ = ({ id }) => {
  // MOCKED DATA --------
  // const userPerformanceData = USER_PERFORMANCE.find((userData) => userData.userId === id);
  // const userData = new UserPerformanceModel(userPerformanceData);
  // the property data is an array so we can use it as is into Recharts graph
  // const data = userData.data;
  // ------------------

  const [data, setData] = useState(null);

  useEffect(() => {
   
    getUserPerformance(id)
      .then((response) => {
        const userData = new UserPerformanceModel(response.data);
        // the property data is an array so we can use it as is into Recharts graph
        setData(userData.data);
      });
  }, [id]);

  return (
    <div className='performanceGraph'>
      { data && <ResponsiveContainer width="100%" height="100%">
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
          <Radar name="Perf" dataKey="value" fill="hsl(0, 100%, 50%)" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer> }
    </div>
  );
};

export default PerformanceGrapĥ;