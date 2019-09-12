import React from 'react';
import { darken } from 'polished';

function ScreenContents() {
  return (
    <div className="screen-contents">
      <div className="match">
        It&apos;s a match!
      </div>
      <div className="card">
        <div className="card-pic">
          <img src="/static/person.png" alt="" height="100%" />
        </div>
        <div className="title" />
        <div className="text" />
      </div>

      <div className="card">
        <div className="card-pic">
          <img src="/static/person.png" alt="" height="100%" />
        </div>
        <div className="title" />
        <div className="text" />
      </div>
      <style jsx>{`
            .screen-contents {
                height: 460px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: ${darken(0.1, 'green')};s
            }

            .match {
                position: absolute;
                height: 50px;
                width: 250px;
                border-radius: 25px;
                background: yellow;
                box-shadow: 0 4px 14px rgba(0,0,0,0.2);
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                animation: enter 1s 1;
                animation-fill-mode: forwards;
                opacity: 0;
                animation-delay: 1.5s;
            }

            @keyframes enter {
              0% {
                transform: scale(0); 
                opacity: 0;
              }

              50% {
                transform: scale(1.1);
                opacity: 1;
              }

              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            .card {
                box-sizing: border-box;
                height: 300px;
                width: 200px;
                background: green;
                border-radius: 8px;
                box-shadow: 0 4px 14px rgba(0,0,0,0.2);
                margin: 0 50px;
                display: flex;
                padding: 20px 0;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }

            .card-pic {
                height: 100px;
                width: 100px;
                border-radius: 50%;
                background: ${darken(0.05, 'green')};
                overflow: hidden;
            }

            .title {
                width: 80%;
                height: 25px;
                background: ${darken(0.05, 'green')}; 
                border-radius: 4px;
            }

            .text {
                width: 80%;
                height: 50px;
                background: ${darken(0.05, 'green')};
                border-radius: 4px; 
            }
        `}
      </style>
    </div>
  );
}

export default ScreenContents;
