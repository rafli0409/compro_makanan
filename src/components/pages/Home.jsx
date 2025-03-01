import React from "react";
import HeroSection from "../../components/ComponentsHome/HeroSection";
import CardReview from "../../components/ComponentsHome/CardReview";
import ProjectCard from "../../components/ComponentsHome/ProjectCard";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="container-navbar">
        <div className="title">
          <h2 className="text-title">Testimoni</h2>
          <div className="underline"></div>
        </div>
        <CardReview />
        <div className="underline-2"></div>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Home;
