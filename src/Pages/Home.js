// Home.js
import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../Components/HeroSection";
import AboutUS from "../Components/About";
import ScrollImageShift from "../Components/ScrollImageShift";
import CenteredBox from "../Components/CenteredBox";
import MarketingGoals from "../Components/MarketingGoals";
import Footer from "../Footer";
import InfiniteBanner from "../Components/infintebanner";
import BlogSection from "../Components/BlogPreview";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUS />
      <MarketingGoals />
      <ScrollImageShift />
      <BlogSection />
      <CenteredBox />
      <InfiniteBanner />
      <Footer />
    </>
  );
};

export default Home;
