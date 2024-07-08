import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import Products from "./Products";
import Bmi from "./Bmi";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Card from "./Card";

const Home = () => {
  return (
    <div className="bg-[#373737]">
      <Navbar />
      <Hero />
      <Card />
      <Section />
      <Products />
      <Bmi />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
