
import teams from './Teamstyle.module.css'
import { Link } from 'react-router-dom';


// Swiper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
// Swiper

import zohir from  './zohir.jpg';
import nurullo from  './nurullo.jpg';
import rasul from  './rasul.jpg';
import masafi from  './masafi.jpg';
import abubakr from  './abubakr.png';
import najibullo from  './najibullo.jpg';
import alijon from  './alijon.jpg';
import muhammad from  './muhammad.jpg';
import mirzosaid from  './mirzosaid.jpg';
import ahmad from  './ahmad.jpg';
import behruz from  './behruz.jpg';
import snake from  './snake.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Team ()  {
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, []);

  return (<div>
    <div className={teams["container1"]}>
      <div className={teams["container"]}>
        <div className={teams["ourteam"]} >
          <h1 className={teams["cat"]}  data-aos="flip-left" data-aos-duration="2500">Наша команда</h1>
          <p className={teams["dog"]}  data-aos="fade-left" data-aos-duration="2500">инхаус экспертиз для разработки проектов</p>
          <div className={teams["teachers"]} data-aos="fade-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <>
      <Swiper
      
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop = {true}
        breakpoints={{
          360:{
            
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode]}
        className={teams["mySwiper"]}
      >
        <SwiperSlide>
        <div className={teams["type1"]} > 
              <img  src={zohir} alt="" />
              <h1>Зоир Кабиров</h1>
              <p>Соучредитель, Управляющий разработчик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={teams["type2"]}>
              <img src={nurullo} alt="" />
              <h1>Нурулло Сулаймонов</h1>
              <p>Соучредитель, Управляющий разработчик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={teams["type1"]}>
              <img src={rasul} alt="" />
              <h1>Расул Сафарович</h1>
              <p>Соучредитель, Управляющий разработчик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={teams["type2"]}>
              <img src={mirzosaid} alt="" />
              <h1>Мирзосаид Мирзоев</h1>
              <p>HR</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={teams["type1"]}>
              <img src={ahmad} alt="" />
              <h1>Ахмади Абдусамад</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={teams["type2"]}>
              <img src={muhammad} alt="" />
              <h1>Мухаммад Мирзоев</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={teams["type1"]}>
              <img src={alijon} alt="" />
              <h1>Алиджон Забири</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={teams["type2"]}>
              <img src={najibullo} alt="" />
              <h1>Наджибулло Шамсиддинов</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={teams["type1"]}>
              <img src={behruz} alt="" />
              <h1>Бехруз Аминов</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={teams["type2"]}>
              <img src={abubakr} alt="" />
              <h1>Абубакр Джураев</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={teams["type1"]}>
              <img src={masafi} alt="" />
              <h1>Масафи Бегимадов</h1>
              <p>HR,CR</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={teams["type2"]}>
              <img src={ahmad} alt="" />
              <h1>Ахмади Абдусамад</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
          </div>
        </div>
      </div>
    </div>
    <div className={teams["container2"]}>
      <div className={teams["container"]}>
        <div className={teams["forP"]}>

          <div className={teams["cir"]} data-aos="flip-left" data-aos-duration="2500">
            <p><Link to={'*'} style = {{textDecoration : "none", color:"#939393", fontSize:"30px"}}>Присоединяйтесь К Нам</Link></p>
          </div>
        </div>
      </div>
    </div>
    <div className={teams["container3"]}>
      <div className={teams["container"]}>
        <div className={teams["some-text"]}>
          <div  className={teams["snake"]}>
            <img src={snake} alt="" />
          </div>
          <div className={teams["text-snake"]}>
            <h1 data-aos="fade-left" data-aos-duration="3000">Ваши цифровые продукты и услуги, гарантировано нашей командой</h1>
            <p data-aos="fade-right" data-aos-duration="3000">Более 20 сотрудников для разработки крупного проекта — уже у нас в штате. Профессионалы в аналитике, юзабилити, проектировании, дизайне, разработке, тестировании, информационной безопасности и системном администрировании работают в нашем офисе в Душанбе и Измир</p>
          </div>
        </div>
      </div>
    </div>
    <div className={teams["container4"]}>
      <div className={teams["container"]}>
      <div className={teams["we"]}>
          <p className={teams["wep"]} data-aos="fade-up" data-aos-duration="3000">ХОТИТЕ РАБОТАТЬ С НАМИ?</p>
          <h1 data-aos="fade-down" data-aos-duration="3200">Мы хотели бы услышать больше о вашем проекте</h1>
          <div className={teams["circle"]} data-aos="zoom-out" data-aos-duration="3000">
          <p data-aos="fade-down" data-aos-duration="3000"><Link to={"/contacts"} style ={{textDecoration:"none", color:"#2F2E2E", fontSize:"23px"}}>Давай Поговорим</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Team