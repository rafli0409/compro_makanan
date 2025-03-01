import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MDBBtn } from "mdb-react-ui-kit";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlideProduct.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
import sehealthys from "./SehealthyData";

const SlideProductSehealthy = () => {
  return (
    <>
      <div className="title-product">
        <h2 className="desc-product">SeHealthy</h2>
        <div className="underline"></div>
      </div>
      <Swiper
        //   style={{"margin":"1rem 0",
        //     "--swiper-pagination-color": "#FFBA08",
        //     "--swiper-pagination-bullet-inactive-color": "#999999",
        //     "--swiper-pagination-bullet-inactive-opacity": "0.5",
        //     "--swiper-pagination-bullet-size": "10px",
        //      "--swiper-pagination-bullet-horizontal-gap": "6px"}}
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {sehealthys.map((sehealthy) => (
          <SwiperSlide>
            <div key={sehealthy.id} className="card-product">
              <img src={sehealthy.image} alt="Product" />
              <div className="container-product">
                <h4>{sehealthy.title}</h4>
                <p>{sehealthy.text}</p>
                <a
                  href={sehealthy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBBtn rounded className="btn-product">
                    Pesan Sekarang
                  </MDBBtn>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideProductSehealthy;
