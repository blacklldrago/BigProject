
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
function Team ()  {
  return (<div>
    <div className={teams["container1"]}>
      <div className={teams["container"]}>
        <div className={teams["ourteam"]}>
          <h1 className={teams["cat"]}>Наша команда</h1>
          <p className={teams["dog"]}>инхаус экспертиз для разработки проектов</p>
          <div className={teams["teachers"]}>
            <>
      <Swiper
      
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop = {true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
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
        <div className={teams["type1"]}>
              <img src={zohir} alt="" />
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

          <div className={teams["cir"]}>
            <p><Link to={'*'} style = {{textDecoration : "none", color:"#939393"}}>Присоединяйтесь К Нам</Link></p>
          </div>
        </div>
      </div>
    </div>
    <div className={teams["container3"]}>
      <div className={teams["container"]}>
        <div className={teams["some-text"]}>
          <div className={teams["snake"]}>
            <img src={snake} alt="" />
          </div>
          <div className={teams["text-snake"]}>
            <h1>Ваши цифровые продукты и услуги, гарантировано нашей командой</h1>
            <p>Более 20 сотрудников для разработки крупного проекта — уже у нас в штате. Профессионалы в аналитике, юзабилити, проектировании, дизайне, разработке, тестировании, информационной безопасности и системном администрировании работают в нашем офисе в Душанбе и Измир</p>
          </div>
        </div>
      </div>
    </div>
    <div className={teams["container4"]}>
      <div className={teams["container"]}>
      <div className={teams["we"]}>
          <p className={teams["wep"]}>ХОТИТЕ РАБОТАТЬ С НАМИ?</p>
          <h1>Мы хотели бы услышать больше о вашем проекте</h1>
          <div className={teams["circle"]}>
          <p><Link to={"/contacts"} style ={{textDecoration:"none", color:"#2F2E2E"}}>Давай Поговорим</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Team