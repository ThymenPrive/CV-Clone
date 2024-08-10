import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import './CV2.css';

const CV2 = () => {
  const [showText, setShowText] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cv2Section = document.getElementById('cv2');
      const rect = cv2Section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        const textTimer = setTimeout(() => {
          setShowText(true);
        }, 2000); // Later starten met infaden van de tekst
        const lineTimer = setTimeout(() => {
          setShowLine(true);
        }, 3000); // De lijn later laten verschijnen

        const elements = document.querySelectorAll('.stip');
        elements.forEach(el => {
          el.classList.add('visible');
        });

        return () => {
          clearTimeout(textTimer);
          clearTimeout(lineTimer);
        };
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    scroller.scrollTo('skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const scrollToPreviousSection = () => {
    scroller.scrollTo('cv', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="cv2-container" id="cv2">
      <h1 className='header'>OPLEIDINGEN</h1>
      <div className={`blue-line ${showLine ? 'visible' : ''}`} style={{marginTop: '-150px'}}></div>
      <p className='boldText' style={{ color: 'white'}}>Meest recente opleidingen</p>


      
      <div className={`additional-info ${showText ? 'visible' : ''}`}>
        <ul className='opleidingen'>
          <li className='opleidingenItem'><span className='stip'></span>Industriële Informatica</li>
          <li><span className='stip'></span>CAPM Project Management</li>
          <li><span className='stip'></span>F1F9 Fast Modeling</li>
        </ul>
        
      </div>
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

export default CV2;
