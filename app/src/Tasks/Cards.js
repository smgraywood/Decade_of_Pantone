import React from "react";

const Cards = ({ setBgColor, bgColor }) => {
  const colorChange = (e, color) => {
    e.preventDefault();
    console.log("button clicked");
    setBgColor(color);
  };
  return (
    <section className="card-wrapper">
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#CF5476")}
      >
        <div className="card">
          <div className="top2011" id="cardDimension"></div>
          <div className="card-text">
            Honeysuckle <br /> #CF5476 <br />
            2011
          </div>
        </div>
      </button>

      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#DD4124")}
      >
        <div className="card">
          <div className="top2012" id="cardDimension"></div>
          <div className="card-text">
            Tangerine Tango <br /> #DD4124 <br />
            2012
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#009B77")}
      >
        <div className="card">
          <div className="top2013" id="cardDimension"></div>
          <div className="card-text">
            Emerald <br /> #009B77 <br />
            2013
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#B163A3")}
      >
        <div className="card">
          <div className="top2014" id="cardDimension"></div>
          <div className="card-text">
            Radiant Orchid <br /> #B163A3 <br />
            2014
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#955251")}
      >
        <div className="card">
          <div className="top2015" id="cardDimension"></div>
          <div className="card-text">
            Marsala <br /> #955251 <br />
            2015
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#B3CEE5")}
      >
        <div className="card">
          <div className="top2016_1" id="cardDimension"></div>
          <div className="card-text">
            Serenity <br /> #B3CEE5 <br />
            2016
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#F7CAC9")}
      >
        <div className="card">
          <div className="top2016_2" id="cardDimension"></div>
          <div className="card-text">
            Rose Quartz <br /> #F7CAC9 <br />
            2016
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#88B04B")}
      >
        <div className="card">
          <div className="top2017" id="cardDimension"></div>
          <div className="card-text">
            Greenery <br /> #88B04B <br />
            2017
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#604c8d")}
      >
        <div className="card">
          <div className="top2018" id="cardDimension"></div>
          <div className="card-text">
            Ultra Violet <br /> #604c8d <br />
            2018
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#ff6f61")}
      >
        <div className="card">
          <div className="top2019" id="cardDimension"></div>
          <div className="card-text">
            Living Coral <br /> #ff6f61 <br />
            2019
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#34558b")}
      >
        <div className="card">
          <div className="top2020" id="cardDimension"></div>
          <div className="card-text">
            Classic Blue <br /> #34558b <br />
            2020
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#959A9C")}
      >
        <div className="card">
          <div className="top2021_1" id="cardDimension"></div>
          <div className="card-text">
            Ultimate Gray <br /> #959A9C <br />
            2021
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#F5DF4D")}
      >
        <div className="card">
          <div className="top2021_2" id="cardDimension"></div>
          <div className="card-text">
            Illuminating <br /> #F5DF4D <br />
            2021
          </div>
        </div>
      </button>
    </section>
  );
};
export default Cards;
