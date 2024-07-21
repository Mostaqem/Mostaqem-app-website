import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../App.css";
import imageApp from "../assets/app.png";
import swiperData from "../data/SwiperDataApi";

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        className="h-[auto]"
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {swiperData &&
          swiperData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="text-white min-w-[100%] min-h-[100%]  rounded-xl flex flex-col items-center justify-center gap-10 py-[2rem] max-sm:py-[1rem]"
            >
              <img
                src={item.image}
                className="w-[50rem] rounded-xl max-lg:w-[35rem]"
              />
              <h1 className="text-2xl text-[#725142]">{item.title}</h1>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
