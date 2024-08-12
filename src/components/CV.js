import React from "react";
import { scroller } from "react-scroll";
import "./CV.css";

const CV = ({ showStip }) => {
  const scrollToNextSection = () => {
    scroller.scrollTo("cv2", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToPreviousSection = () => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="cv-container wrapper" id="cv">
      <div className="wrapper__container">
        <div className="wrapper__container-inner">
          <div className="CV-blok-1">
            <h1 className="header">WERK</h1>
          </div>
          <div className="CV-blok-2">
            <div style={{ margin: "0", padding: "0" }}>
              <p id="werkBlok">
                <span className={`stip ${showStip ? "visible" : ""}`}></span>
                Huidige job: <span className="boldText">Adviseur @ Rebel</span>
              </p>
              <ul className="werkervaring">
                <li className="werkervaringItem">Applicatieontwikkeling</li>
                <li>UX/UI Design</li>
                <li>Projectmanagement</li>
                <li>Functionele analyse</li>
                <li>Data analyse</li>
                <li>Lid van het data- en AI-team</li>
                <li>Financiële rekenmodellen opstellen</li>
                <li>Klantinteractie en behoeftenanalyse</li>
              </ul>
            </div>
            <div style={{ margin: "0", padding: "0" }}>
              <p>
                <span className={`stip ${showStip ? "visible" : ""}`}></span>
                Voorgaande jobs:{" "}
                <span className="boldText">Digitale transformatie @</span>
              </p>
              <ul className="werkervaring">
                <li className="werkervaringItem">
                  De tandheelkundige en juwelenindustrie
                </li>
              </ul>
            </div>
          </div>
          <div className="CV-blok-3">
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
    </div>
  );
};

export default CV;
