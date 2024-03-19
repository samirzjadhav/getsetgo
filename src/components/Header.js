import React from "react";

const Header = () => {
  return (
    <div id="home" className="header relative">
      <div className="headerImg px-[26px] md:px-[50px] mt-[70px]">
        <img src="./flight.png" alt="" className="rounded-md h-[80vh] w-full" />
      </div>
      <div className="heading absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Customize your flight with JetSetGo
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Endless flight options at your fingertips!
        </p>
      </div>
    </div>
  );
};

export default Header;
