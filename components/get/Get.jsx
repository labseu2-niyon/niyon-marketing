import React from 'react';
import GetCurve from './GetCurve';
import Text from '../hero/Text';
import PatternSmall from '../~common/PatternSmall';

function Get(props) {
  return (
    <div className="get">
      <div className="get-banner">
        <div className="logo"><img src="/static/niyon-logo.png" alt="" height={40} /></div>
        <Text {...props} />
        <div className="curve">
          <GetCurve />
        </div>
        <div className="pattern">
          <PatternSmall />
        </div>
      </div>
      <style jsx>{`
            .get {
                box-sizing: border-box;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 100px;
            }

            .get-banner {
                position: relative;
                box-sizing: border-box;
                width: 1000px;
                max-width: 90%;
                height: 350px;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 8px 50px rgba(0,0,0,0.1);
                display: flex;
                align-items: center;
                padding: 0 48px;
            }

            .curve {
                position: absolute;
                display: none;
                top: 0;
                right: 0;
                width: 500px;
                height: 350px;
                z-index: -1;
            }

            .logo {
                position: absolute;
                display: none;
                top: 25px;
                right: 25px;
                z-index: 5;
            }

            .pattern {
                position: absolute;
                top: 220px;
                left: 250px;
                z-index: -1;
            }

            @media (min-width: 599px) {
              .logo, .curve {
                display: block;
              }
            }
            `}
      </style>
    </div>
  );
}

export default Get;
