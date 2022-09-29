import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { USER_MAIN_DATA } from '../../../mocks/mock-data';
import {getUserMainData} from '../../../service/user-http.service';
import { UserMainDataModel } from '../../../service/models/UserMainDataModel';
import './welcome.scss';

/**
 * Component displaying the welcome message for a user
 * @module Welcome
 * @param { Object } object
 * @param { Integer } object.id - The id of the user
 * @param { Boolean } object.mock - True if is mocked data and false if is API data
 * @returns { HTMLElement } - 
 */
const Welcome = ({ id, mock }) => {
  
   const [data, setData] = useState(null);

   useEffect(() => {
    // ----- MOCK DATA -----
    if(mock === true) {
      const userData = USER_MAIN_DATA.find((userData) => userData.id === id);
      const user = new UserMainDataModel(userData);
      setData(user.userInfos);
    }

    // ----- API DATA -----
    if(mock === false) {
      getUserMainData(id)
        .then((response) => {
          const userData = new UserMainDataModel(response.data)
          setData(userData.userInfos);
        });
      }
   }, [id, mock]);
    
  return (
    <div className='welcome'>
      { data && <p>Bonjour <span className='welcome__userName'> { data.firstName }</span></p> }
      
      <p className="welcome__congrats">Félicitations ! Vous avez explosé vos objectifs hier <span>&#128079;</span></p>
    </div> 
  );
};

Welcome.propTypes = {
  id: PropTypes.number.isRequired,
  mock: PropTypes.bool.isRequired,
}

export default Welcome;