import React from "react";
import "./CardBerita.css";
import { MdNavigateNext } from "react-icons/md";
import newss from "./IsiBerita";

const CardBeritaData = () => {
  return (
    <div className="swiper-slide">
      {newss.map((news) => (
        <div className="card-berita" key={news.id}>
          <img src={news.image_berita} alt="berita" className="image-news" />
          <div className="container-berita">
            <h4>{news.title}</h4>
            <p className="text-berita">{news.text}</p>
            <a
              href={news.url}
              className="btn-berita"
              target="_blank"
              rel="noopener noreferrer"
            >
              Selengkapnya
              <MdNavigateNext color="#f97044" style={{ margin: "0.1rem" }} />
            </a>
            <hr />
            <p className="date-berita">{news.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBeritaData;
