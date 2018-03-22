import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="">
    <div className="flex container">
      <a className="flex-1 justify-center" href="#"><img className="h-6 fill-current text-darkPrimary rounded" src={twitterSVG}></img></a>
      <a className="flex-1 justify-center" href="#"><img className="h-6 fill-current text-darkPrimary rounded" src={mediumSVG}></img></a>
      <a className="flex-1 justify-center" href="#"><img className="h-6 fill-current text-darkPrimary rounded" src={facebookSVG}></img></a>
    </div>
    <p> © 2018 | All rights reserved.</p>
  </div>
)

export default Footer