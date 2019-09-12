import React, { useState } from 'react';

function ArrowButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a href="https://app.niyonapp.com/auth/signup">
      <button
        type="button"
        onMouseOver={() => setHovered(true)}
        onFocus={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onBlur={() => setHovered(false)}
      >
        <i className="material-icons">arrow_forwards</i>Sign Up Now
      </button>
      <style jsx>{`
            button {
                position: relative;
                margin-top: 32px;
                padding: 0 40px;
                display: flex;
                color: #1759e8;
                justify-content: center;
                align-items: center;
                background: none;
                border: none;
                font-weight: 700;
                font-size: 1.2rem;
                cursor: pointer;
            }

            .material-icons {
                position: absolute;
                left: ${hovered ? '10px' : '0px'};
                transition: left 400ms;
            }

            a {
              text-decoration: none;
              outline: none;
            }
        `}
      </style>
    </a>
  );
}

export default ArrowButton;
