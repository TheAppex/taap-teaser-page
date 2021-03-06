import React from 'react';

// david - importing our company logo
import logo from "../assets/final-logo-words.svg";

const IndexPage = () => (
  <div className="my-8 flex items-center flex-wrap justify-center antialiased" data-aos="fade" data-aos-duration="1200" data-aos-delay="100" data-aos-once="true">
    <img className="container mx-auto px-8 py-4 max-h-100" src={logo}></img>    
    <div className="container mx-auto py-8 px-6">
      <p className="text-primaryText text-center leading-normal text-xl  md:text-2xl lg:text-2xl xl:text-3xl font-title font-bold">Supercharge your Android experience.</p>
      <p className="text-primaryText text-center leading-normal text-lg  md:text-xl lg:text-xl xl:text-2xl font-title font-bold">We hand select the best apps.</p>
    </div>
  </div>
);

export default IndexPage;

// david - removed this subtitle because I dont think we want it included: 

// <p> Like <a href="https://wirecutter.com">wirecutter</a> but for Android apps.)</p>