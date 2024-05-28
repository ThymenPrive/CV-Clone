import React, { useEffect, useState, useRef } from 'react';
import { scroller } from 'react-scroll';
import './CV.css';

const CV = () => {
  const [showStip, setShowStip] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStip(true);
        }
      },
      {
        threshold: 0.1, // Pas aan om te bepalen hoeveel van de component zichtbaar moet zijn voordat de animatie start
      }
    );

    const currentRef = cvRef.current; // Bewaar de huidige referentie in een lokale variabele
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [cvRef]);

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
    <div className="cv-container" id="cv" ref={cvRef}>
      <h1 className='header'>CV</h1>
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
