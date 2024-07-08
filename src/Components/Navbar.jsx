import React from "react";
import { Link } from "react-router-dom";
import cart from "../Assets/cart.png";
import searchIcon from "../Assets/search.png";
import logo from "../Assets/logo.png";

const navbar = () => {
  return (
    <header className="flex py-2 items-center justify-between relative z-10">
      <div className="px-8 flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="h-5 w-10 " />
        <h2 className="text-yellow-400 text-2xl  font-potta ">
          Gym<span className="text-white">Mini</span>Store
        </h2>
      </div>
      <ul className="flex space-x-20  ">
        <li className="text-yellow-400 hover:underline text-2xl font-Poppins">
          <Link to="/">Home</Link>
        </li>
        <li className="text-yellow-400 hover:underline text-2xl font-Poppins">
          <Link to="/Store">Store</Link>
        </li>
        <li className="text-yellow-400 hover:underline text-2xl font-Poppins">
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

      <div className="rounded-full bg-[#77747278] size-16 p-2 flex items-center justify-center mr-8">
        <img src={cart} alt="cart" width={30} />
      </div>
    </header>
  );
};
export default navbar;
// import React from "react";
// import { Link } from "react-router-dom";
// import cart from "../Assets/cart.png";
// import searchIcon from "../Assets/search.png";
// import logo from "../Assets/logo.png";
// import BackgroundImg from "../Assets/Background.png"; // Import Hero image

// const Navbar = () => {
//   return (
//     <header className="flex py-2 items-center justify-between absolute">
//       {/* Hero image positioned absolutely */}
//       <img
//         src={BackgroundImg}
//         alt="BackgroundImg"
//         className="object-cover object-center w-full h-full absolute inset-0 z-0"
//       />
//       <div className="px-8 flex flex-col items-center justify-center relative z-10">
//         <img src={logo} alt="logo" className="h-5 w-10" />
//         <h2 className="text-yellow-400 text-2xl font-potta ">
//           Gym<span className="text-white">Mini</span>Store
//         </h2>
//       </div>
//       <ul className="flex space-x-20 relative z-10">
//         <li className="text-yellow-400 hover:underline text-2xl font-Poppins">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="text-yellow-400 hover:underline text-2xl font-Poppins">
//           <Link to="/Store">Store</Link>
//         </li>
//         <li className="text-yellow-400 hover:underline text-2xl font-Poppins">
//           <Link to="/Blog">Blog</Link>
//         </li>
//       </ul>
//       <label className="relative block">
//         <span className="sr-only">Search</span>
//         <input
//           className="placeholder:text-slate-400 block bg-zinc-600 w-full border border-zinc-700 py-2 pl-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm rounded-2xl"
//           type="text"
//           name="search"
//           style={{
//             backgroundImage: `url(${searchIcon})`,
//             backgroundSize: "20px 20px",
//             backgroundPosition: "right 10px top 50%",
//             backgroundRepeat: "no-repeat",
//           }}
//         />
//       </label>

//       <div className="rounded-full bg-[#77747278] size-16 p-2 flex items-center justify-center mr-8">
//         <img src={cart} alt="cart" width={30} />
//       </div>
//     </header>
//   );
// };

// export default Navbar;
