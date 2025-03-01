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
import freshveggys from "./FreshVeggyData";

const SlideProductFreshVeggy = () => {
  return (
    <>
      <div className="title-product">
        <h2 className="desc-product">Fresh Veggy by NutreEat</h2>
        <div className="underline-freshveggy"></div>
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
        {freshveggys.map((freshveggy) => (
          <SwiperSlide>
            <div key={freshveggy.id} className="card-product">
              <img src={freshveggy.image} alt="Product" />
              <div className="container-product">
                <h4>{freshveggy.title}</h4>
                <p>{freshveggy.text}</p>
                <a
                  href={freshveggy.url}
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

export default SlideProductFreshVeggy;
