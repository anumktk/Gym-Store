import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/Image2.png";
import Image3 from "../Assets/Image3.png";

function Latest() {
  return (
    <>
      <div className="flex justify-center ">
        <h2 className="text-5xl text-white mb-10 underline underline-offset-8 decoration-yellow-500 font-serif">
          Latest Products
        </h2>
      </div>
      {/* grid */}
      <div className="grid grid-cols-3 gap-8 m-10">
        <div className="col-span-1">
          <img
            src={Image1}
            alt="Image1"
            width={300}
            height={300}
            className="rounded-3xl px-4 py-6 bg-white ml-4"
            style={{ boxShadow: "10px 10px yellow" }}
          />
        </div>
        <div className="col-span-1">
          <img
            src={Image2}
            alt="Image2"
            width={300}
            height={300}
            className="rounded-3xl px-4 py-6 bg-white"
            style={{ boxShadow: "10px 10px yellow" }}
          />
        </div>
        <div className="col-span-1">
          <img
            src={Image3}
            alt="Image3"
            width={300}
            height={300}
            className="rounded-3xl px-4 py-6 bg-white"
            style={{ boxShadow: "10px 10px yellow" }}
          />
        </div>
      </div>
    </>
  );
}

export default Latest;
