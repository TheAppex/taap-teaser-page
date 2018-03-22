import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="h-64">
    <div className="flex container">
      <a className="w-1/3 justify-center" href="#"><img className="h-6 fill-current text-darkPrimary rounded" src={twitterSVG}></img></a>
      <a className="w-1/3 justify-center" href="#"><img className="h-6 fill-current text-darkPrimary rounded" src={mediumSVG}></img></a>
      <a className="w-1/3 justify-center" href="#"><img className="h-6 fill-current text-darkPrimary rounded" src={facebookSVG}></img></a>
    </div>
    <p className="justify-center"> © 2018 | All rights reserved.</p>
  </div>
)

export default Footer