import React from "react";
import BackgroundImg from "../Assets/Background.png";
import QualityEquipments from "../Assets/QyalityEquipments.png";
import weightLoss from "../Assets/weightLoss.png";
import DietChart from "../Assets/DietChart.png";
import "@fontsource/averia-serif-libre"; // Defaults to weight 400

const Header = () => {
  return (
    <>
      <div
        className="flex justify-center textalign-center"
        style={{
          backgroundImage: `url(${BackgroundImg}`,
          width: "100%",
          height: "800px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-col ">
          <h2 className="text-yellow-400 text-4xl text-justify mt-80 mb-2 font-serif">
            CHANGE
          </h2>
          <h2 className="text-white text-4xl text-justify font-serif	text-justify center">
            YOUR LIFESTYLE
          </h2>
        </div>
      </div>

      {/* grid  */}
      <div className="flex justify-center bg-zinc-700 ">
        <div class="grid grid-cols-3 gap-4 rounded-3xl bg-zinc-400 p-10 divide-x-4  divide-yellow-400  bg-opacity-50 bg-blend-overlay ">
          <div className="text-white text-2xl flex font-serif">
            <img
              src={QualityEquipments}
              alt="Quality Equipments"
              style={{ marginRight: "10px", width: "50px", height: "50px" }}
            />
            Quality Equipments
          </div>

          <div className="text-white text-2xl flex font-serif">
            <img
              src={weightLoss}
              alt="weightLoss"
              style={{ marginRight: "10px", width: "50px", height: "50px" }}
            />
            Weight Loss
          </div>
          <div className="text-white text-2xl flex font-serif">
            <img
              src={DietChart}
              alt="DietChart"
              style={{ marginRight: "10px", width: "50px", height: "50px" }}
            />
            Diet Chart
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
