import React from "react";
import "../NavBar/index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>GAMEHUB</h1>
      <h4><Link className ="link-style" to="/cardgames">Card Games</Link></h4> 
    </nav>
  );
};

export default NavBar;
