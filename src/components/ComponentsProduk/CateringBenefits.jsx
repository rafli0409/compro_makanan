import React from "react";
import "./CateringBenefits.css";
import benefits from "../../assets/img-benefits.png";
import { MDBBtn } from "mdb-react-ui-kit";
import Icon1 from "../../assets/icon/5 3.png";
import Icon2 from "../../assets/icon/8 1.png";
import Icon3 from "../../assets/icon/11 1.png";
import Icon4 from "../../assets/icon/13 1.png";
import Icon5 from "../../assets/icon/14 1.png";

const CateringBenefits = () => {
  return (
    <div className="catering">
      <div className="catering-desc">
        <h3 className="catering-heading">Catering Event</h3>
        <p className="catering-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          tenetur repudiandae officiis, vero cumque fugit esse doloribus
          quisquam nisi officia animi voluptate, culpa ipsum facere aut? Sunt
          aperiam quidem optio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem, veritatis ipsa deserunt eos ducimus
          at vero earum numquam porro, pariatur, accusantium accusamus sed.
          Maiores obcaecati consequuntur ex? Veritatis, eaque adipisci.
        </p>
        <a
          href="http://bit.ly/ordernutreeat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MDBBtn rounded className="btn-catering">
            Pesan Sekarang
          </MDBBtn>
        </a>
      </div>
      <div className="benefits">
        <img src={benefits} alt="cover" className="img-benefits" />
        <h3 className="desc-benefits">Benefits</h3>
        <div className="icon-benefits">
          <div className="icon-benefits-atas">
            <div className="bullets-icon-1">
              <img src={Icon1} className="icon-produk" />
              <p className="text-icon-benefits paragraph-icon-benefits-1">
                Menjaga berat badan normal
              </p>
            </div>
            <div className="bullets-icon-2">
              <img src={Icon2} className="icon-produk" />
              <p className="text-icon-benefits paragraph-icon-benefits-2">
                Tubuh tetap bugar dalam menjalani aktivitas
              </p>
            </div>
            <div className="bullets-icon-3">
              <img src={Icon3} className="icon-produk" />
              <p className="text-icon-benefits paragraph-icon-benefits-3">
                Memenuhi kebutuhan gizi harian
              </p>
            </div>
          </div>
          <div className="icon-benefits-bawah">
            <div className="bullets-icon-4">
              <img src={Icon4} className="icon-produk" />
              <p className="text-icon-benefits paragraph-icon-benefits-4">
                Membentuk pola makan yang sehat dan seimbang
              </p>
            </div>
            <div className="bullets-icon-5">
              <img src={Icon5} className="icon-produk" />
              <p className="text-icon-benefits paragraph-icon-benefits-5">
                Memenuhi kebutuhan diet personal sesuai kondisi tubuh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateringBenefits;
