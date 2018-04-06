import React from 'react';

// david - importing our company logo
import logo from "../assets/Logo.svg";

const IndexPage = () => (
  <div className="my-8 flex items-center flex-wrap justify-center antialiased animated fadeIn">
    <img className=" mx-auto px-8 py-4 max-h-100" src={logo}></img>    
    <div className="container mx-auto py-8 px-6">
      <p className="text-primaryText text-center leading-normal text-xl  md:text-2xl lg:text-2xl xl:text-2xl  font-title">We are collecting and will recommend the best Android app per category.</p>
      <p className="text-primaryText text-center leading-normal text-xl  md:text-2xl lg:text-2xl xl:text-2xl  font-title"></p>
    </div>
  </div>
);

export default IndexPage;

// david - removed this subtitle because I dont think we want it included: 

// <p> Like <a href="https://wirecutter.com">wirecutter</a> but for Android apps.)</p>