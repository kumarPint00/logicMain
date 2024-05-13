"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderJson from "../slider/Slider.json";
import Item from "./Item";

function Example() {
  return (
    <Carousel stopAutoPlayOnHover={true} animation="slide" duration={700} indicators={false} >
      {SliderJson.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
