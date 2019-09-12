import React from 'react';
import Text from './Text';
import Screen from './Screen';
import ScreenContents from './ScreenContents';
import Curve from './Curve';

const text = {
  title: 'Find a mentor.',
  text: ['Niyon is a platform for connecting young', 'professionals with mentors in West Africa.'],
  link: 'https://niyonapp.now.sh/auth/signup',
};

const background = '#66c23e';

function Hero() {
  return (
    <div className="hero">
      <Text {...text} />
      <div className="pattern">
        <Curve background={background} />
        <div className="screen-wrapper">
          <Screen>
            <ScreenContents />
          </Screen>
        </div>
      </div>
      <div className="circle-mob" />
      <style jsx>{`
            .hero {
                position: relative;
                box-sizing: border-box;
                width: 100%;
                display: flex;
                align-items: center;
                padding: 0 5%;
                overflow-x: hidden;
                height: 800px;
            }   

            .pattern {
                z-index: -1;
                display: none;
                position: absolute;
                width: 800px;
                height: 800px;
                overflow: hidden;
                right: 0;
                top: 0;
                display: flex;
                align-items: center;
            }

            canvas {
              display: none;
              animation: slide 1s 1;
            }

            @keyframes slide {
              from { transform: translate(0, -100%); };
              to { transform: translate(0,0); };
            }

            .screen-wrapper {
              position: absolute;
              display: none;
              left: 150px;
              transform: translate(100%, 0);
              animation: screenslide 1 1s;
              animation-delay: 500ms;
              animation-fill-mode: forwards; 
            }

            @keyframes screenslide {
              from { transform: translate(100%, 0); }
              to { transform: translate(0, 0); }
          }

            .circle-mob {
                z-index: -1;
                position: absolute;
                background: ${background};
                height: 600px;
                width: 500px;
                top: -300px;
                right: -300px;
                border-radius: 50%;
                transform: rotate(-24deg);
            }

            @media(min-width: 1250px) {
                .hero {
                    padding: 0 10%;
                }

                .circle-mob {
                    display: none;
                }

                .pattern, .screen-wrapper {
                    display: flex;
                }

                canvas {
                  display: block;
                }
            } 
            `}
      </style>
    </div>
  );
}

export default Hero;
