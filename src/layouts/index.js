import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/index.js';
import SignUp from '../components/SignUp/index.js';
import Footer from '../components/Footer/index.js';


import "../styles/main.scss"


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Android Apps Project"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <SignUp />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
