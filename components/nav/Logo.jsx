import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function Logo({ noText }) {
  return (
    <Link href="/">
      <a>
        <img src="/static/niyon-logo.png" alt="niyon logo" height={40} />
        { !noText && (
        <h1
          style={{
            fontFamily: 'Lato',
            color: '#000',
            cursor: 'pointer',
            fontSize: 35,
            marginLeft: 8,
          }}
        >
            Niyon
        </h1>
        )}
        <style jsx>{`
            a {
                box-sizing: border-box;
                text-decoration: none;
                height: 62px;
                border-radius: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            a:focus{
                outline: none;
                box-shadow: 0 0 0 4px #ffffff, 0 0 0 5px #484848, 0 0 0 5px rgba(255,255,255,0.3);
            } 

            @media(max-width: 600px) {
              h1 {
                display: none;
              }
            } 
        `}
        </style>
      </a>
    </Link>
  );
}

Logo.propTypes = {
  noText: PropTypes.bool,
};

Logo.defaultProps = {
  noText: false,
};

export default Logo;
