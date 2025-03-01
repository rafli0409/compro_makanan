import React from "react";
import CoverBerita from "../../assets/Hero_berita.png";
import "../../components/ComponentsHome/HeroSection.css";

const HeroSectionBerita = () => {
  return (
    <div className="hero">
      <div className="img-hero">
        <img src={CoverBerita} alt="cover" className="into-img" />
      </div>
    </div>
  );
};

export default HeroSectionBerita;
