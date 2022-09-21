import { AreaChart, Area, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../../../mocks/mock-data';
// import {getUserAverageSessionData} from '../../../../service/user-http.service';
import { UserAverageSessionsModel } from '../../../../service/models/UserAverageSessionsModel';

import './averageSessionGraph.scss';

const AverageSessionGraph = ({id}) => {
  // console.log(id)
  const userAverageSessionData = USER_AVERAGE_SESSIONS.find((userData) => userData.userId === id);
  // console.log("=======================")
  // console.log("averageSessionGraph user data from id :")
  // console.log(userAverageSessionData)
  // console.log("=======================")

  const userData = new UserAverageSessionsModel(userAverageSessionData);
  // Creates the array Recharts uses to get the data.
  const data = [userData];
  // console.log(userData)

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
          {/* <YAxis datakey="sessionLength"/> */}
          <Tooltip />
          {/* <Legend /> */}
          {data.map((data, index) => (
            <Area type="monotone" dot={false} fill="gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.106534) 100%)" fillOpacity={0.1} stroke= "hsl(0, 0%, 100%)" strokeWidth={2} dataKey="sessionLength" data={data.sessions} name="min"  key={index} margin={30} />
          ))}
          {/* <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionGraph;