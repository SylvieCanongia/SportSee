import { Link } from "react-router-dom";

import './home.scss';

/**
 * Component - View Home displaying the Home page
 * @module Home
 * @returns { HTMLElement } HTMLElement
 */
const Home = () => {
  // const userData = USER_MAIN_DATA;
  const userData = [ { id: 12 }, { id:18 } ]
  
  return (
    <div className="home">
    <h2>Cliquez sur les boutons</h2>
      <div>
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