import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col mt-20 bg-zinc-500 border-y-4 border-yellow-500">
        <div className="grid grid-cols-4 m-20">
          <div className="ml-5 ">
            <h2 className="text-yellow-400 text-3xl font-bold flex mb-5">
              GymMiniStore
            </h2>
            <p className="text-white">
              Exercise and fit yourself <br /> This is Best Store For you
            </p>
          </div>
          {/* List 1 */}
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold mb-5">INFORMATION</h1>
            <ul>
              <li>
                <a className="text-white">Home</a>
              </li>
              <li>
                <a className="text-white">About us</a>
              </li>
              <li>
                <a className="text-white">Store</a>
              </li>
            </ul>
          </div>
          {/* List 2 */}
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold mb-5">SUPPORT</h1>
            <ul>
              <li>
                <a className="text-white">Blog</a>
              </li>
              <li>
                <a className="text-white">Reviews</a>
              </li>
              <li>
                <a className="text-white">Products</a>
              </li>
            </ul>
          </div>
          {/* List 3 */}
          <div className="flex flex-col items-center">
            <h1 className="text-white font-bold mb-5">NEWSLETTER</h1>
            <p className="text-white mb-5">
              Subscribe to our newsletter <br /> and amazing new updates
            </p>
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
              </span>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-yellow-500 focus:ring-1 "
                placeholder="Your email address"
                type="text"
                name="search"
              />
              <button class="absolute inset-y-0 right-0 flex items-center px-2 border-l border-slate-300 bg-yellow-400 rounded-xl hover:bg-yellow-600">
                Subscribe
              </button>
            </label>
          </div>
        </div>
      </div>
      <div class="w-full bg-zinc-700 p-4 text-center">
        <a className="text-white"> @2023 GymMiniStore</a>
      </div>
    </>
  );
}

export default Footer;
