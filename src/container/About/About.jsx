import { Link } from 'react-router-dom'
import ab from './Aboutstyle.module.css'
import foto1 from './foto1.png'
import foto2 from './foto2.png'
import foto3 from './foto3.png'
import foto4 from './foto4.png'
import { Card5 } from '../../components/card'
// Swiper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination} from "swiper";

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
import exp from  './exp.png';



import intellect from  './intellect.png';
import yorux from  './yorux.png';
import webart from  './webart.png';
import tutus from  './tutus.png';
import go from  './go.png';
import fikir from  './fikir.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function About (){
  useEffect(() => {
    AOS.init();
  }, [])
  const src = "https://it.softclub.tj/front/video/Open-Day-at-Softclub-IT-Academy-muted.webm"
  const video2 = "https://it.softclub.tj/front/video/Softclub-Ad-muted.webm"
  return (<div>
      <div className={ab["container1"]}>
        <div className={ab["container"]}>
          <div className={ab["big"]}>
            <h1 data-aos="fade-left" data-aos-duration="3000">О нас­ и­ нашей­ растущей­ команде</h1>
            <div className={ab["ser"]}>
              <div className={ab["cer"]}>
              <p data-aos="flip-left" data-aos-duration="3000"> <Link to={"/services"} style = {{textDecoration:"none", color:"#555555"}} >Услуги & Технологии</Link> </p>
              </div>
              <div className={ab["motiv"]}>
                <p data-aos="flip-right" data-aos-duration="3000">Мы команда способных разработчиков, приоритетом которых является качество.</p>
              </div>
            </div>
          </div>
          <div className={ab["vid"]}>
          <video width="100%" loop muted autoPlay="autoplay" >
          <source src={src} type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
          </video>
          </div>
          <div className={ab["move-it"]}>

          <div className={ab["date"]}>
          <p>from</p>
          <h1>2020</h1>
          </div>
          </div>
        </div>
      </div>
      <div className={ab["container2"]}>
        <div className={ab["container"]}>
          <div className={ab["soft"]}>
            <div className={ab["left-soft"]}>
              <p data-aos="fade-left" data-aos-duration="2500">Softclub IT</p>
              <h1 data-aos="fade-left" data-aos-duration="2500">О нас</h1>
            </div>
            <div className={ab["right-soft"]} data-aos="zoom-out" data-aos-duration="2500">
              <p> <span style = {{fontWeight:"600"}}>Softclub IT</span>— это <span style = {{fontWeight:"600"}}>IT</span>-компания, у которой есть собственная академия, в которой более <span style = {{fontWeight:"600"}}>100</span> студентов готовятся стать <span style = {{fontWeight:"600"}}>IT</span>-разработчиками следующего поколения. Наши выпускники уже работают над различными проектами в известных местных компаниях, таких как <span style = {{fontWeight:"600"}}>Alif, VatanICT, EDonish</span> и др.</p>
              <p><span style = {{fontWeight:"600"}}>Softclub IT</span> имеет более чем годовой опыт работы в сфере <span style = {{fontWeight:"600"}}>IT</span> в Таджикистане и имеет разработчиков с более чем <span style = {{fontWeight:"600"}}>5</span>-летним опытом работы в различных зарубежных странах и компаниях с <span style = {{fontWeight:"600"}}>2012</span> года.</p>
              <p>Наши разработчики имеют опыт работы с передовыми веб и мобильными технологиями в разных странах, таких как Турция, Казахстан, Германия, Швеция, Литва, Китай и Норвегия.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={ab["container3"]}>
        <div className={ab["container"]}>
          <div className={ab["st"]}>
            <div className={ab["my"]}>

            <img data-aos="fade-up" data-aos-duration="3000" className={ab["j"]} src={foto1} alt=""/>
            <img data-aos="fade-down" data-aos-duration="3000" src={foto2} alt=""/>
            </div>
            <div className={ab["dis"]}>
                <img data-aos="flip-up" data-aos-duration="2500" className={ab["top"]} src={foto3} alt="" />
                <img data-aos="flip-down" data-aos-duration="2500" className={ab["b"]} src={foto4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={ab["container4"]}>
      <div className={ab["container"]}>
        <div className={ab["ourteam"]}>
          <p className={ab["dog"]} data-aos="fade-down" data-aos-duration="2500">Кто Мы?</p>
          <h1 className={ab["cat"]} data-aos="fade-down" data-aos-duration="2500">Наша команда</h1>
          <div className={ab["teachers"]}>
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
        className={ab["mySwiper"]}
      >
        <SwiperSlide>
        <div className={ab["type1"]}>
              <img src={zohir} alt="" />
              <h1>Зоир Кабиров</h1>
              <p>Соучредитель, Управляющий разработчик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={ab["type2"]}>
              <img src={nurullo} alt="" />
              <h1>Нурулло Сулаймонов</h1>
              <p>Соучредитель, Управляющий разработчик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={ab["type1"]}>
              <img src={rasul} alt="" />
              <h1>Расул Сафарович</h1>
              <p>Соучредитель, Управляющий разработчик</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={ab["type2"]}>
              <img src={mirzosaid} alt="" />
              <h1>Мирзосаид Мирзоев</h1>
              <p>HR</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={ab["type1"]}>
              <img src={ahmad} alt="" />
              <h1>Ахмади Абдусамад</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={ab["type2"]}>
              <img src={muhammad} alt="" />
              <h1>Мухаммад Мирзоев</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={ab["type1"]}>
              <img src={alijon} alt="" />
              <h1>Алиджон Забири</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={ab["type2"]}>
              <img src={najibullo} alt="" />
              <h1>Наджибулло Шамсиддинов</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={ab["type1"]}>
              <img src={behruz} alt="" />
              <h1>Бехруз Аминов</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className={ab["type2"]}>
              <img src={abubakr} alt="" />
              <h1>Абубакр Джураев</h1>
              <p>Разработчик программного обеспечения</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={ab["type1"]}>
              <img src={masafi} alt="" />
              <h1>Масафи Бегимадов</h1>
              <p>HR,CR</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={ab["type2"]}>
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
      <div className={ab["container5"]}>
      <div className={ab["container"]}>
        <div className={ab["lal1"]}>
        <p  data-aos="fade-down" data-aos-duration="2500">Нам Доверяют</p>

        </div>
        <div className={ab["lal"]}>
        <h1  data-aos="fade-up" data-aos-duration="2500" >Местные и мировые бренды</h1>
        </div>
        <div className={ab["brands"]}>
            <img data-aos="flip-down" data-aos-duration="2500" src={intellect} alt="" />
            <img data-aos="flip-left" data-aos-duration="2500" src={yorux} alt="" />
            <img data-aos="fade-down" data-aos-duration="2500" src={tutus} alt="" />
            <img data-aos="flip-right" data-aos-duration="2500" src={webart} alt="" />
            <img data-aos="fade-down" data-aos-duration="2500" src={go} alt="" />
            <img data-aos="flip-up" data-aos-duration="2500" src={fikir} alt="" />
        </div>
      </div>
      </div>
      <div className={ab["container6"]}>
      <div className={ab["container"]}>
      <div className={ab["total"]}>
        <div className={ab["vidddik"]}>
        <video data-aos="flip-right" data-aos-duration="2800" width="100%" loop muted autoPlay="autoplay" >
          <source src={video2} type="video/webm" />
              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div className={ab["sider"]}>
              <>
      <Swiper
      loop = {true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      >
        <SwiperSlide><Card5 imgUrl = {exp}
          text1="Мы стараемся изо всех сил"
          text2="Мы делаем все возможное, чтобы научить подрастающее поколение высоким технологиям для развития нашего бизнеса и национальных ценностей."
          text3="Нурулло Сулаймонов"
          text4="Соучредитель, Softclub IT"
          /></SwiperSlide>
        <SwiperSlide><Card5 imgUrl = {exp}
          text1="Расширенные цифровые услуги"
          text2="Мы предлагаем эффективные решения самых сложных задач и помогаем вашему бизнесу развиваться в информационную эпоху"
          text3="Расул Сафарович"
          text4="Соучредитель, Softclub IT"
          /></SwiperSlide>
        <SwiperSlide><Card5 imgUrl = {exp}
          text1="Развивайте свой бизнес вместе с нами"
          text2="Мы были там в самом начале, когда концепция поисковой оптимизации вступила в силу и заполнила Интернет."
          text3="Зоир Кабиров"
          text4="Соучредитель, Softclub IT"
          /></SwiperSlide>

      </Swiper>
    </>
        </div>
    </div>
    </div>
      </div>

  </div>)
}

export default About