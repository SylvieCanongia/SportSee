import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Dashboard from "./../../features/Dashboard/Dasboard";
import './profile.scss';

const Profile = () => {
  // Get the userId param from the URL.
  const { id } = useParams();
  // console.log( id )
  // console.log(typeof id)
  
  let navigate = useNavigate();

  useEffect(() => {
    if(id !== "12" && id !== "18") {
      navigate('/Error', { replace: true });
    }}
  );
 
  return (
    <div className="Profile">
      {/* id is type string so it is converted to number */}
      <Dashboard id={Number(id)}/>
    </div>
  );
};

export default Profile;