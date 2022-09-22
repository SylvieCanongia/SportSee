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
        // console.log(response.data.userInfos)
        setData(new UserMainDataModel(response.data));
      });
  }, [id]); 

  return (
    <div className='welcome'>
      {/* MOCK DATA */}
      {/* <p>Bonjour <span className='welcome__userName'> { data.firstName }</span></p> */}
      
      {/* API DATA */}
      { data && <p>Bonjour <span className='welcome__userName'> { data.userInfos.firstName }</span></p> }
      
      <p className="welcome__congrats">Félicitations ! Vous avez explosé vos objectifs hier <span>&#128079;</span></p>
    </div> 
  );
};

export default Welcome;