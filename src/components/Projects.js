import React from "react";
import '../App.css';
import image1 from '../images/projectCart-1.jpg';
import image2 from '../images/projectCart-2.jpg';
import image3 from '../images/projectCart-3.jpg';
import image4 from '../images/679cd98957fea6a279c7a46d_lasalle_.png';
import image5 from '../images/679cd995105f19737103af51_flow_re (1).png'
import image6 from '../images/logo1.svg';
import image7 from '../images/logo2.svg';
import image8 from '../images/logo3.svg';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="checkProject">
      <h2>Our latest and greatest</h2>
      <a href="#all-projects" className="checkProject-btn-secondary">Check out all projects</a>
       </div>      
      <div className="project-cards">      
     
        <div className="card"><img src={image1} alt="Project 1"></img></div>
        <div className="card"><img src={image2} alt="Project 2" ></img ></div>
        <div className="card"><img src={image2} alt="Project 3"></img></div>
      </div>
      <div  className="projectWords">
        <div className="projectWords-1">
         <h1>We dare you to name a company we haven’t partnered with.</h1>
        </div>
        <div className="projectWords-2"><h4>Our clients range from real estate developers, architects, construction companies, creatives and manufacturers.</h4></div>
      </div>
      <div className="projectLogo">
        <div className="logo"><img src={image6} alt="logo1"></img></div>
         <div className="logo"><img src={image7} alt="logo2"></img></div>
          <div className="logo"><img src={image8} alt="logo3"></img></div>
           <div className="logo"><img src={image5} alt="logo4"></img></div>
            <div className="logo"><img src={image4} alt="logo5"></img></div>
      </div>
    </section>
  );
};

export default Projects;
