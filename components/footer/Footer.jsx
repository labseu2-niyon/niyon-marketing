import React from 'react';
import { Icon } from 'antd';
import Logo from '../nav/Logo';


function Footer() {
  return (
    <footer className="footer">
      <Logo noText />
      <div className="social">
        <div className="icon">
          <Icon type="twitter" />
        </div>
        <div className="icon">
          <Icon type="youtube" />
        </div>
      </div>
      <style jsx>{`
        .footer {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 300px;
          width: 100%;
          background: #eaeaea;
          padding: 40px 5%;
        }

        .social {
          padding-top: 20px;
          display: flex;
          width: 150px;
        }

        .icon {
          box-sizing: border-box;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #c7c7c7;
          border-radius: 50%;
          margin-right: 10px;
          padding-top: 2px;
        }

        @media (min-width: 599px) {
          .footer {
            padding: 40px 10%;
          }
        }
      `}
      </style>
    </footer>
  );
}

export default Footer;
