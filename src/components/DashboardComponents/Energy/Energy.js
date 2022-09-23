import React, { useEffect, useState } from 'react';
// import { USER_MAIN_DATA } from '../../../mocks/mock-data';
import { getUserMainData } from '../../../service/user-http.service';
import { UserMainDataModel } from '../../../service/models/UserMainDataModel';

import CaloriesIcon from './calories-icon.svg';
import ProteinIcon from './protein-icon.svg';
import SugarIcon from './carbs-icon.svg';
import LipidIcon from './fat-icon.svg';

import './energy.scss';

const Energy = ({ id }) => {
  // MOCKED DATA --------
  // const userData = USER_MAIN_DATA.find((userData)=> userData.id === id);
  // console.log(userData);
  // const user = new UserMainDataModel(userData);
  // console.log(user);
  // const energyData = user.keyData;
  // console.log(energyData)
  // ------------------

  // API DATA
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserMainData(id)
      .then((response) => {
        const userData = new UserMainDataModel(response.data)
        setData(userData.keyData);
      });
  }, [id]);

  return (

    <div className='energy'>
    { data &&
      <React.Fragment>
        <div className='energyCard'>
          <div className="icon">
            <img src={CaloriesIcon} alt="Calories icon" />
          </div>
          <div className="energyData"><span className='energyCount'>{data.calorieCount}kCal</span><span>Calories</span> </div>
        </div>
        <div className='energyCard'>
          <div className="icon">
            <img src={ProteinIcon} alt="Proteins icon" />
          </div>
          <div className="energyData"><span className='energyCount'>{data.proteinCount}g</span><span>Protéines</span> </div>
        </div>
        <div className='energyCard'>
          <div className="icon">
            <img src={SugarIcon} alt="Sugars icon" />
          </div>
          <div className="energyData"><span className='energyCount'>{data.carbohydrateCount}g</span><span>Glucides</span></div>
        </div>
        <div className='energyCard'>
          <div className="icon">
            <img src={LipidIcon} alt="Lipids icon" />
          </div>
          <div className="energyData"><span className='energyCount'>{data.lipidCount}g</span><span>Lipides</span> </div>
        </div>
        </React.Fragment>
    }
    </div>
  );
};

export default Energy;