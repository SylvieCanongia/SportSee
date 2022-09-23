import React from 'react';
import { useParams } from "react-router-dom";
import Dashboard from "./../../features/Dashboard/Dasboard";
import './profile.scss';

const Profile = () => {
  // Get the userId param from the URL.
  const { id } = useParams();
  // console.log(typeof id)
  return (
    <div className="Profile">
      {/* id is type string so it is converted to number */}
      <Dashboard id={Number(id)}/>
    </div>
  );
};

export default Profile;