import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../views/Home/Home';
import Profile from '../../views/Profile/Profile';
import Settings from '../../views/Settings/Settings';
import Community from '../../views/Settings/Settings';

const index = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="community" element={<Community />} />
        </Routes>
  );
};

export default index;