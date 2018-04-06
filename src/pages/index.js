import React from 'react';

// david - importing our company logo
import logo from "../assets/Logo.svg";

const IndexPage = () => (
  <div className="my-8 antialiased animated fadeIn">
    <img className="container mx-auto px-8 py-4 max-h-100" src={logo}></img>
    <div className="container mx-auto py-8 px-6">
      <p className="text-primaryText text-lg	font-body text-center leading-normal">We recommend the best Android apps per category.</p>
      <p className="text-primaryText text-lg font-body text-center leading-normal">Don't download all the apps, download the best.</p>
    </div>
  </div>
);

export default IndexPage;

// david - removed this subtitle because I dont think we want it included: 

// <p> Like <a href="https://wirecutter.com">wirecutter</a> but for Android apps.)</p>