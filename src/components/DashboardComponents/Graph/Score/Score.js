import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';
// import { USER_MAIN_DATA } from '../../../../mocks/mock-data';
import { getUserMainData } from '../../../../service/user-http.service';
import { UserMainDataModel } from '../../../../service/models/UserMainDataModel';
import './score.scss';

const Score = ({id}) => {
  // MOCKED DATA --------
  // const userMainData = USER_MAIN_DATA.find((userData) => userData.id === id);
  // const userData = new UserMainDataModel(userMainData);
  
  // Creates the array Recharts uses to get the data.
  // const data = [userData];
  // const scoreInPercentage = data[0].todayScore * 100;
  // const scoreInDegrees = data[0].todayScore * 360;
  // ------------------

  // API DATA
  const [data, setData] = useState(null);

  useEffect(() => {
  
  getUserMainData(id)
      .then((response) => {
        const userData = new UserMainDataModel(response.data);
        // Put data into array because format required by Recharts
        setData([userData]);
      });
  }, [id]);

  let scoreInPercentage;
  let scoreInDegrees;

  // Condition if data[0] exists to avoid error : Cannot read
  // properties of null (reading '0')
  if(data) {
    scoreInPercentage = data[0].todayScore * 100;
    scoreInDegrees = data[0].todayScore * 360;
  }

  return (
    <div className='score'>
    <h3 className='scoreLabel'>Score</h3>
    { data &&
    <React.Fragment>
    <p className="scoreBarLabel"><span> {scoreInPercentage} %</span>de votre objectif</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          innerRadius="85%" 
          outerRadius="100%" 
          data={data} 
          startAngle={-180} 
          endAngle={-180 - scoreInDegrees}
          barSize={10}
          margin={{
            top: 30,
            right: 5,
            left: 5,
            bottom: 15,
          }}
        >
          <RadialBar cornerRadius={50} label={false} clockWise={true} dataKey='todayScore' name="Score du jour" fill= "hsl(0, 100%, 50%)"/>
          <Tooltip />
          
        </RadialBarChart>
        </ResponsiveContainer>
        </React.Fragment>
      }
    </div>
  );
};

export default Score;