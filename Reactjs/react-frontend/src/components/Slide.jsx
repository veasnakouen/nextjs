"use client";
import React from "react";
import a from "../images/a1.jpg";
import atwo from "../images/a2.jpg";
import athree from "../images/a3.jpg";
import b from "../images/b1.jpg";
import { Carousel } from "flowbite-react";

const Slide = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={b} alt="..." />
        <img src={a} alt="..." />
        <img src={atwo} alt="..." />
        <img src={athree} alt="..." />
        <img src={b} alt="..." />
      </Carousel>
    </div>
  );
};

export default Slide;
