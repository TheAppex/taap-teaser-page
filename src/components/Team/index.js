import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import davidHeadshot from "../../assets/david-twitter.jpg";
import mattHeadshot from "../../assets/matt-twitter.jpg";
import kerryHeadshot from "../../assets/kerry-twitter.jpg";

const Team = () => (
  <div className="p-3 container mx-auto px-4 py-8 my-8">
	  <p className="text-primaryText text-basemb-8">A Project By:</p>
      <div className="font-body flex-row justify-around px-2 py-4">
        
				<div className="flex items-center">
					<img className="h-12 rounded-full" src={davidHeadshot} alt=""></img>
					
					<div className="flex-col">
						<p className="text-primaryText text-base font-body ml-2 w-full">David Lindahl </p>
						<a href="#" target="_blank" className="text-primaryText text-base font-body ml-2 w-full">@austriker27</a>
					</div>
				</div>

				<div className="flex items-center">
					<img className="h-12 rounded-full" src={mattHeadshot} alt=""></img>
					
					<div className="flex-col">
						<p className="text-primaryText text-base font-body ml-2 w-full">Matt Lawrence </p>
						<a href="#" target="_blank" className="text-primaryText text-base font-body ml-2 w-full">@MLProductions01</a> 
					</div>
				</div>

				<div className="flex items-center">
					<img className="h-12 rounded-full" src={kerryHeadshot} alt=""></img>
					<div className="flex-col">
						<p className="text-primaryText text-base font-body ml-2 w-full">Kerry Morrison </p>
						<a href="#" target="_blank" className="text-primaryText text-base font-body ml-2 w-full">@kmore</a>
					</div>
				</div>
		
			</div>
    
  </div>
)

export default Team;