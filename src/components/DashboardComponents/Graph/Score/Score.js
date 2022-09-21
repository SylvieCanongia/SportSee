import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';
import { USER_MAIN_DATA } from '../../../../mocks/mock-data';
// import {getUserMainData} from '../../../../service/user-http.service';
import { UserMainDataModel } from '../../../../service/models/UserMainDataModel';
import './score.scss';

const Score = ({id}) => {
  // console.log(id)
  const userMainData = USER_MAIN_DATA.find((userData) => userData.id === id);
  // console.log("userData mock :", userMainData);
  // console.log("--- création model MainUserData mock ---")
  const userData = new UserMainDataModel(userMainData);
  // console.log(userData)

  // Creates the array Recharts uses to get the data.
  const data = [userData];
  const scoreInPercentage = data[0].todayScore * 100;
  const scoreInDegrees = data[0].todayScore * 360;
  // console.log(data)
  // console.log(data[0].todayScore)
  return (
    <div className='score'>
    <h3 className='scoreLabel'>Score</h3>
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
    </div>
  );
};

export default Score;