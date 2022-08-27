import React from "react";
import Routes from "../Routes/Routes";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="middleContent">
        <Sidebar />
        <Routes />
      </section>
    </div>
  );
}

export default App;
