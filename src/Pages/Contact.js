import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import ContactCom from "../Components/ContactCom";
import Footer from "../Components/footer";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>💛 Contact Haidar</title>
        <meta
          name="description"
          content="Welcome to Haidar Aziz's portfolio contactpage."
        />
      </Helmet>
      <Header />
      <ContactCom />
      <Footer />
    </>
  );
};
export default Contact;
