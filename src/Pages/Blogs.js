// Home.js
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import NoBlogs from "../Components/NoBlogs";
import InfiniteBanner from "../Components/infintebanner";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <NoBlogs />
      <InfiniteBanner />
      <Footer />
    </>
  );
};

export default Blogs;
