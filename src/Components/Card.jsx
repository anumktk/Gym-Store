import React from "react";
import QualityEquipments from "../Assets/QyalityEquipments.png";
import weightLoss from "../Assets/weightLoss.png";
import DietChart from "../Assets/DietChart.png";
import Line from "../Assets/Line.png";

const Card = () => {
  return (
    <div>
      {/* grid   */}

      <div className="flex justify-center  ">
        <div class="flex gap-2 rounded-3xl absolute -mt-36 bg-[#707070B5]  bg-opacity-50 bg-blend-overlay ">
          <div className="text-white text-2xl ml-3  flex font-averia items-center justify-center">
            <img
              src={QualityEquipments}
              alt="Quality Equipments"
              className="h-10 w-10"
            />
            <h1 className="mr-3"> Quality Equipments</h1>
            <img src={Line} alt="Line" className="h-28" />
          </div>

          <div className="text-white text-2xl flex font-averia items-center justify-center">
            <img
              src={weightLoss}
              alt="weightLoss"
              className="h-10 w-10"
              // style={{ marginRight: "10px", width: "50px", height: "50px" }}
            />
            <h1 className="mr-3"> Weight Loss</h1>
            <img src={Line} alt="Line" className="h-28" />
          </div>
          <div className="text-white text-2xl flex font-averia items-center justify-center">
            <img
              src={DietChart}
              alt="DietChart"
              className="h-10 w-10"
              // style={{ marginRight: "10px", width: "50px", height: "50px" }}
            />
            <h1 className="mr-3">Diet Chart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
