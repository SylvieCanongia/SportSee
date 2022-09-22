import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { USER_ACTIVITY } from "../../../../mocks/mock-data";
import {getUserActivity} from '../../../../service/user-http.service';
import { UserActivityModel } from "./../../../../service/models/UserActivityModel";
import "./activityGraph.scss";

const ActivityGraph = ({ id }) => {
  // MOCK DATA --------
  // const userActivityData = USER_ACTIVITY.find((userData) => userData.userId === id);
  // const userData = new UserActivityModel(userActivityData);
  // const data = userData.sessions;
  // ------------------

  // API DATA
  const [data, setData] = useState(null);

  useEffect(() => {
   
    getUserActivity(id)
      .then((response) => {
        // console.log(response.data.userInfos)
        const userData = new UserActivityModel(response.data);
        setData(userData.sessions);
      });
  }, [id]);

  return (
    <div className="activityGraph">
      <h3 className="activityGraphTitle">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          outerRadius={60}
          data={data}
          margin={{
            top: 24,
            right: 5,
            left: 25,
            bottom: 24,
          }}
          barSize={7}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" stroke="hsl(228, 9%, 64%)" tickLine={0} />
          <YAxis stroke="hsl(228, 9%, 64%)" orientation="right" tickLine={0} axisLine={false}/>
          <Tooltip />
          <Legend verticalAlign="top" align="right" height={45} iconType="circle" iconSize="10" wrapperStyle={{ paddingRight: "10px", fontSize: "14px" }} />
          <Bar dataKey="kilogram" name="Poids (kg)" fill="hsl(203, 9%, 17%)" radius={[50, 50, 0, 0]} width={10} />
          <Bar dataKey="calories" name="Calories brûlées (kCal)" radius={[50, 50, 0, 0]} fill="hsl(0, 100%, 45%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;
