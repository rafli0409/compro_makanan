import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo_m-removebg-preview.png";
import "./Footer.css";

export default function App() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#000" }}
      className="text-justify text-lg-start text-white"
    >
      <section className="p-4">
        <MDBContainer className="text-md-start mt-2">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="4" className="me-auto mb-4">
              <img
                src={logo}
                alt="Logo"
                width="60%"
                height="100"
                className="mb-3 mx-auto footer-logo"
              />
              <p className="text-center">
                Jl. Sudirman <br /> Kec. Kby. Baru, Kota jakarta Selatan, <br />{" "}
                Daerah Khusus Ibukota Jakarta
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="2" className=" mx-auto mb-4 eksplor">
              <h6 className="text-uppercase fw-bold mb-3">Eksplor</h6>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/" className="text-reset">
                  Beranda
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/Produk" className="text-reset">
                  Produk
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/Service" className="text-reset">
                  Servis
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/Berita" className="text-reset">
                  Berita & Artikel
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/About" className="text-reset">
                  Tentang Kami
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 produk">
              <h6 className="text-uppercase fw-bold mb-3">Produk & Servis</h6>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/produk" className="text-reset">
                  Makanan
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/produk" className="text-reset">
                  Minuman
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="/service" className="text-reset">
                  Catering Event
                </a>
              </p>
              <p>
                <MDBIcon icon="fas fa-angle-right" className="me-2" />
                <a href="#" className="text-reset">
                  Konsultasi Gizi
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Info Kontak</h6>
              <p>
                <i className="fa-brands fa-whatsapp me-3"></i>
                <a>0812345678</a>
              </p>
              <p>
                <i className="fa-brands fa-instagram me-3"></i>
                <a
                  href="#"
                  className="text-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Makanan.id
                </a>
              </p>
              <p>
                <i className="fa-brands fa-tiktok me-3"></i>
                <a
                  href="#"
                  className="text-tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Makanan.id
                </a>
              </p>
              <p>
                <i className="fa-brands fa-square-youtube me-3"></i>
                <a
                  href="#"
                  className="text-youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Makanan
                </a>
              </p>
              <p>
                <i className="fa-brands fa-linkedin me-3"></i>
                <a
                  href="#"
                  className="text-linked"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Makanan Catering
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-3 copyright"
        style={{ backgroundColor: "#131313" }}
      >
        <marquee>© 2023 Copyright: Makanan</marquee>
      </div>
    </MDBFooter>
  );
}
