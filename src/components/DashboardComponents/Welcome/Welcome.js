import { useEffect, useState } from 'react';
import { USER_MAIN_DATA } from '../../../mocks/mock-data';
import {getUserMainData} from '../../../service/user-http.service';
import { UserMainDataModel } from '../../../service/models/UserMainDataModel';
import './welcome.scss';

const Welcome = ({ id }) => {
  console.log(getUserMainData(id))
  console.log("USER_MAIN_DATA mock :", USER_MAIN_DATA);
  console.log("props 'id' héritée de 'Dashboard' :", id);
  const userData = USER_MAIN_DATA.find((userData) => userData.id === id)
  console.log("userData mock :", userData);
  console.log("--- création model MainUserData mock ---")
  const user = new UserMainDataModel(userData)
  console.log(user)

  // const [userMainInfos, setUserMainInfos] = useState(null);

  // useEffect(() => {
   
  //   getUserMainData(id)
  //     .then((response) => {
  //       console.log(response.data)
  //       setUserMainInfos(response.data);
  //     });
  // }, []);

  // console.log("userMainInfos depuis le state : ", userMainInfos) => affiche bien un objet contenant les infos du user d'après son id
  
  // console.log(userMainInfos.userInfos.age)
  // const user = new UserMainDataModel(userMainInfos)

  return (
    <div className='welcome'>
      <p>Bonjour <span className='welcome__userName'> { user.userInfos.firstName }</span></p>
      <p className="welcome__congrats">Félicitations ! Vous avez explosé vos objectifs hier <span>&#128079;</span></p>
    </div>
  );
};

export default Welcome;