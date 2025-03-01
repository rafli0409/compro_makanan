import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { links } from "./Navdata";
import nav_logo from "/src/assets/logo_m-removebg-preview.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="navbar-top sticky-top">
      <div className="navbar-center">
        <div className="nav-header">
          <a href="/">
            <img src={nav_logo} alt="logo" className="logo" />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <a href="" target="_blank">
          <button className="btn-header">Lebih Lanjut</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
