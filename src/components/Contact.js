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

  const handleCall = () => {
    window.location.href = 'tel:+32470968413';
  };

  const handleMail = () => {
    window.location.href = 'mailto:thymenwillemsen@gmail.com';
  };

  const handleDownload = () => {
    window.location.href = '/ThymenWillemsen.pdf';
  };

  const handleAddContact = () => {
    if (navigator.contacts && navigator.contacts.save) {
      const contact = {
        name: 'Thymen Willemsen',
        tel: ['+32470968413']
      };
      navigator.contacts.save([contact])
        .then(() => alert('Contact toegevoegd!'))
        .catch((err) => alert('Fout bij het toevoegen van contact: ' + err));
    } else {
      alert('Contact toevoegen wordt niet ondersteund op dit apparaat.');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Thymen Willemsen',
        text: 'Bekijk de website van Thymen Willemsen',
        url: 'https://thymenwillemsen.com/'
      }).catch((error) => alert('Fout bij het delen: ' + error));
    } else {
      alert('Delen wordt niet ondersteund op dit apparaat.');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className='header'>Contact</h1>
      <p>Dit is de Contact sectie.</p>
      <div className="button-container">
        <button onClick={handleCall}>Bellen</button>
        <button onClick={handleMail}>Mailen</button>
        <button onClick={handleDownload}>Download PDF</button>
        <button onClick={handleAddContact}>Contact toevoegen</button>
        <button onClick={handleShare}>Delen</button>
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
