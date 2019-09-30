import React, { useEffect, useState } from 'react';

function Person({ src, name, position }) {
  return (
    <div className="person">
      <div className="person-img">
        <img src={src} alt="" height="100%" />
      </div>
      <h2>{name}</h2>
      <p>{position}</p>
      <style jsx>{`
            .person {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin: 32px;
                width: 250px;
            }

            .person-img {
                height: 150px;
                width: 150px;
                border-radius: 50%;
                background: #484848;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 5px 25px rgba(0,0,0,0.2);
            } 

            h2, p {
                margin: 0;
                margin-top: 10px;
            }   

            p {
              color: #484848;
            }
        `}
      </style>
    </div>
  );
}


function About({ team }) {
  return (
    <>
      <div className="header-img">
        <h1 className="about-text">About</h1>
      </div>
      <div className="about">
        <h1 className="our-team">Our Team</h1>
        <div className="team">
          {team.map(each => <Person key={each.name} {...each} />) }
        </div>
      </div>
      <style jsx>{`
          .header-img {
            width: 100%;
            height: 600px;
            background: #eaeaea;
            background-image: url("static/bkgrd.jpg");
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .about-text {
            position: absolute;
            color: #fff;
            z-index: 5;
            font-size: 100px;
            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
            margin: 0;
          }

          .header-img:after {
            content: " ";
            position: absolute;
            height: 600px;
            width: 100%;
            background: linear-gradient(-90deg, rgba(0,0,0,0.8), rgba(0,0,0,0.0));
          }

          .about {
              box-sizing: border-box;
              width: 100%;
              padding: 50px 15%;
              text-align: center;
          }

          .team {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
          }

          .our-team {
              font-size: 50px;
              color: #484848;
          }

          @media (max-width: 600px) {
            .team {
              justify-content: center;
              align-items: center;
            }
          }
      `}
      </style>

    </>
  );
}

export default About;
