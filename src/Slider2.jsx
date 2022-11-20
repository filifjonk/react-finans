import React, { useState } from "react";
import "./Slider2.scss";
import BtnSlider from "./BtnSlider";
import dataSliderReview from "./dataSliderReview";

export default function Slider2() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSliderReview.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderReview.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderReview.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider2">
      {dataSliderReview.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? "slide2 active-anim2" : "slide2"
            }
          >
            <h2 className="phone align-left">{obj.title}</h2>
            <h2 className="office-info align-left">{obj.author}</h2>
            <h2 className="office-info align-left">{obj.position}</h2>
            <div className="mt-30">
              <p className=" office-info office-info--slider align-left ">
                {obj.text}
              </p>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots2">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot2 active" : "dot2"}
          ></div>
        ))}
      </div>
    </div>
  );
}
export { Slider2 };
