import React from "react";
import CoverBerita from "../../../assets/cover-berita.png";
import "../HeroBerita/style.css";

const HeroBerita = () => {
  return (
    <div className="hero">
      <div className="img-hero">
        <img src={CoverBerita} alt="cover" className="into-img" />
      </div>
    </div>
  );
};

export default HeroBerita;
