import { useEffect, useState } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts';
// import { USER_AVERAGE_SESSIONS } from '../../../../mocks/mock-data';
import { getUserAverageSession } from '../../../../service/user-http.service';
import { UserAverageSessionsModel } from '../../../../service/models/UserAverageSessionsModel';

import './averageSessionGraph.scss';

const AverageSessionGraph = ({id}) => {
  // const userAverageSessionData = USER_AVERAGE_SESSIONS.find((userData) => userData.userId === id);
  // const userData = new UserAverageSessionsModel(userAverageSessionData);
  // Creates the array Recharts uses to get the data.
  // const data = [userData];

  // API DATA
  const [data, setData] = useState(null);

  useEffect(() => {
   
    getUserAverageSession(id)
      .then((response) => {
        const userData = new UserAverageSessionsModel(response.data);
        setData([userData]);
      });
  }, [id]);

  return (
    <div className='averageSessionGraph'>
      <h3 className='averageSessionGraphLabel'>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
            data={data}
            margin={{
            top: 30,
            right: 8,
            left: 8,
            bottom: 15,
          }}
          >
          <CartesianGrid  horizontal="false" vertical="false" width={0} height={0} />
          <XAxis dataKey="day" tick={{stroke: 'white', strokeWidth: 1}} tickLine={false} axisLine={false}/>
          <Tooltip />
          { data && data.map((data, index) => (
            <Area type="monotone" dot={false} fill="gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.106534) 100%)" fillOpacity={0.1} stroke= "hsl(0, 0%, 100%)" strokeWidth={2} dataKey="sessionLength" data={data.sessions} name="min"  key={index} margin={30} className="area"/>
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionGraph;