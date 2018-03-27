import React from 'react';
import Link from 'gatsby-link';

// david - TODO get the variables working correctly below for the border color

const Header = () => (
  <div
    style={{
      border: `4px solid #388E3C`,
      width: '100%',
    }}
  >
    <div
      style={{
       
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
