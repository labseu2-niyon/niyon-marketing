import React from 'react';
import { Bounce } from 'react-reveal';

const rand = () => Math.floor(Math.random() * 1000);

function Person({
  img, size, x, y, time,
}) {
  return (
    <Bounce delay={500 + time}>
      <div className="person">
        <img src={img} alt="" height="100%" />
        <style jsx>{`
            .person {
                z-index: 5;
                position: absolute;
                top: ${y}%;
                left: ${x}%;
                height: ${size}px;
                width: ${size}px;
                border-radius: 50%;
                background: white;
                box-shadow: 0 4px 8px rgba(0,0,0,0.4);
                overflow: hidden;
            }
      `}
        </style>
      </div>
    </Bounce>
  );
}

const people = [
  {
    img: '/static/dam.png',
    size: 40,
    x: 60,
    y: 90,
    time: rand(),
  },
  {
    img: '/static/vin.png',
    size: 50,
    x: 38,
    y: 62,
    time: rand(),
  },
  {
    img: '/static/ike.png',
    size: 70,
    x: 47,
    y: 65,
    time: rand(),
  },
  {
    img: '/static/jon.png',
    size: 60,
    x: 10,
    y: 65,
    time: rand(),
  },
  {
    img: '/static/mel.png',
    size: 40,
    x: 32,
    y: 67,
    time: rand(),
  },
  {
    img: '/static/pas.png',
    size: 45,
    x: 56,
    y: 52,
    time: rand(),
  },
];


function InfoScreenContents() {
  return (
    <div className="contents">
      { people.map(peep => <Person {...peep} />)}
      <img src="/static/west_africa_map.svg" alt="" className="map" />
      <style jsx>{`
            .contents {
                position: relative;
                z-index: 0;
                height: 190px;
                width: 100%;
            }

            .map {
              height: 200px;
            }

            @media (min-width: 599px) {
              .contents {
                height: 450px;
              }
              .map {
                height: 480px;
              }
            }
        `}
      </style>
    </div>
  );
}

export default InfoScreenContents;
