import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../views/Home/Home';
import Profile from '../../views/Profile/Profile';
import Settings from '../../views/Settings/Settings';
import Community from '../../views/Community/Community';
import Error from './../../features/Error/Error';

const index = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="user/:id"
            element={<Profile mock={false}/>}
          />
          <Route
            path="user/mocked/:id"
            element={<Profile mock={true}/>}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="community" element={<Community />} />
          {/* default route if no other matches */}
          <Route path="*" element={<Error />} />
        </Routes>
  );
};

export default index;