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
        aria-label="button to change page background to Honeysuckle (a deep pink color)"
      >
        <div className="card">
          <div className="top2011" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Honeysuckle <br /> #CF5476 <br />
            2011
          </div>
        </div>
      </button>

      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#DD4124")}
        aria-label="button to change page background to Tangerine Tango (a bright orange color)"
      >
        <div className="card">
          <div className="top2012" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Tangerine Tango <br /> #DD4124 <br />
            2012
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#009B77")}
        aria-label="button to change page background to Emerald (a deep green color)"
      >
        <div className="card">
          <div className="top2013" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Emerald <br /> #009B77 <br />
            2013
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#B163A3")}
        aria-label="button to change page background to Radiant Orchid (a bright pink-purple color)"
      >
        <div className="card">
          <div className="top2014" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Radiant Orchid <br /> #B163A3 <br />
            2014
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#955251")}
        aria-label="button to change page background to Marsala (a dark pink-red color)"
      >
        <div className="card">
          <div className="top2015" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Marsala <br /> #955251 <br />
            2015
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#B3CEE5")}
        aria-label="button to change page background to Serenity (a light pink color)"
      >
        <div className="card">
          <div className="top2016_1" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Serenity <br /> #B3CEE5 <br />
            2016
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#F7CAC9")}
        aria-label="button to change page background to Rose Quartz (a light pink color)"
      >
        <div className="card">
          <div className="top2016_2" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Rose Quartz <br /> #F7CAC9 <br />
            2016
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#88B04B")}
        aria-label="button to change page background to Greenery (a vibrant bright green color)"
      >
        <div className="card">
          <div className="top2017" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Greenery <br /> #88B04B <br />
            2017
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#604c8d")}
        aria-label="button to change page background to Ultra Violet (a dark purple color)"
      >
        <div className="card">
          <div className="top2018" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Ultra Violet <br /> #604c8d <br />
            2018
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#ff6f61")}
        aria-label="button to change page background to Living Coral (a bright pink-orange color)"
      >
        <div className="card">
          <div className="top2019" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Living Coral <br /> #ff6f61 <br />
            2019
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#34558b")}
        aria-label="button to change page background to Classic Blue (a dark blue color)"
      >
        <div className="card">
          <div className="top2020" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Classic Blue <br /> #34558b <br />
            2020
          </div>
        </div>
      </button>
      <button
        className="card-button"
        onClick={(e) => colorChange(e, "#959A9C")}
        aria-label="button to change page background to Ulrimate Gray (a dark gray color)"
      >
        <div className="card">
          <div className="top2021_1" id="cardDimension"></div>
          <div
            className="card-text"
            aria-label="text of color card with name, hex code, and release year"
          >
            Ultimate Gray <br /> #959A9C <br />
            2021
          </div>
        </div>
      </button>
      <div id="extra-card">
        <button
          className="card-button"
          onClick={(e) => colorChange(e, "#F5DF4D")}
          aria-label="button to change page background to Illuminating (a bright yellow color)"
        >
          <div className="card">
            <div className="top2021_2" id="cardDimension"></div>
            <div
              className="card-text"
              aria-label="text of color card with name, hex code, and release year"
            >
              Illuminating <br /> #F5DF4D <br />
              2021
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
export default Cards;
