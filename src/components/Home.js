import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import "./Home.css";

const Home = ({ onTriggerStippen }) => {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLine(true);
    }, 500); // De lijn later laten verschijnen

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    onTriggerStippen();
    scroller.scrollTo("cv", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="home-container wrapper">
      <div className="wrapper__container">
        <div className="wrapper__container-inner">
          <h1 id="cv-header-span">CV</h1>
          <div className={`blue-line-home ${showLine ? "visible" : ""}`}></div>
          <h1 id="cv-header">Thymen Willemsen</h1>
          <p className={`fade-in ${showLine ? "visible" : ""}`}>
            Druk op de pijl om naar beneden te scrollen!
          </p>
          <div className="navigation-arrows">
            <div
              id="trigger-stippen"
              className="down-arrow"
              onClick={(e) => {
                e.stopPropagation();
                handleScroll();
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

export default Home;
