import React from 'react';

// david - importing our company logo
import logo from "../assets/Logo.svg";

const IndexPage = () => (
  <div className="py-8 my-8 antialiased animated fadeIn">
    <img className="align-middle px-8 py-4 max-h-360" src={logo}></img>
    <p className="text-primaryText text-lg	font-body text-center">We recommend the best Android apps per category.</p>
    <p className="text-primaryText text-lg font-body text-center">Don't download all the apps, download the best.</p>
    
  </div>
);

export default IndexPage;

// david - removed this subtitle because I dont think we want it included: 

// <p> Like <a href="https://wirecutter.com">wirecutter</a> but for Android apps.)</p>