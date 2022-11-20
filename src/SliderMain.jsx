import "./index.scss";
import "./Slider.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import dataSlider from "./dataSlider.js";
function SliderMain() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      <div className="d-flex justify-between navigate">
        <li>Наши услуги</li>
        <Link to="/cart">
          <li>Отзывы клиентов</li>
        </Link>
        <Link to="/mate">
          <li>Партнеры</li>
        </Link>
        <Link to="/about">
          <li>О компании</li>
        </Link>
        <Link to="/news">
          <li>Новости</li>
        </Link>
        <Link to="/contacts">
          <li>Контакты</li>
        </Link>
        <Link to="/calc">
          <li>Калькулятор</li>
        </Link>
      </div>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={`/img/Slide${index + 1}.png`} />
          </div>
        );
      })}

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
export { SliderMain };
