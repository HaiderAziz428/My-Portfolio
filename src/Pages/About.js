import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import AboutCom from "../Components/AboutCom";
import Footer from "../Components/footer";
const About = () => {
  return (
    <>
      <Helmet>
        <title>💛 About Haidar</title>
        <meta
          name="description"
          content="Welcome to Haidar Aziz's portfolio aboutpage."
        />
      </Helmet>
      <Header />
      <AboutCom />
      <Footer />
    </>
  );
};
export default About;
