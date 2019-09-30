import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import Link from 'next/link';

function DesktopNav({ scrolled }) {
  return (
    <div className="desk-nav">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <a href="https://app.niyonapp.com">
        <button type="button" className="login-btn">
          Sign In
        </button>
      </a>
      <style jsx>{`
        .desk-nav {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        a {
            text-decoration: none;
            color: ${scrolled ? '#000' : '#fff'};
            cursor: pointer;
            transition: color 400ms;
        }

        a:hover {
          color: #eaeaea;
        }

        .login-btn {
            width: 150px;
            height: 45px;
            background: #348fbb;
            color: #fff;
            border-radius: 4px;
            border: none;
            font-size: 16px;
            cursor: pointer;
            transition: background 400ms;
        }

        .login-btn:hover {
          background: ${darken(0.05, '#348fbb')};
        }

        @media(max-width: 600px) {
            .desk-nav {
                display: none;
            }
        }
       `}
      </style>
    </div>
  );
}

DesktopNav.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};

export default DesktopNav;
