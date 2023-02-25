import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
import Banner1 from "../images/1.jpg";
import Banner2 from "../images/2.jpg";
import Banner3 from "../images/3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner1} alt="First slide" />
        <Carousel.Caption>
          <h2 className="center fw-bolder ">Best Education</h2>
          <p>
            Emply dummy text of the printing and typesetting industry orem Ipsum
            has been the industry's standard dummy text ever sinceprinting and
            typesetting industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner2} alt="Second slide" />

        <Carousel.Caption className="m-t-5">
          <h2 className="center">Best Education</h2>
          <p className="justfy-content-center">
            Emply dummy text of the printing and typesetting industry orem Ipsum
            has been the industry's standard dummy text ever sinceprinting and
            typesetting industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Banner3} alt="Third slide" />

        <Carousel.Caption className="text-align-center">
          <h2 className="center">Best Education</h2>
          <p>
            Emply dummy text of the printing and typesetting industry orem Ipsum
            has been the industry's standard dummy text ever sinceprinting and
            typesetting industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
