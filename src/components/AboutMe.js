import React from "react";
import { scroller } from "react-scroll";
import "./AboutMe.css";

const AboutMe = () => {
  const scrollToNextSection = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToPreviousSection = () => {
    scroller.scrollTo("skills", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="aboutme-container wrapper" id="aboutme">
      <div className="wrapper__container">
        <div className="wrapper__container-inner">
          <h1 className="header">OVER MIJ</h1>
          <p>Dit is de About Me sectie. Hier vertel ik iets over mezelf.</p>
          <div className="navigation-arrows">
            <div
              className="up-arrow"
              onClick={(e) => {
                e.stopPropagation();
                scrollToPreviousSection();
              }}
            >
              &#x2191;
            </div>
            <div
              className="down-arrow"
              onClick={(e) => {
                e.stopPropagation();
                scrollToNextSection();
              }}
            >
              &#x2193;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
