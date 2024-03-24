"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../Utilities/slider.json";
import { sliderSettings } from "../Utilities/common.js";

const SwiperSliders = () => {
  return (
    <section className="card-wrapper mt-[50px] px-[26px] md:px-[50px] py-[30px]">
      <h1 className="text-2xl font-medium text-white text-center">
        Top destinations to explore
      </h1>
      <div className="card-container mt-[20px]">
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card max-w-[100%] w-[340px]">
                <img
                  src={card.image}
                  alt="home"
                  className="w-[340px] h-[220px] rounded-tr-xl rounded-tl-xl"
                />
                <div className="flex flex-col items-start justify-center gap-[10px] rounded-b-lg shadow-xl p-[10px] bg-[#323232]">
                  <span className="text-gray-100">{card.name}</span>
                  <span className="text-gray-100">{card.destination}</span>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-gray-100">{card.price}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                    >
                      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center gap-[20px] mt-[40px] mb-[40px]">
      <button className="swiper-btn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="swiper-btn" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};

export default SwiperSliders;
