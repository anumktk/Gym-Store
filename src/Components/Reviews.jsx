import React from "react";
import man1 from "../Assets/man1.png";
import man2 from "../Assets/man2.png";

function Feedback() {
  return (
    <div className="flex flex-col items-center m-20">
      <h1 className="text-white text-5xl mb-10 underline underline-offset-8 decoration-yellow-500 font-serif">
        Client’s Feedback
      </h1>
      {/* grid */}
      <div className="grid grid-cols-1 gap-8">
        {/* row 1 */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={man1}
              alt="man1"
              className="w-44 h-44 rounded-full border-8 border-yellow-500 "
            />
          </div>
          <div className="bg-[#808080]  py-8 px-24 border-8 border-yellow-500 rounded-r-full abosulte -ml-12">
            <h1 className="font-Poppins text-start text-white">MR JOHN</h1>
            <p className="font-Poppins text-center text-gray-200h text-xs">
              This is Brilliant store i buy a treadmil from this store the
              results is marvellous
            </p>

            {/* stars code */}
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 ml-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex items-center">
          <div className="bg-[#808080] py-8 px-24 border-8 border-yellow-500 rounded-l-full -mr-12">
            <h1 className="font-Poppins text-end text-white">MR SMITH</h1>
            <p className="font-Poppins text-center text-gray-200 text-xs">
              This is Brilliant store i buy a treadmil from this store the
              results is marvellous
            </p>

            {/* stars code */}
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 ml-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="-right-12">
            <img
              src={man2}
              alt="man2"
              className="w-44 h-44 rounded-full border-8 border-yellow-500 "
            />
          </div>
        </div>
        {/* row 3 */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={man1}
              alt="man1"
              className="w-44 h-44 rounded-full border-8 border-yellow-500 "
            />
          </div>
          <div className="bg-[#808080]  py-8 px-24 border-8 border-yellow-500 rounded-r-full abosulte -ml-12">
            <h1 className="font-Poppins text-start text-white">MR JOHN</h1>
            <p className="font-Poppins text-center text-gray-200h text-xs">
              This is Brilliant store i buy a treadmil from this store the
              results is marvellous
            </p>

            {/* stars code */}
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 ml-1 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
