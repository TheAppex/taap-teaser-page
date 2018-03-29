import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="h-24 p-3 bg-lightPrimary ">
    <div className="flex justify-center container mx-auto px-4">
      <a href="#"><img className="h-4 fill-current text-darkPrimary rounded m-2" src={twitterSVG}></img></a>
      <a href="#"><img className="h-4 fill-current text-darkPrimary rounded m-2" src={mediumSVG}></img></a>
      <a href="#"><img className="h-4 fill-current text-darkPrimary rounded m-2" src={facebookSVG}></img></a>
    </div>
    <p className="text-primaryText text-xs w-full text-center"> Are you a passionate android fan with a background in writing? Email us a brief bio and include previous writing samples. We are always looking for the right contributors to join our growing team. </p>
    <p className="text-primaryText text-xs w-full text-center"> © 2018 | All rights reserved.</p>
  </div>
)

export default Footer