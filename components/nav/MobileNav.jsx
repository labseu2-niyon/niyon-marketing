import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav">

      <button type="button" className="menu" onClick={() => setOpen(!open)}>
        <i className="material-icons">menu</i>
      </button>
      <MobileMenu open={open} />
      <style jsx>{`
            .mobile-nav {
                box-sizing: border-box;
                position: relative;
                display: flex;
                align-items: center;
                margin-right: 20%;
            }    

            .menu {
                position: absolute;
                z-index: 50;
                outline: none;
                background: none;
                border: none;
            }

            .material-icons {
                color: ${open ? '#fff' : '#000'};
                font-size: 30px;
            }

            @media(min-width: 600px) {
                .mobile-nav {
                    display: none;
                }
            }
        `}
      </style>
    </div>
  );
}

export default MobileNav;
