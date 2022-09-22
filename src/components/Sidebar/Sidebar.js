import { Link } from "react-router-dom";
import './sidebar.scss';
import Meditation from './meditation.svg';
import Swimming from './swimming.svg';
import Cycling from './cycling.svg';
import Bodybuilding from './bodybuilding.svg';

const Sidebar = () => {
  return (
      <nav className="sidebar">
          <ul className="sidebar__menu">
            <li className="meditationLink">
              <Link to="">
                <img src={Meditation} alt="Méditation" />
              </Link>
            </li>
            <li className="swimmingLink">
              <Link to="">
              <img src={Swimming} alt="Natation" />
              </Link>
            </li>
            <li className="cyclingLink">
              <Link to="">
              <img src={Cycling} alt="Vélo" />
              </Link>
            </li>
            <li className="bodybuildingLink">
              <Link to="">
              <img src={Bodybuilding} alt="Musculation" />
              </Link>
            </li>
          </ul>
          <p className="copyright">
            Copyright, Sportsee 2020
          </p>
      </nav>
  );
};

export default Sidebar;