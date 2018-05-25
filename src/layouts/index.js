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
import shareImage from '../../src/assets/social-media-sharing.png'


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
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const siteUrl = this.props.data.site.siteUrl

    return (
      <div>
        <Helmet>
          {/* Favicon */}
          <link rel="shortcut icon" href={favicon} />
          
         

          {/* Google / Search Engine Tags */} 
          <meta itemprop="name" content={siteTitle}/>
          <meta itemprop="description" content={siteDescription}/>
          <meta itemprop="image" content={shareImage}/>

          {/* Facebook Meta Tags */} 
          <meta property="og:url" content={siteUrl}/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={siteTitle}/>
          <meta property="og:description" content={siteDescription}/>
          <meta property="og:image" content={shareImage}/>

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={siteTitle}/>
          <meta name="twitter:description" content={siteDescription}/>
          <meta name="twitter:image" content={shareImage}/>

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

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
`

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
