import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { Element } from 'react-scroll';
import Home from './components/Home';
import CV from './components/CV';
import CV2 from './components/CV2';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import CookiePolicy from './components/CookiePolicy';

function App() {
  const [showStip, setShowStip] = useState(false);

  const handleTriggerStippen = () => {
    setTimeout(() => {
      setShowStip(true);
    }, 2000); // 3 seconden vertraging
  };

  return (
    <Router>
      <div>
        <CookieConsent
          location="bottom"
          buttonText="Accepteren"
          declineButtonText="Weigeren"
          enableDeclineButton
          onDecline={() => {
            // Optionele logica voor als de gebruiker weigert
          }}
          cookieName="myAwesomeCookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          declineButtonStyle={{ color: "#fff", fontSize: "13px", background: "#c00" }}
        >
          Deze website maakt gebruik van cookies om de gebruikerservaring te verbeteren.{" "}
          <a href="/cookie-policy" style={{ color: "#61dafb" }}>Lees meer</a>
        </CookieConsent>
        <Routes>
          <Route path="/" element={
            <>
              <Element name="home">
                <Home onTriggerStippen={handleTriggerStippen} />
              </Element>
              <Element name="cv">
                <CV showStip={showStip} />
              </Element>
              <Element name="cv2">
                <CV2 />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
              <Element name="aboutme">
                <AboutMe />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </>
          } />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
