import React from "react";

import { Carousel } from "3d-react-carousal";

const Carousel2 = ({ carouselData }) => {
  // console.log({ carouselData });
  const slides = carouselData.map((carousel) => {
    // console.log({ carousel });
    return <CarouselCard cardInfo={carousel} />;
  });

  return <Carousel slides={slides} autoplay={false} interval={1000} />;
};

const CarouselCard = ({ cardInfo }) => {
  return (
    <div className="db_card_div">
      {/* Img div -> Left of side of card */}
      <div className="db_left_side_card">
        <h1 className="db_color_name">{cardInfo.color_name}</h1>
        <br />
        <p className="db_release_year">{cardInfo.release_year}</p>
        <br />
        <p className="db_image_description">{cardInfo.image_description}</p>
        <br />
        <p className="db_instagram_handle">{cardInfo.instagram_handle}</p>
      </div>
      {/* Right side of card content */}
      <div className="db_right_side_card">
        <br />
        <img
          className="db_image"
          src={cardInfo.image_url}
          alt="database info including year and description"
        />
      </div>
    </div>
  );
};

export default Carousel2;
