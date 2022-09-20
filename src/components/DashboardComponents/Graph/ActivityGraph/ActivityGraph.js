import React, { PureComponent } from "react";
import { BarChart, Bar, ReferenceLine, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text, ResponsiveContainer } from "recharts";

import { USER_ACTIVITY } from "../../../../mocks/mock-data";
// import {getUserActivity} from '../../../../service/user-http.service';
import { UserActivityModel } from "./../../../../service/models/UserActivityModel";
import "./activityGraph.scss";

const data = [
  {
    day: "1",
    kilogram: 80,
    calories: 240,
  },
  {
    day: "2",
    kilogram: 80,
    calories: 220,
  },
  {
    day: "3",
    kilogram: 81,
    calories: 280,
  },
  {
    day: "4",
    kilogram: 81,
    calories: 290,
  },
  {
    day: "5",
    kilogram: 80,
    calories: 160,
  },
  {
    day: "6",
    kilogram: 78,
    calories: 162,
  },
  {
    day: "7",
    kilogram: 76,
    calories: 39,
  },
];

const ActivityGraph = () => {
  return (
    <div className="activityGraph">
      <h3 className="activityGraphTitle">Activité quotidienne</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={835}
          // height={320}
          outerRadius={60}
          data={data}
          margin={{
            top: 15,
            right: 5,
            left: 25,
            bottom: 15,
          }}
          barSize={7}
          barGap={8}
          // background={{fill: "#FBFBFB"}}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" stroke="hsl(228, 9%, 64%)" />
          <YAxis stroke="hsl(228, 9%, 64%)" orientation="right" />
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
