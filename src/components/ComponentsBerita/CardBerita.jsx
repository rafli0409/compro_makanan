import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CardBerita.css";

// import required modules
import { Pagination } from "swiper";
import CardBeritaData from "./CardBeritaData";

export default function CardBerita() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        // slidesPerView={3}
      >
        <SwiperSlide>
          <CardBeritaData />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
