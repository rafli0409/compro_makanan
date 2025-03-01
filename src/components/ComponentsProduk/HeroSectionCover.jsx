import React from "react";
import "./HeroSectionCover.css";
import Cover from "../../assets/Hero_product.png";

const HeroSectionCover = () => {
  return (
    <div className="hero-section">
      <img src={Cover} alt="cover" className="img-cover" />
    </div>
  );
};

export default HeroSectionCover;
