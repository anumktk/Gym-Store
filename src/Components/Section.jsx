import sectionImg from "../Assets/SectionImg.png";

export default function Section() {
  return (
    <div className="flex justify-center bg-zinc-700 m-20">
      <div class="grid grid-rows-3 grid-flow-col gap-40">
        <div class="row-span-3 ">
          <img
            src={sectionImg}
            alt="sectionImg"
            style={{ width: "450px", height: "400px" }}
            className="rounded-3xl"
          />
        </div>
        {/* <div class="bg-white ">
          <h3>Best Workout Machine</h3>
        </div> */}
        <div class="row-span-3">
          <h1 className="text-white text-3xl font-serif">
            Get Ready to Reach <br /> Your Fitness Goals
          </h1>
          <p className="text-white ">
            Combining aerobic exercise with other kinds of
            <br />
            exercises like strength training with weights and
            <br />
            stretching keeps muscles,ligaments, joints, and
            <br />
            tendons healthy, flexible, and strong, sowhen one
            <br />
            becomes older,
            <br />
            He is stronger and has less risk of being out of
            <br />
            balance and falling causing fractures or other
            <br />
            injuries
          </p>
          <button className="rounded-full text-black bg-yellow-300 hover:bg-yellow-600 px-8 py-2 mt-6">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
