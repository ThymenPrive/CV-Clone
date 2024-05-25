import React from 'react';
import { scroller } from 'react-scroll';
import './Contact.css';

const Contact = () => {
  const scrollToPreviousSection = () => {
    scroller.scrollTo('aboutme', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="contact-container" id="contact">
      <h1>Contact</h1>
      <p>Dit is de Contact sectie.</p>
      <div className="navigation-arrows">
        <div className="up-arrow" onClick={(e) => {e.stopPropagation(); scrollToPreviousSection();}}>
          &#x2191;
        </div>
      </div>
    </div>
  );
};

export default Contact;
