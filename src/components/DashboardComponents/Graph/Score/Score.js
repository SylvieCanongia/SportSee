import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';

import './score.scss';

const data = [
  {
    "name": "18-24",
    "score": 0.12,
    "fill": "hsl(0, 100%, 50%)"
  }
]

const Score = () => {
  return (
    <div className='score'>
    <h3 className='scoreLabel'>Score</h3>
    <p className="scoreBarLabel"><span>12 %</span>de votre objectif</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          // width={730} 
          // height={250} 
          innerRadius="85%" 
          outerRadius="100%" 
          data={data} 
          startAngle={-180} 
          endAngle={-180 - (0.12 * 360)}
          
          barSize={10}
        >
          <RadialBar cornerRadius={50} label={false} clockWise={true} dataKey='score' />
          <Tooltip />
          
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;