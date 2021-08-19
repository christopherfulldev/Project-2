import React from "react";
import "../Links/index.css";

const Links = () => {
  return (
   <div className="info-section">
   <div className="gamehub-creators">
      <h2>GAMEHUB CREATORS</h2>
      <div className="info-creator">
        <h3>• Christopher Pinto</h3>
        <h5>ABOUT ME</h5>
        <p>Text about us</p>
        <a className ="link-style" target="_blank" href="https://github.com/christopherfulldev"><img className="img-logo"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="logo-github"></img></a>
        

      </div>
      <div className="info-creator">
        <img></img>
        <h3>• Debora Tavares</h3>
        <h5>ABOUT ME</h5>
        <p>26 years old, graduated from law school, technology enthusiast.</p>
        <a className ="link-style" target="_blank" href="https://github.com/DeAT1995"><img className="img-logo"src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="logo-github"></img></a>
      </div>
    </div>
    <div className="backlink">
    <h2>Backlinks</h2>
    <h3>Links/Sites utilizados</h3>
    <a className ="link-style" target="_blank" href="https://rawg.io/">API</a>    </div>
    </div>
  );
};


export default Links;
