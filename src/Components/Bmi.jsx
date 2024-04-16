import React, { useState } from "react";
import BmiImag from "../Assets/bmiImg.png";

function Bmi2() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (height && weight && age) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
    } else {
      alert("Please enter height, weight, and age.");
    }
  };

  return (
    <div className="flex flex-col items-center m-20">
      <h1 className="text-white text-5xl  mb-10 underline underline-offset-8 decoration-yellow-500 font-serif">
        Calculate Your BMI
      </h1>
      <div className="grid grid-cols-2 gap-12 mt-10">
        <div>
          <img src={BmiImag} alt="BmiImg" className="rounded-3xl" />
        </div>
        <div>
          <h1 className="text-white font-serif text-2xl mb-5">
            Advanced Calculator
          </h1>
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <label className="text-white font-semibold">Gender:</label>
              <br />
              <select
                className="w-48 px-3 py-2 mt-2 rounded-xl border border-2 border-yellow-500 focus:outline-none focus:border-4"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="... flex-col">
              <label className="text-white font-semibold">Age:</label>
              <br />
              <input
                type="number"
                className="w-48 px-3 py-2 mt-2 rounded-xl border border-2 border-yellow-500 focus:outline-none focus:border-4"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div class="...">
              <label className="text-white font-semibold">Weight (kg):</label>
              <input
                type="number"
                className="w-48 px-3 py-2 mt-2 rounded-xl border border-2 border-yellow-500 focus:outline-none focus:border-4"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div class=" ...">
              {" "}
              <label className="text-white font-semibold">Height (cm):</label>
              <br />
              <input
                type="number"
                className="w-48 px-3 py-2 mt-2 rounded-xl border border-2 border-yellow-500 focus:outline-none focus:border-4"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div class="...">
              {" "}
              <button
                className="bg-yellow-300 border-blue-300 text-black w-48 font-bold py-3 px-6 rounded-xl focus:outline-none focus:shadow-outline mt-4 hover:bg-yellow-600"
                onClick={calculateBMI}
              >
                Calculate BMI
              </button>
            </div>
            <div class="col-span-2 ...">
              {bmi && (
                <label className="text-white font-semibold">
                  Result is : {bmi}
                </label>
              )}

              {/* {bmi && (
                  <div className="bg-zinc-500 px-4 py-2 mt-4 rounded">
                    <p className="text-white font-semibold">
                      Result is : {bmi}
                    </p>
                  </div>
                )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bmi2;
