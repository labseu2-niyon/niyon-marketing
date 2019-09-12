import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function MobileMenu({ open }) {
  return (
    <div className="mob-menu">
      <div className="link">
        <Link href="/"><a>Home</a></Link>
      </div>
      <div className="link"><a>Contact</a></div>
      <div className="link">
        <a href="https://niyonapp.now.sh">
          <button type="button" className="signin-btn-mob">Sign In</button>
        </a>
      </div>
      <style jsx>{`
                .mob-menu {
                    position: fixed;
                    z-index: 10;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background: #66c23e;
                    transform: ${open ? 'translate(0, 0%)' : 'translate(0,-100%)'};
                    transition: transform 250ms;
                    padding-top: 75px;
                }    

                .link {
                    width: 100%;
                    height: 75px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }

                a {
                    width: 100%;
                    text-decoration: none;
                    color: #fff;
                }

                .signin-btn-mob {
                    width: 75%;
                    height: 45px;
                    background: #348fbb;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                }
            `}
      </style>
    </div>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
