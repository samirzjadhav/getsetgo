import React from "react";

const OfferSection = () => {
  return (
    <div className="bg-[#323232] py-[32px] px-[30px] md:px-[50px] mx-[50px] my-[30px] rounded-xl">
      <div className="offer-container">
        <div className="bg-white rounded-lg shadow-md p-[16px] flex flex-col gap-[30px] md:gap-0 md:flex-row justify-between">
          <div className="flex flex-col md:flex-row items-center gap-[20px]">
            <img src="./airplane.png" className="w-[35px] h-[35px]" alt="" />
            <div className="offer-header">
              <h4 className="text-[16px]">
                Psst! Discover exclusive flight deals and offers by joining our
                Sky Club!
              </h4>
              <p className="text-[12px]">
                Want the best flight deals and exclusive offers? Join our Sky
                Club now!
              </p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white border-2 hover:scale-[1.05] text-black py-1 px-4 rounded-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
