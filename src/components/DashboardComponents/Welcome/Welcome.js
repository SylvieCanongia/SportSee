import { useEffect, useState } from 'react';
// import { USER_MAIN_DATA } from '../../../mocks/mock-data';
import {getUserMainData} from '../../../service/user-http.service';
import { UserMainDataModel } from '../../../service/models/UserMainDataModel';
import './welcome.scss';

const Welcome = ({ id }) => {
  // MOCK DATA --------
  // const userData = USER_MAIN_DATA.find((userData) => userData.id === id);
  // const user = new UserMainDataModel(userData)
  // const data = user.userInfos
  // ------------------

  // API DATA
  const [data, setData] = useState(null);

  useEffect(() => {
   
    getUserMainData(id)
      .then((response) => {
        const userData = new UserMainDataModel(response.data)
        setData(userData.userInfos);
      });
  }, [id]); 

  return (
    <div className='welcome'>
      { data && <p>Bonjour <span className='welcome__userName'> { data.firstName }</span></p> }
      
      <p className="welcome__congrats">Félicitations ! Vous avez explosé vos objectifs hier <span>&#128079;</span></p>
    </div> 
  );
};

export default Welcome;