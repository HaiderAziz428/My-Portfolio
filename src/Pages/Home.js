// src/Pages/Home.js
import React from "react";
import { Helmet } from "react-helmet";
import "./Home.css";
import Header from "../Components/Header";
import MainPage from "../Components/MainPage";
import Footer from "../Components/footer";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>💛Haidar Aziz</title>
        <meta
          name="description"
          content="Welcome to Haidar Aziz's portfolio homepage."
        />
      </Helmet>

      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default Home;
