import React from 'react';
import { darken } from 'polished';
import PropTypes from 'prop-types';

function Text({ title, text, link }) {
  return (
    <div className="cta">
      <h1>{title}</h1>
      {text.map(line => <p>{line}</p>)}
      <a href={link}>
        <button type="button" className="cta-btn">Sign Up Now</button>
      </a>
      <style jsx>{`
        .cta-btn {
            margin: 32px 0;
            width: 250px;
            height: 55px;
            background: #348fbb;
            border-radius: 8px;
            border: none;
            color: #fff;
            box-shadow: 0 4px 14px rgba(0,0,0,0.1);
            cursor: pointer;
            font-weight: 700;
            font-size: 1.25rem;
            transition: transform 400ms, box-shadow 400ms, color 400ms, background 400ms;
        }   

        .cta-btn:hover {
            transform: translate(0, -2px);
            box-shadow: 0 4px 25px rgba(0,0,0,0.1);
            background: ${darken(0.05, '#348fbb')}
        }

        h1 {
            font-size: 60px;
            margin: 26px 0;
        }

        p {
            margin: 6px 0;
            font-size: 25px;
            color: #484848
        }

        @media(max-width: 599px) {
            h1 {
                font-size: 50px;
            }

            p {
                font-size: 20px;
            }

            .cta-btn {
                width: 100%;
            }
        }
       `}
      </style>
    </div>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  link: PropTypes.string.isRequired,
};

export default Text;
