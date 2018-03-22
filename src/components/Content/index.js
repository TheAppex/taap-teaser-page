import React from 'react';
import Link from 'gatsby-link';

// david - importing images
import phoneApps from "../../assets/undraw_mobile_apps.svg";
import analyzeAllTheThings from "../../assets/undraw_data_xmfy.svg";
import spaceShip from "../../assets/undraw_To_the_stars_qhyy.png";

const Content = () => (
  <div>
    <div className="flex">
      <div className="flex-1">
        <p className="font-body">Overwhelmed by how many different apps there are for ____ ??</p>
        <h3 className="font-title">We are too.</h3>
      </div>
      <img className="flex-1 h-64" src={phoneApps}></img> 
    </div>

    <div>
      <h3 className="font-title flex">Our Mission</h3>
      <img className="h-64 w-1/2" src={analyzeAllTheThings}></img> 
      <ul className="w-1/2">
        <li className="font-body">Provide the most comprehensive 
        reviews for the best Android Apps, 
        like the world has never seen before.</li>
        <li className="font-body">Exhaustively research and present the best apps in popular categories like calendars, photography, & email</li>
        <li className="font-body">Judge apps based on overall design, user experience and usability with highlights for indie developers</li>
      </ul>
    </div>

    <div>
      <h4 className="font-title text-center container">Let us do the hard work and find the best apps. 
      So you can get on enjoying life.</h4>
    </div>

    <div className="flex">
      <img className="h-64 w-1/2" src={spaceShip}></img>
      <div className="w-1/2">
        <p className="font-body">Launching soon</p>
        <button className="font-title">Stay Updated</button>
      </div>

      <p><a href="#" className="font-body text-center container">Here’s a preview</a> of what our reviews will look like on Medium.</p>
    </div>


  </div>
);

export default Content;
