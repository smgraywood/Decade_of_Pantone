import * as React from "react";

import * as apiClient from "../apiClient";

const ColorCard = ({ setBgColor, bgColor, colorCardData }) => {
  const colorChange = (e, color) => {
    e.preventDefault();
    console.log("button clicked");
    setBgColor(color);
  };
  return (
    <>
      <span className="API_wrapper-wrapper">
        {colorCardData.map((c, index) => (
          <div className="API_card_wrapper">
            <div className="API_card">
              <button
                className="API-card-button"
                onClick={(e) => colorChange(e, `rgb(${c[0]}, ${c[1]}, ${c[2]}`)}
                id="API_card_dimension"
                style={{
                  backgroundColor: `rgb(${c[0]}, ${c[1]}, ${c[2]}`,
                }}
                key={`${index}`}
              ></button>
              <div className="card-text">
                rgb({c[0]}, {c[1]}, {c[2]})
              </div>
            </div>
          </div>
        ))}
      </span>
    </>
  );
};

export default ColorCard;
