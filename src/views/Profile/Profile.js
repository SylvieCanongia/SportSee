import React from 'react';
import Sidebar from "./../../components/Sidebar/Sidebar";
import Dashboard from "./../../features/Dashboard/Dasboard";
import './profile.scss';

const Profile = () => {
  return (
    <div className="Profile">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Profile;