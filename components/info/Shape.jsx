import React from 'react';
import PropTypes from 'prop-types';

function Shape({ background }) {
  return (
    <svg height={600} width={600}>
      {/* eslint-disable-next-line */}
      <path d="M 100 200 C 60 50 200 40 300 140 Q 360 190 420 135 Q 580 15 520 250 Q 480 380 520 450 Q 580 590 400 490 Q 280 400 150 500 Q 60 550 100 450 Q 130 400 120 300" fill={background} />
    </svg>
  );
}

Shape.propTypes = {
  background: PropTypes.string.isRequired,
};

export default Shape;
