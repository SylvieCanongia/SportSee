import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from '../../mocks/mock-data';

import './home.scss';

const Home = () => {
  const userData = USER_MAIN_DATA;
  
  return (
    <div className="home">
    <div>Cliquez sur les boutons</div>
      <div>
      {/* Route for mocked data */}
        {userData.map((user) => (
          <Link key={`user-${user.id}`} to={`/user/mocked/${user.id}`} >
            <button className="homeButton mock">Utilisateur {user.id}, données mockées</button>
          </Link>
        ))}
      </div>
      <div>
        {userData.map((user) => (
          <Link key={`user-${user.id}`} to={`/user/${user.id}`} >
            <button className="homeButton api">Utilisateur {user.id}, données API</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;