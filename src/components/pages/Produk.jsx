import React from "react";
import CateringBenefits from "../ComponentsProduk/CateringBenefits";
import HeroSectionCover from "../ComponentsProduk/HeroSectionCover";
import SlideProductSehealthy from "../ComponentsProduk/SlideProductSehealthy";
import SlideProductMakanan from "../ComponentsProduk/SlideProductMakanan";
// import SlideProductFreshVeggy from '../ComponentsProduk/SlideProductFreshVeggy'

const Produk = () => {
  return (
    <div>
      <HeroSectionCover />
      <SlideProductMakanan />
      <SlideProductSehealthy />
      {/* <SlideProductFreshVeggy/> */}
      <CateringBenefits />
    </div>
  );
};

export default Produk;
