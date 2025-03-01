import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import "./HeroSectionService.css";
import CoverService from "../../assets/IMG_8330 1.png";

const HeroSectionService = () => {
  return (
    <div className="herosectionservice">
      <div className="program-nutreeat">
        <div className="education">
          <h2 className="heading-education">Edukasi Gizi</h2>
          <p className="text-education">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
            recusandae nemo, laudantium nesciunt laboriosam ullam, illum sit
            ratione, consectetur impedit magni. Animi cupiditate repudiandae in
            voluptas quaerat. Eos, nisi maxime!
          </p>
        </div>
        <div className="consul">
          <h2 className="heading-consul">Konsultasi Gizi</h2>
          <p className="text-consul">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde,
            veritatis, ducimus deserunt qui ea, libero at accusantium illo
            praesentium quasi. Fugit dolor molestiae, dignissimos consequatur
            temporibus quasi aut adipisci.
          </p>
          <MDBBtn rounded className="button-service">
            Booking Jadwal Sekarang
          </MDBBtn>
        </div>
        <div className="pelatihan">
          <h2 className="heading-pelatihan">Pelatihan Bisnis Kuliner</h2>
          <p className="text-pelatihan">
            Dalam pelatihan ini Anda bisa belajar membuat dan mengelola bisnis,
            keuangan dan manajemen startup kuliner. Terdapat akses 50+ materi
            pelajaran secara GRATIS dan berbagai kelas premium dalam bidang: (1)
            Food Branding and Packaging, (2) Bisnis Digital Kuliner, (3) Food
            and Nutrition, (4) Bakery dan Pastry, (5) Commercial Cook, (6)
            Kitchen Management, (7) Food Safety & Certification, dan (8) Food
            Industry RnD.
          </p>
          <a
            href="https://bakerspice.academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBBtn rounded className="button-service">
              Ikuti Pelatihan Sekarang
            </MDBBtn>
          </a>
        </div>
      </div>
      <div className="cover-service">
        <img src={CoverService} alt="Cover" />
      </div>
      <div className="text-profile">
        <h2 className="heading-profile">Profile Ahli Gizi</h2>
        <div className="underline-3"></div>
      </div>
    </div>
  );
};

export default HeroSectionService;
