import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import './Home.css';

const Home = () => {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLine(true);
    }, 500); // De lijn later laten verschijnen

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    scroller.scrollTo('cv', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="home-container">
      <h1 id='cv-header-span' >CV</h1>
      <div className={`blue-line-home ${showLine ? 'visible' : ''}`}></div>
      <h1 id='cv-header'>Thymen Willemsen</h1>
      <p className={`fade-in ${showLine ? 'visible' : ''}`}>Druk op de pijl om naar beneden te scrollen!</p>
      <div className="navigation-arrows">
        <div className="down-arrow" onClick={(e) => {e.stopPropagation(); handleScroll();}}>
          &#x2193;
        </div>
      </div>
    </div>
  );
};

export default Home;
