import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from '../../mocks/mock-data';

import './home.scss';

const Home = () => {
  const userData = USER_MAIN_DATA;
  
  return (
    <div className="home">
    <div>Cliquez sur les boutons</div>
      <div>
        {userData.map((user) => (
          <Link key={`user-${user.id}`} to={`/user/${user.id}`} >
            <button className="homeButton">Utilisateur {user.id}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;