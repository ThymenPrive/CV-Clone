import React from "react";
import { scroller } from "react-scroll";
import "./Skills.css";

const Skills = () => {
  const scrollToNextSection = () => {
    scroller.scrollTo("aboutme", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToPreviousSection = () => {
    scroller.scrollTo("cv2", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="skills-container wrapper" id="skills">
      <div className="wrapper__container">
        <div className="wrapper__container-inner">
          <h1 className="header">SKILLS</h1>
          <p>Dit is de Skills sectie.</p>
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

export default Skills;
