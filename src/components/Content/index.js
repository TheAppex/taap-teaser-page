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
      <ul className="w-1/2 list-reset mission-list">
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
        <button className="bg-darkPrimary hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-lightPrimary hover:border-blue rounded">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
          <span>Stay Updated</span>
        </button>
      </div>

      <p className="font-body text-center container h-32"><a href="#">Here’s a preview</a> of what our reviews will look like on Medium.</p>
    </div>


  </div>
);

export default Content;
