// import sectionImg from "../Assets/SectionImg.png";

// export default function Section() {
//   return (
//     <div className="relative flex space-x-32 items-center justify-center bg-zinc-700 mt-36 m-20">
//       <div className="relative">
//         <img
//           src={sectionImg}
//           alt="sectionImg"
//           style={{ width: "450px", height: "400px" }}
//           className="rounded-3xl"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="bg-white rounded-2xl py-1 text-sm font-Poppins ml-96 text-center font-bold px-24 opacity-90">
//             Best Workout Machine
//           </h1>
//         </div>
//       </div>

//       <div className="ml-10 text-white">
//         <h1 className="text-3xl font-serif">
//           Get Ready to Reach <br /> Your Fitness Goals
//         </h1>
//         <p className="mt-4">
//           Combining aerobic exercise with other kinds of
//           <br />
//           exercises like strength training with weights and
//           <br />
//           stretching keeps muscles, ligaments, joints, and
//           <br />
//           tendons healthy, flexible, and strong. So when one
//           <br />
//           becomes older,
//           <br />
//           he is stronger and has less risk of being out of
//           <br />
//           balance and falling causing fractures or other
//           <br />
//           injuries.
//         </p>
//         <button className="rounded-full text-black bg-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
//           Buy now
//         </button>
//       </div>
//     </div>
//   );
// }

import sectionImg from "../Assets/SectionImg.png";

export default function Section() {
  return (
    <div className="flex space-x-32 items-center justify-center  mt-36 m-20">
      <div className="relative">
        <img
          src={sectionImg}
          alt="sectionImg"
          style={{ width: "450px", height: "400px" }}
          className="rounded-3xl"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="bg-white rounded-2xl py-3 -mr-96  text-sm font-Poppins text-center font-bold px-16 opacity-90">
            Best Workout <br /> Machine
          </h1>
        </div>
      </div>

      <div className="ml-10 text-white">
        <h1 className="text-3xl font-serif">
          Get Ready to Reach <br /> Your Fitness Goals
        </h1>
        <p className="mt-4">
          Combining aerobic exercise with other kinds of
          <br />
          exercises like strength training with weights and
          <br />
          stretching keeps muscles, ligaments, joints, and
          <br />
          tendons healthy, flexible, and strong. So when one
          <br />
          becomes older,
          <br />
          he is stronger and has less risk of being out of
          <br />
          balance and falling causing fractures or other
          <br />
          injuries.
        </p>
        <button className="rounded-full text-black bg-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
          Buy now
        </button>
      </div>
    </div>
  );
}
