import React from "react";
import "../Links/index.css";

const Links = () => {
  return (
   <div className="info-section">
   <div className="gamehub-creators">
      <h2>Gamehub Creators</h2>
      <div className="info-creator">
        <img></img>
        <h3>Christopher</h3>
        <h5>About us</h5>
        <p>Text about us</p>
        <a target="_blank" href="https://github.com/christopherfulldev">My GitHub</a>

      </div>
      <div className="info-creator">
        <img></img>
        <h3>Debora</h3>
        <h5>About us</h5>
        <p>Text about us</p>
        <a target="_blank" href="https://github.com/DeAT1995">My GitHub</a>
      </div>
    </div>
    <div className="backlink">
    <h2>Backlinks</h2>
    <h3>Links/Sites utilizados</h3>
    <p>some text about the backlinks</p>
    </div>
    </div>
  );
};

export default Links;
