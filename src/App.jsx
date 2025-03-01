import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Berita from "./components/pages/Berita";
import Produk from "./components/pages/Produk";
import Service from "./components/pages/Service";
import About from "./components/pages/About";
import Blog from "./components/Blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonWhatsApp from "./components/ButtonWhatsApp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produk" element={<Produk />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <ButtonWhatsApp />
      <Footer />
    </div>
  );
};

export default App;
