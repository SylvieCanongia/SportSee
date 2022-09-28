import { Link } from "react-router-dom";
// import { USER_MAIN_DATA } from '../../mocks/mock-data';

import './home.scss';

const Home = () => {
  // const userData = USER_MAIN_DATA;
  const userData = [ { id: 12 }, { id:18 } ]
  
  return (
    <div className="home">
    <h2>Cliquez sur les boutons</h2>
      <div>
      <h3>Données mockées</h3>
      {/* Route for mocked data */}
        {userData.map((user) => (
          <Link key={`user-${user.id}`} to={`/user/mocked/${user.id}`} >
            <button className="homeButton mock">Utilisateur {user.id}</button>
          </Link>
        ))}
      </div>
      <div>
      <h3>Données API</h3>
        {userData.map((user) => (
          <Link key={`user-${user.id}`} to={`/user/${user.id}`} >
            <button className="homeButton api">Utilisateur {user.id}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;