import React, { useState } from "react";
import css from "./cardstyle.module.css";

function Card({ imgUrl, text1, text2, text3, text4, text5, text6 }) {
  return (
    <div className={css["card"]} data-aos="flip-down" data-aos-duration="3000">
      <img src={imgUrl} alt="" />
      <h1 data-aos="fade-up-left">{text1}</h1>
      <p data-aos="fade-up-left">{text2}</p>
      <div className={css["list"]}>
        <ul>
          <li data-aos="fade-up-right">{text3}</li>
          <li data-aos="fade-up-right">{text4}</li>
          <li data-aos="fade-up-right">{text5}</li>
          <li data-aos="fade-up-right">{text6}</li>
        </ul>
      </div>
    </div>
  );
}
function Card1({ text1, text2, text3, text4 }) {
  return (
    <div className={css["card1"]} data-aos="flip-down" data-aos-duration="9000">
      <p data-aos="zoom-in" data-aos-duration="3000" className={css["step"]}>
        {text1}
      </p>
      <h1
        data-aos="flip-down"
        data-aos-duration="3000"
        className={css["number"]}
      >
        {text2}
      </h1>
      <h1 data-aos="flip-down" data-aos-duration="3000" className={css["main"]}>
        {text3}
      </h1>
      <p data-aos="fade-up" data-aos-duration="2500" className={css["about"]}>
        {text4}
      </p>
    </div>
  );
}
function Card2({ imgUrl, text1, text2, text3 }) {
  return (
    <div className={css["card2"]}>
      <div className={css["academy"]}>
        <div className={css["pre"]}>
          <div>
            <p>ПРЕД</p>
          </div>
          <div className={css["line"]}></div>
        </div>
        <div className={css["academy-img"]}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={css["sle"]}>
          <div className={css["line"]}></div>
          <div>
          <p>СЛЕД</p>
          </div>
        </div>
        <div className={css["about-academy"]}>
          <h1 className={css["full"]}>{text1}</h1>
          <h1 className={css["wait"]}>{text2}</h1>
          <p>{text3}</p>
        </div>
      </div>
    </div>
  );
}
function Card3({ text1, text2, text3, text4, text5, text6 }) {
  return (
    <div className={css["card3"]}>
      <h1 data-aos="fade-up" data-aos-duration="3000">
        {text1}
      </h1>
      <p data-aos="fade-left" data-aos-duration="3000">
        {text2}
      </p>
      <div className={css["list3"]}>
        <ul>
          <li data-aos="fade-up" data-aos-duration="3000">
            {text3}
          </li>
          <li data-aos="fade-down" data-aos-duration="3000">
            {text4}
          </li>
          <li data-aos="fade-up" data-aos-duration="3000">
            {text5}
          </li>
          <li data-aos="fade-down" data-aos-duration="3000">
            {text6}
          </li>
        </ul>
      </div>
    </div>
  );
}
function Card4({ imgUrl, text1, text2, text3, text4, text5 }) {
  return (
    <div className={css["card4"]} data-aos="flip-left" data-aos-duration="1500">
      <img data-aos="fade-up" data-aos-duration="2500" src={imgUrl} alt="" />
      <div className={css["head"]}>
        <h1 data-aos="fade-left" data-aos-duration="2500">
          {text1}
        </h1>
        <h1 data-aos="fade-right" data-aos-duration="2500">
          {text2}
        </h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="2500"
        className={css["main-place"]}
      >
        <p>{text3}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className={css["ending"]}
      >
        <p data-aos="flip-left" data-aos-duration="2500">
          {text4}
        </p>
        <p data-aos="flip-right" data-aos-duration="2500">
          {text5}
        </p>
      </div>
    </div>
  );
}
function Card5({ imgUrl, text1, text2, text3, text4 }) {
  return (
    <div>
      <img
        data-aos="flip-down"
        data-aos-duration="2800"
        className={css["unq"]}
        src={imgUrl}
        alt=""
      />
      <div className={css["card5"]}>
        <h1 data-aos="fade-down" data-aos-duration="2800">
          {text1}
        </h1>
        <h2 data-aos="zoom-out" data-aos-duration="2800">
          {text2}
        </h2>
        <p data-aos="flip-left" data-aos-duration="2800">
          {text3}
        </p>
        <span data-aos="flip-right" data-aos-duration="2800">
          {text4}
        </span>
      </div>
    </div>
  );
}

export { Card, Card1, Card2, Card3, Card4, Card5 };
