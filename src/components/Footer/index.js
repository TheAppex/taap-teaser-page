import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="h-64 p-3">
    <div className="flex justify-center">
      <a href="#"><img className="h-10 fill-current text-darkPrimary rounded m-2" src={twitterSVG}></img></a>
      <a href="#"><img className="h-10 fill-current text-darkPrimary rounded m-2" src={mediumSVG}></img></a>
      <a href="#"><img className="h-10 fill-current text-darkPrimary rounded m-2" src={facebookSVG}></img></a>
    </div>
    <p className="w-full text-center"> © 2018 | All rights reserved.</p>
  </div>
)

export default Footer