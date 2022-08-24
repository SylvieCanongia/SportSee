import Navbar from "./../../features/Navbar/Navbar";
import Sidebar from "./../../features/Sidebar/Sidebar";
import Dashboard from "./../../features/Dashboard/Dasboard";
import './profile.scss';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Profile;