import React from 'react';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUserPlus, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt as faFileAltRegular } from '@fortawesome/free-regular-svg-icons'; // Regular variant
import './Contact.css';

const Contact = () => {
  const scrollToPreviousSection = () => {
    scroller.scrollTo('aboutme', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const handleCall = () => {
    window.location.href = 'tel:+32470968413';
  };

  const handleMail = () => {
    window.location.href = 'mailto:thymenwillemsen@gmail.com';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../ThymenWillemsen.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddContact = () => {
    const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Thymen Willemsen
TEL:+32470968413
END:VCARD`;

    const blob = new Blob([vcf], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ThymenWillemsen.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Thymen Willemsen',
          text: 'Bekijk het CV van Thymen Willemsen',
          url: 'https://thymenwillemsen.com/'
        });
      } catch (error) {
        alert('Fout bij het delen: ' + error);
      }
    } else {
      alert('Delen wordt niet ondersteund op dit apparaat.');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className='header'>CONTACT</h1>
      <p>Dit is de Contact sectie.</p>
      <div className="button-container">
        <button onClick={handleCall}>
          <FontAwesomeIcon icon={faPhone} /> Bellen
        </button>
        <button onClick={handleMail}>
          <FontAwesomeIcon icon={faEnvelope} /> Mailen
        </button>
        <button onClick={handleDownload}>
          <FontAwesomeIcon icon={faFileAltRegular} /> Download PDF
        </button>
        <button onClick={handleAddContact}>
          <FontAwesomeIcon icon={faUserPlus} /> Contact toevoegen
        </button>
        <button onClick={handleShare}>
          <FontAwesomeIcon icon={faShareAlt} /> Delen
        </button>
      </div>
      <div className="navigation-arrows">
        <div className="up-arrow" onClick={(e) => {e.stopPropagation(); scrollToPreviousSection();}}>
          &#x2191;
        </div>
      </div>
    </div>
  );
};

export default Contact;
