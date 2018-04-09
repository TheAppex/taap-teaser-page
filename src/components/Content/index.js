import React from 'react';
import Link from 'gatsby-link';

// david - importing images
import phoneApps from "../../assets/undraw-android-edit.svg";
import analyzeAllTheThings from "../../assets/undraw_data_xmfy.svg";
import spaceShip from "../../assets/undraw_To_the_stars_qhyy.svg";

const Content = () => (

	
	
	<div className="flex flex-col antialiased">
	
		<div className="flex-col sm:flex sm:flex-row items-center justify-around container mx-auto px-4 py-8">
		<div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">
			<img className="align-middle px-8 py-4 max-h-360" src={spaceShip}></img> 
		</div>
		<div className="flex items-center flex-col" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">
			<p className="text-primaryText text-lg font-body mb-2 text-center px-0 max-w-xs leading-normal">We're prepping to launch soon! Get notified when we go live.</p>

			<form className="w-full max-w-sm">
				<div className="flex items-center py-2">
					<input className="appearance-none bg-transparent border-none w-full text-primaryText mr-3 py-2 px-2 bg-grey-lighter rounded" type="text" placeholder="Stay updated via email" aria-label="Full name"></input>
					
					<button className="flex-no-shrink bg-darkPrimary hover:bg-primary text-lightPrimary font-bold py-2 px-4 rounded" type="button">
						<span className="font-body uppercase tracking-wide font-bold"></span>
						<svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
					</button>
					
				</div>
			</form>
			

			
				<button className="p-2 bg-darkPrimary hover:bg-primary items-center text-textIcons leading-none rounded-full flex lg:inline-flex mt-2" role="alert">
					<span className="flex rounded-full bg-lightPrimary uppercase px-2 py-1 text-xs font-bold text-darkPrimary mr-3">Vote</span>
					<span className="font-body font-semibold mr-2 text-left flex-auto">Tell us which category you want reviewed</span>
					<svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
				</button>
			
		</div>
	</div>

	<div className="flex items-center justify-center py-8 my-8 text-center w-full container mx-auto px-4">
		<p className="text-primaryText text-lg font-body text-center leading-normal" data-aos="fade" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">Can't wait? Here's a <a href="#" className="text-darkPrimary hover:text-primary leading-normal">sneak peek</a> article on Medium.</p>
	</div>
		<div className="flex-col sm:flex sm:flex-row sm:items-center content-around py-8 my-8 container mx-auto px-4">
			<div className="px-8 my-auto sm:w-1/2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">
				<p className="text-primaryText text-lg font-body align-middle max-w-xs leading-normal">Overwhelmed by how many different apps there are for ____ ??</p>
				<p className="text-primaryText  text-2xl  md:text-3xl lg:text-3xl xl:text-3xl  font-title align-middle font-bold leading-normal"><span className="highlight">We are too.</span></p>
			</div>
			<div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">
				<img className="align-middle px-8 py-4 max-h-360" src={phoneApps}></img> 
			</div>
		</div>
		
		<div className="">
			<p className="text-primaryText uppercase tracking-wide text-2xl  md:text-3xl lg:text-3xl xl:text-3xl font-title text-center container mx-auto px-4 py-2 pt-4 bg-lightPrimary rounded-t-lg w-2/3 sm:w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3 font-bold">Our Mission</p>
			<div className="flex-col sm:flex sm:flex-row content-around items-center bg-lightPrimary shadow pt-8 pb-8">
				<div data-aos="fade" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">
					<div className="sm:w-1/2">
						<img className="px-8 py-4 max-h-360" src={analyzeAllTheThings}></img> 
					</div>
					<div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
						<ul className="list-reset mission-list px-8">
							<li className="text-primaryText text-sm md:text-base lg:text-base xl:text-base font-body pb-4 leading-normal">Provide the most comprehensive 
							reviews for the best Android Apps, 
							like the world has never seen before</li>
							<li className="text-primaryText text-sm md:text-base lg:text-base xl:text-base font-body pb-4 leading-normal">Cover all the most popular app categories like to do lists, calendars, & weather apps</li>
							<li className="text-primaryText text-sm md:text-base lg:text-base xl:text-base font-body pb-4 leading-normal">Judge apps based on overall design, user experience and usability with highlights for indie developers</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div className="flex items-center flex-wrap justify-center text-center w-full container mx-auto px-4 py-8 my-8 ">
			<div className="w-full">
				<p className="text-primaryText text-2xl  md:text-3xl lg:text-3xl xl:text-3xl font-title text-center font-bold leading-normal" data-aos="fade" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true"><span className="highlight">We spend time comparing all the best apps.</span>
				</p>
			</div>
			<div className="w-full">
				<p className="text-primaryText  text-2xl  md:text-3xl lg:text-3xl xl:text-3xl  font-title text-center font-bold leading-normal" data-aos="fade" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true"><span className="highlight">You save time downloading them.</span>
				</p>
			</div>
		</div>

	

  </div>
	
);

export default Content;
