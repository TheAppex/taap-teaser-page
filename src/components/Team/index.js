import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import davidHeadshot from "../../assets/david-twitter.jpg";
import mattHeadshot from "../../assets/matt-twitter.jpg";
import kerryHeadshot from "../../assets/kerry-twitter.jpg";

const Team = () => (
  <div>
    <div className="h-64">
      <ul className="font-body flex">A Project By:</ul>
        <li className="w-1/3">
          <img className="h-12 rounded-full" src={davidHeadshot} alt=""></img>
          <p className="font-body">David Lindahl</p>
          <a href="#" target="_blank" className="font-body">@austriker27</a>
        </li>
        <li className="w-1/3">
          <img className="h-12 rounded-full" src={mattHeadshot} alt=""></img>
          <p className="font-body">Matt Lawrence</p>
          <a href="#" target="_blank" className="font-body">@MLProductions01</a>
        </li>
        <li className="w-1/3">
          <img className="h-12 rounded-full" src={kerryHeadshot} alt=""></img>
          <p className="font-body">Kerry Morrison</p>
          <a href="#" target="_blank" className="font-body">@kmore</a>
        </li>
    </div>
  </div>
)

export default Team;