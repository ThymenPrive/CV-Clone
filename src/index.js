import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Voeg de volgende regels terug, maar zorg ervoor dat ze niet de hele pagina blokkeren
window.addEventListener(
  "wheel",
  function (e) {
    const isArrow =
      e.target.classList.contains("up-arrow") ||
      e.target.classList.contains("down-arrow");
    if (!isArrow) {
      e.preventDefault();
    }
  },
  { passive: false }
);

window.addEventListener(
  "touchmove",
  function (e) {
    const isArrow =
      e.target.classList.contains("up-arrow") ||
      e.target.classList.contains("down-arrow");
    if (!isArrow) {
      e.preventDefault();
    }
  },
  { passive: false }
);
