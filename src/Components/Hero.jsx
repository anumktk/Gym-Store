import React from "react";
import BackgroundImg from "../Assets/Background.png";

const Hero = () => {
  return (
    <div className="">
      <div className="h-screen text-white relative">
        <img
          src={BackgroundImg}
          alt="BackgroundImg"
          className="absolute inset-0 w-full h-full object-cover object-center -mt-20"
        />
        <div className="z-10 flex flex-col justify-center items-center h-full text-center relative">
          <h2
            id="changeText"
            className="text-yellow-400 text-5xl  mb-2 font-averia"
          >
            CHANGE
          </h2>
          <h2 className="text-white text-5xl  font-averia">YOUR LIFESTYLE</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//<div
//   className="flex justify-center textalign-center"
//   style={{
//     backgroundImage: `url(${BackgroundImg}`,
//     width: "100%",
//     height: "800px",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   }}
// >
//   <div className="flex-col text-center">
//     <h2 className="text-yellow-400 text-7xl mt-80 mb-2 font-averia">
//       CHANGE
//     </h2>
//     <h2 className="text-white text-7xl font-averia">YOUR LIFESTYLE</h2>
//   </div>
// </div>
