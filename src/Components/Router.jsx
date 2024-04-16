import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Store from "../Components/Store";
import Blog from "../Components/Blog";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
