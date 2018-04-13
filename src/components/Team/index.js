import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import davidHeadshot from "../../assets/david-twitter.jpg";
import mattHeadshot from "../../assets/matt.jpg";
import kerryHeadshot from "../../assets/kerry-twitter.jpg";

const Team = () => (
  <div className="antialiased p-3 container mx-auto px-4 py-8 mt-8 " data-aos="fade" data-aos-duration="1200" data-aos-delay="300" data-aos-once="true">
	  <p className="text-primaryText text-base xl:text-lg uppercase tracking-wide mb-8 border-t-2 border-dividerColor pt-8">A Project By:</p>
		
		<div className="flex-col sm:flex sm:flex-row font-body justify-around content-center md:px-2 py-4">
				
				<div className="flex justify-center items-center flex-col sm:flex-col md:flex-row text-center sm:text-left py-6 sm:py-0">
					<div>
						<img className="h-12 rounded-full" src={davidHeadshot} alt=""></img>
					</div>	
					
					<div className="sm:ml-0 sm:text-center md:text-left md:ml-2">
						<p className="text-primaryText text-base xl:text-lg font-body w-full mb-1 font-bold">David A. Lindahl </p>
						<a href="https://twitter.com/austriker27" target="_blank" className="text-darkPrimary hover:text-primary text-sm xl:text-base font-body w-full">@austriker27</a>
					</div>
					
				</div>
				
				<div className="flex justify-center items-center flex-col sm:flex-col md:flex-row text-center sm:text-left py-6 sm:py-0">
					<div>
						<img className="h-12 rounded-full" src={mattHeadshot} alt=""></img>
					</div>
					
					<div className="sm:ml-0 sm:text-center md:text-left md:ml-2">
						<p className="text-primaryText text-base xl:text-lg font-body w-full mb-1 font-bold">Matt Lawrence </p>
						<a href="https://twitter.com/MLProductions01" target="_blank" className="text-darkPrimary hover:text-primary text-sm xl:text-base font-body  w-full">@MLProductions01</a> 
					</div>
				</div>
				
				<div className="flex justify-center items-center flex-col sm:flex-col md:flex-row text-center sm:text-left py-6 sm:py-0">
					<div>
						<img className="h-12 rounded-full" src={kerryHeadshot} alt=""></img>
					</div>	
					
					<div className="text-center sm:ml-0 sm:text-center md:text-left md:ml-2">
						<p className="text-primaryText text-base xl:text-lg font-body w-full mb-1 font-bold">Kerry Morrison </p>
						<a href="https://twitter.com/kmore" target="_blank" className="text-darkPrimary hover:text-primary  text-sm xl:text-base font-body  w-full">@kmore</a>
					</div>
				</div>
		</div>
		
  </div>
)

export default Team;