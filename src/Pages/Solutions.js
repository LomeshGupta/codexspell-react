// Home.js
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Solutions from "../Components/Solutions";
import InfiniteBanner from "../Components/infintebanner";

const SolutionsPage = () => {
  return (
    <>
      <Navbar />
      <Solutions />
      <InfiniteBanner />
      <Footer />
    </>
  );
};

export default SolutionsPage;
