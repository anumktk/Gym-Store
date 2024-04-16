import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import Products from "./Products";
import Bmi from "./Bmi";
import Reviews from "./Reviews";
import Blogs from "./Blogs";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-zinc-700">
      <Navbar />
      <Header />
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
