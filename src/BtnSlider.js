import React from "react";
import "./Slider2.scss";
import leftArrow from "../public/img/left.png";
import rightArrow from "../public/img/right.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide2 next2" : "btn-slide2 prev2"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
export { BtnSlider };
