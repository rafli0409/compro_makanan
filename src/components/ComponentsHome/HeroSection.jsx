import React from "react";
import "./HeroSection.css";
import Cover from "../../assets/Jumbotron_image.webp";
import CoverImg from "../../assets/Hero_home.png";
import IconHome from "../../assets/icon/2 5_home.png";
import IconHome1 from "../../assets/icon/3 2_home.png";
import IconHome2 from "../../assets/icon/1 2_home.png";
import IconHome3 from "../../assets/icon/4 1_home.png";
import IconHome4 from "../../assets/icon/15 1_home.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="img-hero">
        <img src={Cover} alt="cover" className="into-img" />
      </div>
      <div className="desc">
        <h3 className="desc-heading">Selayang Padang Makanan</h3>
        <p className="desc-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem voluptas
          corrupti architecto earum doloremque, distinctio commodi quidem,
          obcaecati natus at magni praesentium, ipsa eius autem eveniet. Minus
          facere ex voluptatum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Minus, illum! Consequatur qui quas doloremque ipsum
          eos cumque quibusdam aliquid fugiat saepe debitis reiciendis magni
          dicta, asperiores, eius eum libero odit? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Assumenda labore dolor, expedita
          voluptas mollitia doloremque odit? Blanditiis sint laborum veritatis,
          dolorum aut quidem consequuntur ipsa iste possimus. Facilis, unde
          veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis aut corrupti incidunt. Possimus consequatur omnis pariatur
          suscipit ad et doloribus non quibusdam officiis repellendus sint quae
          dolor, alias repudiandae voluptatem.
        </p>
      </div>
      <div className="img-2">
        <img src={CoverImg} alt="cover" className="into-img2" />
        {/* <img src={LogoCover} alt="Logo" className="LogoCover" /> */}
        <h1 className="title-hero">Kenapa Sih Pilih Makanan</h1>
        <div className="home-icon">
          <div className="icon-home-atas">
            <div className="home-icon-1">
              <img src={IconHome} alt="Icon" className="icon-home" />
              <p className="text-icon para-1">Variatif Lengkap Seimbang</p>
            </div>
            <div className="home-icon-2">
              <img src={IconHome1} alt="Icon-1" className="icon-home" />
              <p className="text-icon para-2">Fresh</p>
            </div>
            <div className="home-icon-3">
              <img src={IconHome2} alt="Icon-2" className="icon-home" />
              <p className="text-icon para-3">Lest Salt Lest Sugar</p>
            </div>
          </div>
          <div className="icon-home-bawah">
            <div className="home-icon-4">
              <img src={IconHome3} alt="Icon-3" className="icon-home" />
              <p className="text-icon para-4">Sertifikasi HACCP</p>
            </div>
            <div className="home-icon-5">
              <img src={IconHome4} alt="Icon-4" className="icon-home" />
              <p className="text-icon para-5">Dimonitor oleh Ahli Gizi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
