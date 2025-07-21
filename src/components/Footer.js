import React from "react";
import '../App.css';


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footerText"><h1>Ready to build without the hassle?</h1></div>
      <div className="yesButton">
        <div className="yb1"><a href="#"><h2>Yes</h2></a></div>
        <div className="yb2"><a href="#"><h2>Yes, but in Green</h2></a></div></div>
      <div className="footer">
        <div className="footermenu"><img src="https://cdn.prod.website-files.com/6797888d581efb7e4c2c562b/67bc47f26bfcf86fbbdda2f6_wemake-footer.svg" ></img></div>
        <div className="footermenu"><h1>Follow us</h1><a href="#">LinkedIn</a> </div>
        <div className="footermenu"><h1 className="sit">Sitemap</h1>
          <div><a href="#">about</a></div>
          <div> <a href="#">how we work</a></div>
          <div> <a href="#">residential</a></div>
          <div> <a href="#">get in touch</a></div>
          <div><a href="#">projects</a></div>

        </div>
        <div className="footermenu"><h1>Get in touch</h1>
          <a href="#">Tjotterspad 421081 KD Amsterdam</a>
          <div><a href="#">+31 (0) 20 84 540 46</a></div>
          <div><a href="#">info@wemake.nl</a></div></div>
      </div>
    </footer>
  );
};

export default Footer;
