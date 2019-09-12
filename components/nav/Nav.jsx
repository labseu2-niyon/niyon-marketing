import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        return setScrolled(true);
      }
      return setScrolled(false);
    });
  }, []);

  return (
    <header className="wrapper">
      <div>
        <Logo />
      </div>
      <nav>
        <DesktopNav scrolled={scrolled} />
        <MobileNav />
      </nav>
      <style jsx>{`
        .wrapper {
          position: fixed;
          z-index: 100;
          box-sizing: border-box;
          height: 90px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10%;
          background: ${scrolled ? '#fff' : 'transparent'};
          transition: background 400ms;
        }

        nav {
          box-sizing: border-box;
          padding-right: 10px;
          width: 40%;
          display: flex;
          justify-content: flex-end;
          transition: width 400ms;
        }

        @media(max-width: 900px) {
          .wrapper {
            padding: 0 5%;
          }

          nav {
            width: 60%;
          }
        }
        `}
      </style>
    </header>
  );
}

export default Nav;
