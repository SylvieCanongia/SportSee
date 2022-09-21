import CaloriesIcon from './calories-icon.svg';
import ProteinIcon from './protein-icon.svg';
import SugarIcon from './carbs-icon.svg';
import LipidIcon from './fat-icon.svg';

import './energy.scss';

const Energy = () => {
  return (
    <div className='energy'>
      <div className='energyCard'>
        <div className="icon">
          <img src={CaloriesIcon} alt="Calories icon" />
        </div>
        <div className="energyData"><span className='energyCount'>1930kCal</span><span>Calories</span> </div>
      </div>
      <div className='energyCard'>
        <div className="icon">
          <img src={ProteinIcon} alt="Proteins icon" />
        </div>
        <div className="energyData"><span className='energyCount'>155g</span><span>Proteines</span> </div>
      </div>
      <div className='energyCard'>
        <div className="icon">
          <img src={SugarIcon} alt="Sugars icon" />
        </div>
        <div className="energyData"><span className='energyCount'>290g</span><span>Glucides</span> </div>
      </div>
      <div className='energyCard'>
        <div className="icon">
          <img src={LipidIcon} alt="Lipids icon" />
        </div>
        <div className="energyData"><span className='energyCount'>50g</span><span>Lipides</span> </div>
      </div>
    </div>
  );
};

export default Energy;