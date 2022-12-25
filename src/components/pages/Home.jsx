import React from "react";
import Main from "../Main";
import Albums from '../Albums.jsx'
import Contact from '../Contact'
import Navbar from '../NavBar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Albums />
      <Contact />
    </>
  );
};

export default Home;
