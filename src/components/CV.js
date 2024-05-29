import React from 'react';
import { scroller } from 'react-scroll';
import './CV.css';

const CV = ({ showStip }) => {
  const scrollToNextSection = () => {
    scroller.scrollTo('cv2', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const scrollToPreviousSection = () => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="cv-container" id="cv">
      <h1 className='header'>WERK</h1>
      <p>
        <span className={`stip ${showStip ? 'visible' : ''}`}></span>
        Dit is de CV sectie.
      </p>
      <div className="navigation-arrows">
        <div className="up-arrow" onClick={(e) => {e.stopPropagation(); scrollToPreviousSection();}}>
          &#x2191;
        </div>
        <div className="down-arrow" onClick={(e) => {e.stopPropagation(); scrollToNextSection();}}>
          &#x2193;
        </div>
      </div>
    </div>
  );
};

export default CV;
