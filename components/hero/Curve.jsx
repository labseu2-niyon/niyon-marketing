import React from 'react';
import PropTypes from 'prop-types';

function Curve({ background }) {
  return (
    <div className="curve">
      <svg width={800} height={800}>
        <path d="M 100 0 C 100 400 400 400 600 550 Q 740 650 800 800 V 0" fill={background} />
      </svg>
      <style jsx>{`
        @media (max-width: 599px) {
          .curve {
            display: none;
          } 
        }
      `}
      </style>
    </div>
  );
}

Curve.propTypes = {
  background: PropTypes.string.isRequired,
};

export default Curve;
