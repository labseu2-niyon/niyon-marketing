import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';

function Screen({ children }) {
  return (
    <div className="screen">
      <div className="header">
        { ['red', 'orange', 'green'].map(background => <div className="button" style={{ background }} />) }
      </div>
      <div className="search-bar">
        <div className="search" />
      </div>
      {children}
      <style jsx>{`
          .screen {
            box-sizing: border-box;
            width: 100%;
            height: 225px;
            border-radius: 8px;
            background: #fff;
            display: flex;
            flex-direction: column;
            box-shadow: 0 8px 50px rgba(0,0,0,0.2);
            overflow: hidden;
          }

          .header {
            box-sizing: border-box;
            height: 12px;
            width: 100%;
            background: #484848;
            display: flex;
            align-items: center; 
            padding: 0 5px;
          }

          .search-bar {
            box-sizing: border-box;
            height: 15px;
            width: 100%;
            background: #484848;
            display: flex;
            justify-content: center;
            align-items: flex-start; 
            padding: 0 10px;
           }

          .search {
            box-sizing: border-box;
            color: #fff;
            height: 12px;
            width: 100%;
            background: ${darken(0.1, '#484848')};
            border-radius: 4px;
            display: flex;
            align-items: center;
            font-size: 10px;
            padding: 0 15px;
          }

          .button {
            height: 5px;
            width: 5px;
            border-radius: 50%;
            margin-left: 5px;
          }

          @media (min-width: 599px) {
            .screen {
              height: 500px;
              width: 750px;
            }

            .header {
              height: 20px;
            }

            .button {
              height: 10px;
              width: 10px;
            }

            .search-bar {
              height: 25px;
            }

            .search {
              height: 20px;
            }
          }
          `}
      </style>
    </div>
  );
}

Screen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Screen;
