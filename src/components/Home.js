import React from 'react';
import { scroller } from 'react-scroll';
import './Home.css';

const Home = () => {
  const handleScroll = () => {
    scroller.scrollTo('cv', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="home-container">
      <h1 id='cv-header'><span id='cv-header-span'>CV</span> Thymen Willemsen</h1>
      <p>Druk op het scherm om naar beneden te scrollen!</p>
      <div className="navigation-arrows">
        <div className="down-arrow" onClick={(e) => {e.stopPropagation(); handleScroll();}}>
          &#x2193;
        </div>
      </div>
    </div>
  );
};

export default Home;
