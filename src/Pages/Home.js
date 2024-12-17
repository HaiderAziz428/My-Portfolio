// src/Pages/Home.js
import React from "react";

import "./Home.css";
import Header from "../Components/Header";
import MainPage from "../Components/MainPage";
import Footer from "../Components/footer";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <MainPage />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
