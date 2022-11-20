import "./index.scss";
import "./Slider2.scss";
import { BtnSlider } from "./BtnSlider";
import { useState } from "react";
import dataSliderReview from "./dataSliderReview.js";
function Reviews() {
  return (
    <div className="office__wrapper">
      <h2 className="binding mt-100">ОТЗЫВЫ О РАБОТЕ ДВК ФИНАНС</h2>
      <div className="line-orange"></div>
      <p className="office-info">
        Все больше и больше компаний доверяют нам в решении финансовых вопросов.
        Клинтами ДВК ФИНАНС является болле 1000 субъектов предпринимательской
        деятельности.
      </p>
    </div>
  );
}
export { Reviews };
