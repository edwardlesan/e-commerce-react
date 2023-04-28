import React from "react";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h4>About</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          perferendis neque, maxime ipsum quod, omnis laboriosam error
          consequatur repellendus ipsam vel tenetur adipisci temporibus veniam.
        </p>
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <span>Address: </span>510 Downers Groove, Street 65, Chicago
          </li>
          <li>
            <span>Phone: </span>+01 2222 365 / (+91) 01 2345 6789
          </li>
          <li>
            <span>Hours: </span>10:00 - 18:00. Mon - Sat
          </li>
        </ul>
      </div>
      <div className="social">
        <h4>Social</h4>
        <ul>
          <li>
            <FacebookLogo size={28} />
          </li>
          <li>
            <TwitterLogo size={28} />
          </li>
          <li>
            <InstagramLogo size={28} />
          </li>
          <li>
            <YoutubeLogo size={28} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
