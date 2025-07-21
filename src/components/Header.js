import React from "react";
import '../App.css';

const Header = () => {
  return (
<div className="header">
<div className="top-header">
      <nav className="nav">
        <a href="/" className="logo"><h1>WeMake</h1></a>
        <ul className="menu">
          <li><a href="#about">About us</a></li>
          <li><a href="#work">How we work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#residential">Residential</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact">EN NL</a></li>
        </ul>    
        <a href="#contact" className="btn-primary"><h5>let's talk</h5></a>
      </nav>
    </div>
     <div className="bottom-header">
      <div className="bottom-header-content">
        <h1>We build<br/>without hassle.</h1>
        <div className="bottom-header-buttons">
          <a href="#projects" className="btn-secondary-one">Projects</a>
          <a href="#residential" className="btn-secondary-two">Residential</a>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Header;
