import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="p-3 bg-lightPrimary ">
    <div className="flex justify-center container mx-auto px-4">
      <a href="#"><img className="h-4 fill-current text-darkPrimary rounded m-2" src={twitterSVG}></img></a>
      <a href="#"><img className="h-4 fill-current text-darkPrimary rounded m-2" src={mediumSVG}></img></a>
      <a href="#"><img className="h-4 fill-current text-darkPrimary rounded m-2" src={facebookSVG}></img></a>
    </div>
    <div className="flex-col justify-center py-4">
      <p className="text-primaryText text-xs leading-normal text-center">P.S. Are you a passionate android fan with a background in writing?</p>
      <p className="text-primaryText text-xs leading-normal text-center">Email us a brief bio and include previous writing samples.</p>
      <p className="text-primaryText text-xs leading-normal text-center">We are always looking for the right contributors to join our growing team.</p>
    </div>
    <p className="text-primaryText text-xs w-full leading-normal text-center"> © 2018 | All rights reserved.</p>
  </div>
)

export default Footer