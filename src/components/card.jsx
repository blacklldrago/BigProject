import React from 'react'
import css from './cardstyle.module.css'
function Card({imgUrl, text1 ,text2, text3, text4, text5, text6}){
  return (
    <div className={css["card"]}>
        <img src={imgUrl} alt="" />
        <h1>{text1}</h1>
        <p>{text2}</p>
        <div className={css["list"]}>
        <ul>
          <li>{text3}</li>
          <li>{text4}</li>
          <li>{text5}</li>
          <li>{text6}</li>
        </ul>
        </div>
    </div>
  )
}
function Card1({text1 ,text2, text3, text4}){
  return (
    <div className={css["card1"]}>
      <p className = {css["step"]}>{text1}</p>
      <h1 className =  {css["number"]}>{text2}</h1>
      <h1 className={css["main"]}>{text3}</h1>
      <p className={css["about"]}>{text4}</p>
    </div>
  )
}
function Card2({imgUrl, text1 ,text2, text3}){
  return (
    <div className={css["card2"]}>
      <div className={css["academy"]}>
        <div className={css["pre"]}>
          <p>ПРЕД----</p>
        </div>
        <div className={css["academy-img"]}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={css["sle"]}>
          <p>----СЛЕД</p>
        </div>
        <div className={css["about-academy"]}>
          <h1 className={css["full"]}>{text1}</h1>
          <h1 className={css["wait"]}>{text2}</h1>
          <p>{text3}</p>
        </div>
      </div>
    </div>
  )
}
function Card3({text1 ,text2, text3, text4, text5, text6}){
  return (
    <div className={css["card3"]}>
        <h1>{text1}</h1>
        <p>{text2}</p>
        <div className={css["list3"]}>
        <ul>
          <li>{text3}</li>
          <li>{text4}</li>
          <li>{text5}</li>
          <li>{text6}</li>
        </ul>
        </div>
    </div>
  )
}
function Card4({imgUrl, text1, text2, text3, text4, text5}){
  return (
    <div className={css["card4"]}>
      <img src={imgUrl} alt="" />
      <div className={css["head"]}>
      <h1>{text1}</h1>
      <h1>{text2}</h1>
      </div>
      <div className={css["main-place"]}>

      <p>{text3}</p>
      </div>
      <div className={css["ending"]}>

      <p>{text4}</p>
      <p>{text5}</p>
      </div>
    </div>
  )
}
function Card5({imgUrl, text1 ,text2, text3, text4}){
  return(<div>
    <img className={css["unq"]} src={imgUrl} alt="" />
    <div className={css["card5"]}>
      <h1>{text1}</h1>
      <h2>{text2}</h2>
      <p>{text3}</p>
      <span>{text4}</span>
    </div>
  </div>)
}
export {Card, Card1, Card2, Card3, Card4, Card5}