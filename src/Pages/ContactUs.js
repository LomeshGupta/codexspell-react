// Home.js
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactFormCard from "../Components/ContactForm";
import InfiniteBanner from "../Components/infintebanner";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <ContactFormCard />
      <InfiniteBanner />
      <Footer />
    </>
  );
};

export default ContactUs;
