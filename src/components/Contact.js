import React from "react";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const scrollToPreviousSection = () => {
    scroller.scrollTo("aboutme", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const handleCall = () => {
    window.location.href = "tel:+32470968413";
  };

  const handleMail = () => {
    window.location.href = "mailto:thymenwillemsen@gmail.com";
  };

  const handleAddContact = () => {
    const vcf = `BEGIN:VCARD
    VERSION:3.0
    FN:Thymen Willemsen
    TEL:+32470968413
    END:VCARD`;

    const blob = new Blob([vcf], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ThymenWillemsen.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-container wrapper" id="contact">
      <div className="wrapper__container">
        <div className="wrapper__container-inner">
          <h1 className="header" style={{ paddingBottom: "10px" }}>
            CONTACT
          </h1>
          <div className="orange-line"></div> {/* Toegevoegde oranje lijn */}
          <p>
            Met dit CV wil ik mijn interesse kenbaar maken voor de onlangs
            geopende functie binnen team HFB en hoop ik uw aandacht te hebben
            gewekt.
            <br />
            Mocht deze functie niet volledig aansluiten bij mijn profiel, dan
            sta ik ook open voor andere functies binnen uw bedrijf.
          </p>
          <p>
            Graag zou ik mijzelf willen presenteren in een open en persoonlijk
            gesprek. Bij interesse kunt u mij rechtstreeks contacteren via
            onderstaande contactopties. Ik kijk uit naar uw reactie.
          </p>
          <p>Met vriendelijke groet,</p>
          <div className="orange-dots-container">
            {" "}
            {/* Toegevoegde container voor oranje stippen */}
            <span className="orange-dot"></span>
            <span className="orange-dot"></span>
            <span className="orange-dot"></span>
          </div>
          <h2>Thymen Willemsen</h2>
          <div className="button-container">
            <button onClick={handleCall}>
              <FontAwesomeIcon icon={faPhone} /> Bellen
            </button>
            <button onClick={handleMail}>
              <FontAwesomeIcon icon={faEnvelope} /> Mailen
            </button>

            <button onClick={handleAddContact}>
              <FontAwesomeIcon icon={faUserPlus} /> Contact toevoegen
            </button>
          </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
