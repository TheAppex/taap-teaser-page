import React from 'react';
import Link from 'gatsby-link';

// david - importing images
import phoneApps from "../../assets/undraw-android-edit.svg";
import analyzeAllTheThings from "../../assets/undraw_data_xmfy.svg";
import spaceShip from "../../assets/undraw_To_the_stars_qhyy.png";

const Content = () => (
	
  <div className="flex flex-col antialiased">
		<div className="flex content-around py-8 my-8 container mx-auto px-4">
			<div className="px-8 mx-8 my-auto w-1/2">
				<p className="text-primaryText text-lg font-body align-middle max-w-xs leading-normal">Overwhelmed by how many different apps there are for ____ ??</p>
				<p className="text-primaryText text-3xl font-title align-middle font-bold leading-normal"><span className="highlight">We are too.</span></p>
			</div>
			<img className="h-48 align-middle w-1/2" src={phoneApps}></img> 
		</div>
		
		<div className="">
			<p className="text-primaryText text-3xl font-title text-center container mx-auto px-4 py-2 pt-4 bg-lightPrimary rounded-t-lg w-1/3 font-bold">Our Mission</p>
			<div className="flex justify-around items-center bg-lightPrimary pt-8 pb-8">
				<div className="w-1/2">
					<img className="px-8" src={analyzeAllTheThings}></img> 
				</div>
				<div className="w-1/2">
					<ul className="list-reset mission-list px-8">
						<li className="text-primaryText text-sm font-body pb-4 leading-normal">Provide the most comprehensive 
						reviews for the best Android Apps, 
						like the world has never seen before.</li>
						<li className="text-primaryText text-sm font-body pb-4 leading-normal">Exhaustively research and present the best apps in popular categories like calendars, photography, & email</li>
						<li className="text-primaryText text-sm font-body pb-4 leading-normal">Judge apps based on overall design, user experience and usability with highlights for indie developers</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div className="flex items-center flex-wrap justify-center text-center w-full container mx-auto px-4 py-8 my-8 ">
			<div className="w-full">
				<p className="text-primaryText text-xl font-title text-center font-bold leading-normal md:text-3xl lg:text-3xl xl:text-3xl"><span className="highlight">We do the hard work and find the best apps.</span>
				</p>
			</div>
			<div className="w-full">
				<p className="text-primaryText text-xl font-title text-center font-bold leading-normal md:text-3xl lg:text-3xl xl:text-3xl"><span className="highlight">So you can get to enjoying life.</span>
				</p>
			</div>
		</div>

		<div className="flex items-center justify-around container mx-auto px-4 py-8 my-8">
			<img className="h-48 w-1/3" src={spaceShip}></img>
			<div className="flex items-center flex-col">
			<p className="text-primaryText text-lg font-body mb-2 text-center px-8 max-w-xs leading-normal">Launching soon. <br></br>
			Get notified when we go live and vote for the category you want reviewed first.</p>
			<button className="bg-darkPrimary hover:bg-primary text-white font-bold py-2 px-4 border-b-4 border-lightPrimary hover:border-lightPrimary rounded">
				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
				<span className="font-title uppercase tracking-wide font-bold">Stay Updated</span>
			</button>
			</div>
		</div>

		<div className="flex items-center justify-center py-8 my-8 text-center w-full container mx-auto px-4">
			<p className="text-primaryText text-lg font-body text-center leading-normal">Can't wait? Here's a <a href="#" className="text-darkPrimary hover:text-primary leading-normal">sneak peek</a> article on Medium.</p>
		</div>

  </div>
	
);

export default Content;
