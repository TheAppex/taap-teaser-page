import React from 'react';
import Link from 'gatsby-link';

// david - importing images
import phoneApps from "../../assets/undraw_mobile_apps.svg";
import analyzeAllTheThings from "../../assets/undraw_data_xmfy.svg";
import spaceShip from "../../assets/undraw_To_the_stars_qhyy.png";

const Content = () => (
	
  <div className="flex flex-col">
	<div className="flex content-around justify-center">
	  <div>
		<p className="font-body align-middle">Overwhelmed by how many different apps there are for ____ ??</p>
		<h3 className="font-title align-middle">We are too.</h3>
	  </div>
	  <img className="h-48 align-middle" src={phoneApps}></img> 
	</div>
	
	<div>
	  <h3 className="font-title text-center">Our Mission</h3>
	  <div className="flex justify-around items-center">
		  <div><img className=" h-48" src={analyzeAllTheThings}></img> </div>
		  <div className="w-1/2">
		  <ul className="list-reset mission-list">
			<li className="font-body">Provide the most comprehensive 
			reviews for the best Android Apps, 
			like the world has never seen before.</li>
			<li className="font-body">Exhaustively research and present the best apps in popular categories like calendars, photography, & email</li>
			<li className="font-body">Judge apps based on overall design, user experience and usability with highlights for indie developers</li>
		  </ul>
		  </div>
	  </div>
	</div>
	
	<div className="flex items-center justify-center h-64 text-center w-full">
	  <h4 className="font-title text-center">Let us do the hard work and find the best apps. 
	  So you can get on enjoying life.</h4>
	</div>

	<div className="flex items-center justify-center">
	  <img className="h-48 w-1/3" src={spaceShip}></img>
	  <div className="flex items-center flex-col">
		<p className="font-body mb-2">Launching soon</p>
		<button className="bg-darkPrimary hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-lightPrimary hover:border-blue rounded">
		  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
		  <span>Stay Updated</span>
		</button>
	  </div>
	</div>

	<div className="flex items-center justify-center h-64 text-center w-full">
		<h4 className="font-body text-center"><a href="#">Here’s a preview</a> of what our reviews will look like on Medium.</h4>
	</div>

  </div>
	
);

export default Content;
