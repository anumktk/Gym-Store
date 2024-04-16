import React from "react";
import foot from "../Assets/foot.png";
import yoga from "../Assets/yoga.png";
import exercise from "../Assets/exercise.png";
import fruits from "../Assets/fruits.png";

function Blogs() {
  return (
    <>
      <div className="flex flex-col items-center m-10 ">
        <h1 className="text-white text-5xl mb-10 underline underline-offset-8 decoration-yellow-500 font-serif">
          Best Blogs
        </h1>
      </div>
      {/* combined grid */}
      <div className="grid grid-cols-4">
        <div>
          <img src={foot} alt="foot" />
        </div>

        <div className="bg-zinc-500 flex flex-col justify-center items-center">
          <h1 className="text-black text-2xl mb-2 font-serif font-bold">
            Gym Equipments
          </h1>
          <p className="text-white mb-2">
            Weight loss is really
            <br /> important for our health
          </p>
          <button className="rounded-full text-black border-2 border-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
            Read More
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${fruits})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* <div>
          <img src={fruits} alt="fruits" />
        </div> */}
        <div className="bg-zinc-500 flex flex-col justify-center items-center">
          <h1 className="text-white  text-2xl mb-2 font-serif font-bold">
            Yoga
          </h1>
          <p className="text-black mb-2">
            Weight loss is really
            <br /> important for our health
          </p>
          <button className="rounded-full text-black bg-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
            Read More
          </button>
        </div>

        <div className="bg-zinc-500 flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl mb-2 font-serif font-bold">
            Weight Loss{" "}
          </h1>
          <p className="text-black mb-2">
            Weight loss is really
            <br /> important for our health
          </p>
          <button className="rounded-full text-black bg-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
            Read More
          </button>
        </div>
        <div>
          <img src={exercise} alt="exercise" />
        </div>

        <div className="bg-zinc-500 flex flex-col justify-center items-center">
          <h1 className="text-white  text-2xl mb-2 font-serif font-bold">
            Healthy LifeStyle
          </h1>
          <p className="text-black mb-2">
            Weight loss is really
            <br /> important for our health
          </p>
          <button className="rounded-full text-black bg-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
            Read More
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${yoga})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* <div>
          <img src={yoga} alt="yoga" />
        </div> */}
      </div>
    </>
  );
}

export default Blogs;

// import React from "react";
// import foot from "../Assets/foot.png";
// import yoga from "../Assets/yoga.png";
// import exercise from "../Assets/exercise.png";
// import fruits from "../Assets/fruits.png";

// function Blogs() {
//   return (
//     <>
//       <div className="flex flex-col items-center m-10 ">
//         <h1 className="text-white text-5xl mb-10 underline underline-offset-8 decoration-yellow-500 ">
//           Best Blogs
//         </h1>
//       </div>
//       {/* grid 1 */}
//       <div className="grid grid-cols-4">
//         <div>
//           <img src={foot} alt="foot" />
//         </div>

//         <div className="bg-zinc-500 flex flex-col justify-center items-center">
//           <h1 className="text-black text-2xl">Gym Equipments</h1>
//           <p className="text-white">
//             Weight loss is really
//             <br /> important for our health
//           </p>
//           <button className="rounded-full text-black bg-yellow-300 px-8 py-2 mt-6">
//             Read More
//           </button>
//         </div>

//         <div>
//           <img src={fruits} alt="fruits" />
//         </div>
//         <div className="bg-zinc-500 flex flex-col justify-center items-center">
//           <h1 className="text-black text-2xl">Yoga</h1>
//           <p className="text-white">
//             Weight loss is really
//             <br /> important for our health
//           </p>
//           <button className="rounded-full text-black bg-yellow-300 px-8 py-2 mt-6">
//             Read More
//           </button>
//         </div>
//       </div>
//       {/* grid 2 */}
//       <div className="grid grid-cols-4 ">
//         <div className="bg-zinc-500 flex flex-col justify-center items-center">
//           <h1 className="text-black text-2xl">Weight Loss </h1>
//           <p className="text-white">
//             Weight loss is really
//             <br /> important for our health
//           </p>
//           <button className="rounded-full text-black bg-yellow-300 px-8 py-2 mt-6">
//             Read More
//           </button>
//         </div>
//         <div>
//           <img src={exercise} alt="exercise" />
//         </div>
//         <div className="bg-zinc-500 flex flex-col justify-center items-center">
//           <h1 className="text-black text-2xl">Healthy LifeStyle</h1>
//           <p className="text-white">
//             Weight loss is really
//             <br /> important for our health
//           </p>
//           <button className="rounded-full text-black bg-yellow-300 px-8 py-2 mt-6">
//             Read More
//           </button>
//         </div>
//         <div>
//           <img src={yoga} alt="yoga" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Blogs;
