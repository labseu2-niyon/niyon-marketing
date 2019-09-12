import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import Screen from '../hero/Screen';
import ArrowButton from './ArrowButton';
import Shape from './Shape';
import Pattern from '../~common/Pattern';

function Info({
  title, subtitle, info, screenContents,
}) {
  return (
    <div className="info">
      <div className="title"><h1>{title}</h1></div>
      <Fade right>
        <div className="pattern-wrapper">
          <Pattern />
        </div>
      </Fade>
      <div className="content-wrapper">
        <Fade up>
          <Screen>
            {screenContents}
          </Screen>
        </Fade>
        <div className="info-text">
          <h3>{subtitle}</h3>
          <p>{info}</p>
          <ArrowButton />
        </div>
      </div>
      <div className="pattern">
        <Shape background="#eaeaea" />
      </div>
      <style jsx>{`
            .info {
                box-sizing: border-box;
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 150px 0;
                overflow: hidden;
            }   

            .content-wrapper {
                width: 800px;
                max-width: 90%;
                flex-direction: column;
                align-items: center; 
            }

            .pattern-wrapper {
                width: 800px;
                height: 200px;
                position: absolute;
                right: 5%;
                top: 250px;
            }

            .title {
                position: absolute;
                z-index: 6;
                top: 0px;
                left: 5%;
            }

            h1 {
                font-size: 3.5rem;
            }

            .info-text {
                width: 100%;
                padding: 50px 0;
            } 

            @media (min-width: 599px) {
                h1 {
                    font-size: 6rem;
                }
                .info-text {
                    width: 75%;
                }
                .title {
                    position: absolute;
                    top: 150px;
                    left: 10%;
                }
            }

            h3 {
                margin: 10px 0;
                font-size: 2.5rem;
                font-weight: 700;
            }

            p {
                margin: 10px 0;
                font-size: 1.1rem;
                line-height: 1.5;
                color: #484848;
            }

            .pattern {
                position: absolute;
                z-index: -1;
                top: 350px;
                left: 2%;
                height: 600px;
                width: 600px;
            }

            @keyframes rotate {
                from { transform: rotate(0); };
                to { transform: rotate(360deg); };
            }
        `}
      </style>
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  screenContents: PropTypes.element.isRequired,
};

export default Info;
