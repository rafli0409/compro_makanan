import React, { useState } from "react";
import people from "./IntroAboutData";
import "./IntroAboutStyle.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const IntroAbout = () => {
  const [index, setIndex] = useState(0);
  const { id, name, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex = 0;
  const maxIndex = people.length - 1;

  //   const getRandomPerson=()=>{
  //     const getRandomIntInclusive=(min, max) =>{
  //       min = Math.ceil(min);
  //       max = Math.floor(max);
  //       return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  //     }

  //     let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
  //     if (randomIndex===index){
  //       randomIndex=index+1
  //     }
  //     setIndex(checkNumber(randomIndex));

  //   }

  return (
    <article className="intro">
      <div className="button-about">
        <button className="prev-btn-about" onClick={prevPerson}>
          <FaChevronLeft size={40} />
        </button>
        <button className="next-btn-about" onClick={nextPerson}>
          <FaChevronRight size={40} />
        </button>
        <div className="intro-desc">
          <p className="text-intro">{text}</p>
          <h4 className="author-about">{name}</h4>
        </div>
      </div>
    </article>
  );
};

export default IntroAbout;
