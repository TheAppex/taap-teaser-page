import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'

// david - importing scss
import "../styles/normalize.scss"
// import "../styles/main.scss"
import "../styles/index.css"

//david - importing animation library
import "../../node_modules/aos/dist/aos.css"

// david - importing the components
import Header from '../components/Header/index.js';
import SignUp from '../components/SignUp/index.js';
import Content from '../components/Content/index.js';
import Team from '../components/Team/index.js';
import Footer from '../components/Footer/index.js';

import favicon from '../../src/assets/favicon.png'


class Template extends React.Component {

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
      this.aos.refresh()
  }

  render() {
    const { location, children } = this.props
    let header

    return (
      <div>
        <Helmet>
          {/* General tags */}
          <meta name="description" content='We review and recommend the best Android Apps so you can supercharge your smartphone experience.' />
          <meta name="image" content={favicon} />

          {/* Schema.org tags */}
          

          {/* OpenGraph tags */}
          <meta property="og:title" content='The Appex' />
          <meta property="og:description" content='We review and recommend the best Android Apps so you can supercharge your smartphone experience.' />
          <meta property="og:image" content={favicon} />

          {/* Twitter Card tags */}
          <meta name="twitter:title" content='The Appex' />
          <meta name="twitter:description" content='We review and recommend the best Android Apps so you can supercharge your smartphone experience.' />
          <meta name="twitter:image" content={favicon} />
        </Helmet>
        
        <Header />
        <div>
          {children()}
        </div>
      
        <Content />

        <Team />

        <Footer />
      
      </div>
    )
  }
}

export default Template

// const TemplateWrapper = ({ children }) => (
  

//   <div>
//     <Helmet
//       title="The Android Apps Project"
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header />
//     <div>
//       {children()}
//     </div>
	
// 		<Content />

// 		<Team />

// 		<Footer />
	
//   </div>
// );

// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// };

// export default TemplateWrapper;
