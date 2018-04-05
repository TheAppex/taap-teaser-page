import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import davidHeadshot from "../../assets/david-twitter.jpg";
import mattHeadshot from "../../assets/matt-twitter.jpg";
import kerryHeadshot from "../../assets/kerry-twitter.jpg";

const Team = () => (
  <div className="antialiased p-3 container mx-auto px-4 py-8 mt-8">
	  <p className="text-primaryText text-basemb-8 border-t-2 border-dividerColor pt-8">A Project By:</p>
		
		<div className="flex-col sm:flex sm:flex-row font-body justify-around content-center md:px-2 py-4">
				
				<div className="flex justify-center items-center flex-col sm:flex-col md:flex-row text-center sm:text-left py-6 sm:py-0">
					<div>
						<img className="h-12 rounded-full" src={davidHeadshot} alt=""></img>
					</div>	
					
					<div className="sm:ml-0 sm:text-center md:text-left md:ml-2">
						<p className="text-primaryText text-base font-body w-full">David Lindahl </p>
						<a href="#" target="_blank" className="text-primaryText text-base font-body w-full">@austriker27</a>
					</div>
					
				</div>
				
				<div className="flex justify-center items-center flex-col sm:flex-col md:flex-row text-center sm:text-left py-6 sm:py-0">
					<div>
						<img className="h-12 rounded-full" src={mattHeadshot} alt=""></img>
					</div>
					
					<div className="sm:ml-0 sm:text-center md:text-left md:ml-2">
						<p className="text-primaryText text-base font-body w-full">Matt Lawrence </p>
						<a href="#" target="_blank" className="text-primaryText text-base font-body  w-full">@MLProductions01</a> 
					</div>
				</div>
				
				<div className="flex justify-center items-center flex-col sm:flex-col md:flex-row text-center sm:text-left py-6 sm:py-0">
					<div>
						<img className="h-12 rounded-full" src={kerryHeadshot} alt=""></img>
					</div>	
					
					<div className="text-center sm:ml-0 sm:text-center md:text-left md:ml-2">
						<p className="text-primaryText text-base font-body w-full">Kerry Morrison </p>
						<a href="#" target="_blank" className="text-primaryText text-base font-body  w-full">@kmore</a>
					</div>
				</div>
		</div>
		
  </div>
)

export default Team;