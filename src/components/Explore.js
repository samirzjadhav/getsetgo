import React from "react";

const Explore = () => {
  return (
    <div className="explore px-[50px] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-medium text-white">
        Top destinations to explore
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[20px] py-[20px] ">
        <div className="explore-cards flex gap-[20px]">
          <div className="explore-card relative">
            <img
              src="./r1.png"
              className="rounded-2xl w-[320px] h-[240px]"
              alt=""
            />
            <a
              href="#"
              className="bg-white py-[4px] px-[10px] rounded-lg absolute bottom-5 right-3"
            >
              Japan
            </a>
          </div>
          <div className="explore-cards grid grid-row-2 gap-[12px]">
            <div className="explore-card relative">
              <img
                src="./r2.png"
                className=" w-[300px] h-[120px] rounded-lg"
                alt=""
              />
              <a
                href="#"
                className="bg-white py-[4px] px-[10px] rounded-lg absolute bottom-3 right-2"
              >
                Italy
              </a>
            </div>
            <div className="explore-card relative">
              <img
                src="./r3.png"
                className="w-[300px] h-[90px] rounded-lg"
                alt=""
              />
              <a
                href="#"
                className="bg-white py-[4px] px-[10px] rounded-lg absolute bottom-3 right-2"
              >
                Ireland
              </a>
            </div>
          </div>
        </div>
        <div className="explore-cards flex gap-[20px]">
          <div className="explore-card relative">
            <img
              src="./r5.png"
              className="rounded-2xl w-[320px] h-[240px]"
              alt=""
            />
            <a
              href="#"
              className="bg-white py-[4px] px-[10px] rounded-lg absolute bottom-5 right-3"
            >
              Indonesia
            </a>
          </div>
          <div className="explore-cards grid grid-row-2 gap-[12px]">
            <div className="explore-card relative">
              <img
                src="./r4.png"
                className="w-[300px] h-[90px] rounded-lg"
                alt=""
              />
              <a
                href="#"
                className="bg-white py-[4px] px-[10px] rounded-lg absolute bottom-3 right-2"
              >
                Switzerland
              </a>
            </div>
            <div className="explore-card relative">
              <img
                src="./r6.png"
                className=" w-[300px] h-[120px] rounded-lg"
                alt=""
              />
              <a
                href="#"
                className="bg-white py-[4px] px-[10px] rounded-lg absolute bottom-3 right-2"
              >
                United Kingdom
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
