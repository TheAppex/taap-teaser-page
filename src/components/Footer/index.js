import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="p-3 bg-darkPrimary antialiased">
    <div className="flex justify-center container mx-auto px-4">
      <a href="#"><img className="h-4 fill-current text-textIcons rounded m-2" src={twitterSVG}></img></a>
      <a href="#"><img className="h-4 fill-current text-textIcons rounded m-2" src={mediumSVG}></img></a>
      <a href="#"><img className="h-4 fill-current text-textIcons rounded m-2" src={facebookSVG}></img></a>
    </div>
    <p className="font-body text-textIcons text-xs xl:text-sm w-full leading-normal text-center"> © 2018 | All rights reserved | <a href="#" className="text-textIcons text-xs xl:text-sm w-full leading-normal text-center">Contact Us</a></p>
    <div className="flex-col justify-center py-4">
      <p className="font-body text-textIcons text-xs xl:text-sm leading-normal text-center">P.S. Are you a passionate android fan with a background in writing?</p>
      <p className="font-body text-textIcons text-xs xl:text-sm leading-normal text-center">Shoot us an <a href="mailto:hello@theappex.com" className="text-textIcons">email</a> with some words about yourself and links to things you've written.</p>
      <p className="font-body text-textIcons text-xs xl:text-sm leading-normal text-center">We are always looking for the right contributors to join our growing team.</p>
    </div>
    
  </div>
)

export default Footer