import React from "react";

import { Carousel } from "3d-react-carousal";

const Carousel2 = ({ carouselData }) => {
  console.log({ carouselData });
  const slides = carouselData.map((carousel) => {
    console.log({ carousel });
    return <CarouselCard cardInfo={carousel} />;
  });

  return <Carousel slides={slides} autoplay={false} interval={1000} />;
};

const CarouselCard = ({ cardInfo }) => {
  return (
    <>
      {/* Img div -> Left of side of card */}
      <>
        <p>{cardInfo.image_description}</p>
      </>
      {/* Right side of card content */}
      <>
        {/* image_description , instagram_handle  */}
        <h1>{cardInfo.color_name}</h1>
        <p>{cardInfo.release_year}</p>
        <img
          src={cardInfo.image_url}
          alt="database info including year and description"
        />
      </>
    </>
  );
};

export default Carousel2;
