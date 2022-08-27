import { NavLink } from "react-router-dom";
import "./navbar.scss";
import LogoNavbar from './logo.svg';

const Navbar = () => {
  return (
      <nav className="navbar">
      <div className="nav__container">
        <div className="nav__container__logo">
          <NavLink exact="true" to="/">
            <div className="logo">
              <img src={LogoNavbar} alt="Kasa logo" />
            </div>
          </NavLink>
        </div>
        <ul className="nav__container__menu">
          <li className="homeLink">
            <NavLink exact="true" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="profilLink">
            <NavLink exact="true" to="/profile">
              Profil
            </NavLink>
          </li>
          <li className="settingsLink">
            <NavLink exact="true" to="/settings">
              Réglage
            </NavLink>
          </li>
          <li className="communityLink">
            <NavLink exact="true" to="/community">
              Communauté
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;