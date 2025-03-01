import React from "react";
import HeroSectionAbout from "../ComponentsAbout/HeroSectionAbout";
import IntroAbout from "../ComponentsAbout/IntroAbout";
import JumbotronAbout from "../ComponentsAbout/JumbotronAbout";
import VisiMisi from "../ComponentsAbout/VisiMisi";

const About = () => {
  return (
    <div>
      <HeroSectionAbout />
      <VisiMisi />
      <JumbotronAbout />
      <IntroAbout />
    </div>
  );
};

export default About;
