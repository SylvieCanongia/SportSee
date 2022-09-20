import React from 'react';
import { useParams } from "react-router-dom";
import Dashboard from "./../../features/Dashboard/Dasboard";
import './profile.scss';

const Profile = () => {
  // const { id } = this.props.match.params;
  const { id } = useParams();
  // console.log(typeof id)
  return (
    <div className="Profile">
      <Dashboard id={Number(id)}/>
    </div>
  );
};

export default Profile;