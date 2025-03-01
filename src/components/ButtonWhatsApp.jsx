import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ButtonWhatsApp.css";

const ButtonWhatsApp = () => {
  return (
    <div>
      <a
        className="float"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=6285772223364"
      >
        <FaWhatsapp className="my-float fa-xl" />
      </a>
    </div>
  );
};

export default ButtonWhatsApp;
