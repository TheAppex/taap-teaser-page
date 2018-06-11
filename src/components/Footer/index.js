import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import twitterSVG from "../../assets/icon-twitter.svg";
import mediumSVG from "../../assets/icon-medium.svg";
import facebookSVG from "../../assets/icon-facebook.svg";


const Footer = () => (
  <div className="p-3 bg-darkPrimary antialiased">
    <div className="flex justify-center container mx-auto px-4">

      <a href="http://twitter.com/TheAppexHQ" target="_blank"  className=" m-2 py-auto">
        <svg className="fill-current text-textIcons hover:text-grey rounded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
        </svg>
      </a>

      <a href="http://medium.com/TheAppex" target="_blank" className=" m-2 py-auto hidden">
        <svg className="fill-current text-textIcons hover:text-grey rounded" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.974 17.557v-.235l-1.092-1.072c-.096-.073-.144-.194-.124-.313v-7.874c-.02-.119.028-.24.124-.313l1.118-1.072v-.235h-3.869l-2.758 6.88-3.138-6.88h-4.059v.235l1.308 1.575c.128.115.194.285.176.457v6.188c.038.223-.032.451-.189.614l-1.471 1.784v.235h4.17v-.235l-1.471-1.784c-.158-.163-.233-.389-.202-.614v-5.352l3.66 7.985h.425l3.143-7.985v6.365c0 .17 0 .202-.111.313l-1.13 1.098v.235h5.49z"/>
        </svg>
      </a>

      <a href="http://facebook.com/TheAppex" target="_blank" className=" m-2 py-auto">
        <svg className="fill-current text-textIcons hover:text-grey rounded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
        </svg>
      </a>

      <a href="http://instagram.com/TheAppex" target="_blank" className=" m-2 py-auto">
        <svg  className="fill-current text-textIcons hover:text-grey rounded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
        </svg>
      </a>
    </div>
    <p className="font-body text-textIcons text-xs xl:text-sm w-full leading-normal text-center"> © 2018 · All rights reserved · <a href="mailto:info@theappex.com" className="text-textIcons text-xs xl:text-sm w-full leading-normal text-center">Contact Us</a></p>
    <div className="flex-col justify-center py-4">
      <p className="font-body text-textIcons text-xs xl:text-sm leading-normal text-center">P.S. Are you a passionate android fan with a background in writing?</p>
      <p className="font-body text-textIcons text-xs xl:text-sm leading-normal text-center">Shoot us an <a href="mailto:info@theappex.com" className="text-textIcons">email</a> with some words about yourself and links to things you've written.</p>
      <p className="font-body text-textIcons text-xs xl:text-sm leading-normal text-center">We are always looking for the right contributors to join our growing team.</p>
    </div>
    
  </div>
)

export default Footer