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
      <p id='werkBlok'>
        <span className={`stip ${showStip ? 'visible' : ''}`}></span>
        Huidige job: <span className='boldText'>Adviseur @ Rebel</span>
      </p>
      
        <ul className='werkervaring'>
          <li className='werkervaringItem'>Applicatieontwikkeling</li>
          <li>UX/UI Design</li>
          <li>Projectmanagement</li>
          <li>Functionele analyse</li>
          <li>Data analyse</li>
          <li>Lid van het data- en AI-team</li>
          <li>Financiële rekenmodellen opstellen</li>
          <li>Klantinteractie en behoeftenanalyse</li>

        </ul>

        <p>
        <span className={`stip ${showStip ? 'visible' : ''}`}></span>
        Voorgaande jobs: <span className='boldText'>Digitale transformatie @</span>
      </p>
      <ul className='werkervaring'>
          <li className='werkervaringItem'>De tandheelkundige en juwelenindustrie</li>
{/*           <li>De juwelenindustrie</li>
 */}{/*           <li>Hier heb ik ik ambachtelijke processen <br/> heb omgezet in efficiënte, <br/> digitale workflows.</li>
 */}          
        </ul>
      
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
