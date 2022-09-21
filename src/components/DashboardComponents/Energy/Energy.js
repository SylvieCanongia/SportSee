import { USER_MAIN_DATA } from '../../../mocks/mock-data';
// import {getUserMainData} from '../../../service/user-http.service';
import { UserMainDataModel } from '../../../service/models/UserMainDataModel';

import CaloriesIcon from './calories-icon.svg';
import ProteinIcon from './protein-icon.svg';
import SugarIcon from './carbs-icon.svg';
import LipidIcon from './fat-icon.svg';

import './energy.scss';

const Energy = ({ id }) => {
  const userData = USER_MAIN_DATA.find((userData)=> userData.id === id);
  // console.log(userData);

  const user = new UserMainDataModel(userData);
  // console.log(user);

  const energyData = user.keyData;
  // console.log(energyData)

  return (
    <div className='energy'>
      <div className='energyCard'>
        <div className="icon">
          <img src={CaloriesIcon} alt="Calories icon" />
        </div>
        <div className="energyData"><span className='energyCount'>{energyData.calorieCount}kCal</span><span>Calories</span> </div>
      </div>
      <div className='energyCard'>
        <div className="icon">
          <img src={ProteinIcon} alt="Proteins icon" />
        </div>
        <div className="energyData"><span className='energyCount'>{energyData.proteinCount}g</span><span>Protéines</span> </div>
      </div>
      <div className='energyCard'>
        <div className="icon">
          <img src={SugarIcon} alt="Sugars icon" />
        </div>
        <div className="energyData"><span className='energyCount'>{energyData.carbohydrateCount}g</span><span>Glucides</span></div>
      </div>
      <div className='energyCard'>
        <div className="icon">
          <img src={LipidIcon} alt="Lipids icon" />
        </div>
        <div className="energyData"><span className='energyCount'>{energyData.lipidCount}g</span><span>Lipides</span> </div>
      </div>
    </div>
  );
};

export default Energy;