import React, { PureComponent } from 'react';
import { BarChart, Bar, ReferenceLine, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { USER_ACTIVITY } from '../../../../mocks/mock-data';
import { UserActivityModel } from './../../../../service/models/UserActivityModel'
import './activityGraph.scss';

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240,
    amt: 2400
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220,
    amt: 2210
  },
  {
    day: '2020-07-03',
    kilogram: 81,
    calories: 280,
    amt: 2290
  },
  {
    day: '2020-07-04',
    kilogram: 81,
    calories: 290,
    amt: 2000
  },
  {
    day: '2020-07-05',
    kilogram: 80,
    calories: 160,
    amt: 2181
  },
  {
    day: '2020-07-06',
    kilogram: 78,
    calories: 162,
    amt: 2500
  },
  {
    day: '2020-07-07',
    kilogram: 76,
    calories: 39,
    amt: 2100
  }
];


const ActivityGraph = () => {
  return (
    <div className='activityGraph'>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        // width={835}
        // height={320}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
        barSize={7}
        barGap={8}
      >
      <CartesianGrid strokeDasharray="2 2" vertical={false} />
      <XAxis dataKey="day" stroke="hsl(228, 9%, 64%)"/>
      <YAxis stroke="hsl(228, 9%, 64%)"/>
      <Tooltip />
      <Legend verticalAlign="top" align="right" height={25} wrapperStyle={{ marginTop: '25px', marginBottom: '25px'}} />
      <Bar dataKey="kilogram" name="Poids (kg)" fill="hsl(203, 9%, 17%)" width={10}/>
      <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="hsl(0, 100%, 45%)" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;