import React from 'react';
import Link from 'gatsby-link';

// david - importing images
import phoneApps from "../../assets/undraw_mobile_apps.svg";
import analyzeAllTheThings from "../../assets/undraw_data_xmfy.svg";
import spaceShip from "../../assets/undraw_To_the_stars_qhyy.png";

const Content = () => (
  <div className="h-64">
    <div className="flex">
      <div className="flex-1">
        <p className="font-body align-middle">Overwhelmed by how many different apps there are for ____ ??</p>
        <h3 className="font-title align-middle">We are too.</h3>
      </div>
      <img className="flex-1 h-48 align-middle" src={phoneApps}></img> 
    </div>

    <div className="h-64">
      <h3 className="font-title flex">Our Mission</h3>
      <img className="w-1/2 h-48" src={analyzeAllTheThings}></img> 
      <ul className="w-1/2">
        <li className="font-body">Provide the most comprehensive 
        reviews for the best Android Apps, 
        like the world has never seen before.</li>
        <li className="font-body">Exhaustively research and present the best apps in popular categories like calendars, photography, & email</li>
        <li className="font-body">Judge apps based on overall design, user experience and usability with highlights for indie developers</li>
      </ul>
    </div>

    <div className="h-64">
      <h4 className="font-title text-center container">Let us do the hard work and find the best apps. 
      So you can get on enjoying life.</h4>
    </div>

    <div className="flex h-64">
      <img className="h-48 w-1/2" src={spaceShip}></img>
      <div className="w-1/2">
        <p className="font-body">Launching soon</p>
        <button className="font-title">Stay Updated</button>
      </div>

      <p className="font-body text-center container h-32"><a href="#">Here’s a preview</a> of what our reviews will look like on Medium.</p>
    </div>


  </div>
);

export default Content;
