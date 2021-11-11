import * as React from "react";

const ColorCard = ({ colorCardData }) => {
  return (
    <>
      {colorCardData.map((c, index) => (
        <div className="API_card_wrapper">
          <div className="API_card">
            <div
              id="cardDimension"
              style={{
                backgroundColor: `rgb(${c[0]}, ${c[1]}, ${c[2]}`,
                width: "98px",
              }}
              key={`${index}`}
            >
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ColorCard;
