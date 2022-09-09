import React from "react";
import Marvel from "./images/marvel.jpg";
import Facebook from "./images/facebook.png";
import Whatsapp from "./images/whatsapp.png";
import Instagram from "./images/instaagram.png";
import Twitter from "./images/twitter.png";

export default function About() {
  return (
    <div className="About">
      <img src={Marvel} className="MarvelImg" />
      <div className="about-info">
        <h2>Marvel</h2>
        <p1>Front End Developer</p1>
      </div>
      <div className="about-info2">
        <button>Email</button>
      </div>
      <div className="about-info3">
        <h2>About</h2>
        <p2>This is marvel from Nigeria, a front-end Developer</p2>
      </div>
      <div className="about-info3">
        <h2>Interests</h2>
        <p2>This is marvel from Nigeria, a front-end Developer</p2>
      </div>
      <div className="footerr">
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={Whatsapp} />
        <img src={Twitter} />
      </div>
    </div>
  );
}
