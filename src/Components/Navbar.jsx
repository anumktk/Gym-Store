import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Assets/cart5.png";
import searchIcon from "../Assets/search.png";
import dumbells from "../Assets/dumbell.png";

const navbar = () => {
  return (
    <header className="flex py-2 items-center justify-between">
      <div className="px-8 ">
        <img src={dumbells} alt="dumbells" className="h-10 w-10" />
        <h2 className="text-yellow-400 text-3xl font-bold flex ">
          GymMiniStore
        </h2>
      </div>
      <ul className="flex space-x-20  ">
        <li className="text-yellow-400 hover:underline text-2xl font-serif">
          <Link to="/">Home</Link>
        </li>
        <li className="text-yellow-400 hover:underline text-2xl font-serif">
          <Link to="/Store">Store</Link>
        </li>
        <li className="text-yellow-400 hover:underline text-2xl font-serif">
          <Link to="/Blog">Blog</Link>
        </li>
      </ul>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <input
          className="placeholder:text-slate-400 block bg-zinc-600 w-full border border-zinc-700 py-2 pl-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm rounded-2xl

"
          // placeholder="Search for anything..."
          type="text"
          name="search"
          style={{
            backgroundImage: `url(${searchIcon})`,
            backgroundSize: "20px 20px",
            backgroundPosition: "right 10px top 50%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </label>

      <div className="rounded-full size-16 p-2  mr-8">
        <img src={Cart} alt="cart5" width={50} />
      </div>
    </header>
  );
};
export default navbar;
