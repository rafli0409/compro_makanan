import React from "react";
import "./VisiMisiStyle.css";

const VisiMisi = () => {
  return (
    <div className="bg-visimisi">
      <div className="visimisi">
        <div className="visi">
          <h2 className="heading-visi">Visi</h2>
          <p className="text-visi">
            Menjadikan NutreEat sebagai katering yang dapat memenuhi kebutuhan
            diet pelanggan baik individu maupun kelompok melalui penyediaan
            makanan yang berkualitas, berbasis data ilmiah, inovatif, pelayanan
            professional, serta memberikan pemahaman mengenai pola makan sehat.
          </p>
        </div>
        <div className="misi">
          <h2 className="heading-misi">Misi</h2>
          <ol className="text-misi">
            <li>
              Memberikan pelayanan professional yang berorientasi terhadap
              kepuasan pelanggan.
            </li>
            <li>
              Menggunakan bahan makanan yang berkualitas, terjaga mutunya, dan
              bebas dari berbagai macam cemaran.
            </li>
            <li>
              Memenuhi kebutuhan makan pelanggan yang dapat disesuaikan dengan
              kondisi fisiologis dan kesehatan masing-masing pelanggan.
            </li>
            <li>Terus berinovasi dan memanfaatkan inovasi terbaik.</li>
            <li>
              Memberikan edukasi mengenai pola makan sehat melalui konten yang
              interaktif.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
