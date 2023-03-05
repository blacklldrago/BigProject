import { Link } from 'react-router-dom';
import { Card, Card1, Card2} from '../../components/card';

import sHome from  './Homepagestyle.module.css';
import teachers from  './teachers.png';
import homework from  './homework.png';
import profi1 from  './profi1.png';
import profi2 from  './profi2.png';
import profi3 from  './profi3.png';
import microsoft from  './microsoft.png';
import laravel from  './laravel.png';
import react from  './react.png';
import vue from  './vue.png';
import jquery from  './jquery.png';
import android from  './android.png';
import swift from  './swift.png';
import flutter from  './flutter.png';
import firebase from  './firebase.png';
import mysql from  './mysql.png';
import sql from  './sql.png';
import figma from  './figma.png';
import intellect from  './intellect.png';
import yorux from  './yorux.png';
import webart from  './webart.png';
import tutus from  './tutus.png';
import go from  './go.png';
import fikir from  './fikir.png';
import crm from  './crm.png';
import yoruxapp from  './yoruxapp.png';
import yoruxweb from  './yoruxweb.png';
import pink from  './pink.png';


import AOS from 'aos';
import 'aos/dist/aos.css';


// swioer
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Homepagestyle.module.css';
import { Autoplay, Pagination, Navigation } from "swiper";
// swioer

function Homepage() {

  useEffect(() => {
    AOS.init();
  }, [])

  return(<div>
    <div sHome={["container1"]}>
      <div className={sHome["container"]}>
        <div className={sHome["large-text"]}>
          <div className={sHome["large-text1"]}>
          <p  data-aos="flip-right" data-aos-duration="3000">ПОЗНАКОМЬТЕСЬ С КОМАНДОЙ РАЗРАБОТЧИКОВ</p>
          <h1  data-aos="fade-left" data-aos-duration="3000">SOFT</h1>
          </div>
          <div className={sHome["large-text2"]}>
          <div className={sHome["leg"]}>

          <p  data-aos="fade-up" data-aos-duration="3000">Мы понимаем вашу задачу, знаем ваш рынок и обладаем знаниями и опытом в области IT-решений с добавленной стоимостью. Вместе с нашими клиентами мы создаем уникальные преимущества. Любопытно как?</p> 
          </div>
          <div className={sHome["head"]}>
          <h1 className={sHome["k"]} data-aos="fade-up"
     data-aos-duration="3000">CLUB</h1>
          </div>
        
          </div>
        </div>
        
        <div className={sHome["teachers"]}>
          <img  src={teachers} alt="" />
        </div>
      </div>
    </div>
    <div className={sHome["container2"]}>
      <div className={sHome["container"]}>
          <div className={sHome["techno"]}>
            <div className={sHome["left-techno"]}>
              <img className='animate__animated animate__heartBeat animate__slower	10' src={homework} alt="" />
            </div>
            <div className={sHome["right-techno"]}>
                <h1 data-aos="flip-down"
     data-aos-duration="3000" >МЫ ПРЕДЛАГАЕМ ВЫСОКО-ТЕХНОЛОГИЧНЫЕ РЕШЕНИЯ</h1>
                <div className={sHome["another"]}>
                <p data-aos="flip-right"
     data-aos-duration="3000"> Мы работаем в сфере IT уже несколько лет и теперь хотим перенести наш опыт в ваш бизнес. С 2012 года наша команда работает с локальными и глобальными клиентами.</p>
                <div className={sHome["circle"]} data-aos="flip-down"  data-aos-duration="3000" >
                  <h1 className='animate__animated animate__bounceInDown'><Link to = "/about"style={{textDecoration:"none", color:"white"}} >О НАС</Link></h1>
                </div>
                </div>
            </div>
          </div>
      </div>
    </div>
    <div className={sHome["container3"]}>
      <div className={sHome["container"]}>
          <div className={sHome["serv"]}>
            <div className={sHome["serv1"]}>
              <p data-aos="zoom-in-right" data-aos-duration="3000">Мы стремимся создавать взаимосвязанные бренды и услуги, а также проводить кампании для обеспечения стабильных и успешных отношений между компаниями и клиентами.</p>
            </div>
            <div className={sHome["serv2"]}>
              <h1 data-aos="zoom-in-down" data-aos-duration="3000" >С нашими услугами вы можете уверенно развивать свой бизнес</h1>
            </div>
          </div>
          <div className={sHome["proffi"]}>
            <Card imgUrl={profi1} text1 = "Фронтенд разработка" text2 = "Нашим клиентам просто нравится, как мы визуализируем их идеи. С помощью UI дизайна мы уточняем, что вы хотите. Затем мы кодируем его в красивый веб или мобильный дизайн."
            text3 = "+ HTML5"
            text4 = "+ CSS3"
            text5 = "+ React JS"
            text6 = "+ Vue JS"
            />
            <Card imgUrl={profi2} text1 = "Бэкенд разработка" text2 = "Мы предоставляем структурные серверные решения для динамических приложений. Если вам нужно модульное обновляемое приложение, позвоните нам."
            text3 = "+ C# .NET"
            text4 = "+ PHP Laravel"
            text5 = "+ GO Lang"
            text6 = "+ Node JS"
            />
            <Card imgUrl={profi3} text1 = "Мобильная разработка" text2 = "Мы создаем мобильные приложения с нуля, используя одну из наиболее подходящих сред разработки для вашей бизнес-идеи."
            text3 = "+ UI/UX Design"
            text4 = "+ Android"
            text5 = "+ IOS"
            text6 = "+ Server & Database"
            />
          </div>
      </div>
    </div>  
    <div className={sHome["container4"]}>
      <div className={sHome["container"]}>
        <p className={sHome["use1"]} data-aos="zoom-in" data-aos-duration="10000">Какие Технологии Мы Используем</p>
        <h1  className={sHome["use2"]} data-aos="fade-down" data-aos-duration="10000">Наши технологии</h1>
        <div className={sHome["edit"]}>
          <div className={sHome["edit1"]}>

          <img data-aos="flip-down" data-aos-duration="3000" src={microsoft} alt="" />
          <img data-aos="flip-down" data-aos-duration="3000" src={laravel} alt="" />
          <img data-aos="flip-down" data-aos-duration="3000" src={react} alt="" />
          <img data-aos="flip-down" data-aos-duration="3000" src={vue} alt="" />
          <img data-aos="flip-down" data-aos-duration="3000" src={jquery} alt="" />
          <img data-aos="flip-down" data-aos-duration="3000" src={android} alt="" />
          </div>
          <div className={sHome["edit2"]}>

          <img data-aos="flip-up" data-aos-duration="3000" src={swift} alt="" />
          <img data-aos="flip-up" data-aos-duration="3000" src={flutter} alt="" />
          <img data-aos="flip-up" data-aos-duration="3000" src={firebase} alt="" />
          <img data-aos="flip-up" data-aos-duration="3000" src={mysql} alt="" />
          <img data-aos="flip-up" data-aos-duration="3000" src={sql} alt="" />
          <img data-aos="flip-up" data-aos-duration="3000" src={figma} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className={sHome["container5"]}>
      <div className={sHome["container"]}>
        <p  className={sHome["use1"]}>Как Мы Работаем</p>
        <h1 className={sHome["use2"]}>Процесс работы</h1>
        <div className={sHome["procces"]}>
            {/* <Card1 text1 = "Шаг 01" text2 = "01" text3 = "Проектирование" text4 = "Сначала мы проводим предпроектное обследование и определяем границы и ограничения систем.На основании исследования и аналитического отчета составляем единый список приоритезированных задач по каждой системе."/> */}
            <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop = {true} 
        className={sHome["mySwiper"]}
      >
        <SwiperSlide><Card1 text1 = "Шаг 01" text2 = "01" text3 = "Проектирование" text4 = "Сначала мы проводим предпроектное обследование и определяем границы и ограничения систем.На основании исследования и аналитического отчета составляем единый список приоритезированных задач по каждой системе."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 02" text2 = "02" text3 = "Дизайн" text4 = "Работу над дизайном начинаем с общей визуальной концепции, в ходе которой определяем стиль будущего продукта. Концепцию проекта готовит наш креативный директор в команде с арт-директором."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 03" text2 = "03" text3 = "Разработка" text4 = "Над проектами трудятся сотни разработчиков под управлением десятков тимлидов. Мы самостоятельно целиком решаем сложные технические задачи: высоконагруженные отказоустойчивые порталы, нативные мобильные приложения, интеграция с бэк-системами заказчика."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 04" text2 = "04" text3 = "Поддержка и развитие" text4 = "Мы не просто выпускаем продукт в свободное плавание. Наша задача — в сжатые сроки собрать MVP проекта и работать дальше над его постоянным улучшением и вводом нового функционала. Мы выдвигаем гипотезы того, что можно улучшить на проекте и тестируем их, чтобы добиться максимального эффекта."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 01" text2 = "01" text3 = "Проектирование" text4 = "Сначала мы проводим предпроектное обследование и определяем границы и ограничения систем.На основании исследования и аналитического отчета составляем единый список приоритезированных задач по каждой системе."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 02" text2 = "02" text3 = "Дизайн" text4 = "Работу над дизайном начинаем с общей визуальной концепции, в ходе которой определяем стиль будущего продукта. Концепцию проекта готовит наш креативный директор в команде с арт-директором."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 03" text2 = "03" text3 = "Разработка" text4 = "Над проектами трудятся сотни разработчиков под управлением десятков тимлидов. Мы самостоятельно целиком решаем сложные технические задачи: высоконагруженные отказоустойчивые порталы, нативные мобильные приложения, интеграция с бэк-системами заказчика."/></SwiperSlide>
        <SwiperSlide><Card1 text1 = "Шаг 04" text2 = "04" text3 = "Поддержка и развитие" text4 = "Мы не просто выпускаем продукт в свободное плавание. Наша задача — в сжатые сроки собрать MVP проекта и работать дальше над его постоянным улучшением и вводом нового функционала. Мы выдвигаем гипотезы того, что можно улучшить на проекте и тестируем их, чтобы добиться максимального эффекта."/></SwiperSlide>
      </Swiper>
    </>
        </div>

      </div>
      
    </div>
    <div className={sHome["container6"]}>
      <div className={sHome["container"]}>
        <div className={sHome["lal1"] }>
        <p  data-aos="flip-down" data-aos-duration="3500">Нам Доверяют</p>

        </div>
        <div className={sHome["lal"]}>
        <h1    data-aos="flip-up" data-aos-duration="3500" >Местные и мировые бренды</h1>
        </div>
        <div className={sHome["brands"]}>
            <img data-aos="flip-right" data-aos-duration="3000"   src={intellect} alt="" />
            <img data-aos="flip-up" data-aos-duration="3000"   src={yorux} alt="" />
            <img data-aos="flip-left" data-aos-duration="3000"   src={tutus} alt="" />
            <img  data-aos="flip-up" data-aos-duration="3000"   src={webart} alt="" />
            <img data-aos="flip-right" data-aos-duration="3000"   src={go} alt="" />
            <img  data-aos="flip-up" data-aos-duration="3000" src={fikir} alt="" />
        </div>
      </div>
    </div>
    <div className={sHome["container7"]}>
      <div className={sHome["container"]}>
        <div className={sHome["casess"]}>
          <div className={sHome["left-case"]}>
            <h1 data-aos="fade-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Последние Кейси</h1>
          </div>
          <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  className = {sHome["right-case"]}>
            <p>Создание новых ярких брендов, уникальных визуальных систем и цифрового опыта, ориентированных на широкий спектр оригинальных коллабораций.</p>
          </div>
        </div>
      </div>
    </div>
    <div className={sHome["container8"]}>
      <div className={sHome["container"]}>
        <div className={sHome["reklam"]}>
        <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2600,
          
          disableOnInteraction: false,
        }}
        loop = {true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><Card2 imgUrl = {crm} text1 = "SOFTCLUB" text2 = "АКАДЕМИЯ CRM" text3 = "ЯНВАРЬ 2023"/></SwiperSlide>
        <SwiperSlide><Card2 imgUrl = {yoruxapp} text1 = "YORUX ANDROID" text2 = "APPLICATION" text3 = "ЯНВАРЬ 2023"/></SwiperSlide>
        <SwiperSlide><Card2 imgUrl = {yoruxweb} text1 = "YORUX WEB" text2 = "APPLICATION" text3 = "ЯНВАРЬ 2023"/></SwiperSlide>
        <SwiperSlide><Card2 imgUrl = {crm} text1 = "SOFTCLUB" text2 = "АКАДЕМИЯ CRM" text3 = "ЯНВАРЬ 2023"/></SwiperSlide>
        <SwiperSlide><Card2 imgUrl = {yoruxapp} text1 = "YORUX ANDROID" text2 = "APPLICATION" text3 = "ЯНВАРЬ 2023"/></SwiperSlide>
        <SwiperSlide><Card2 imgUrl = {yoruxweb} text1 = "YORUX WEB" text2 = "APPLICATION" text3 = "ЯНВАРЬ 2023"/></SwiperSlide>
      </Swiper>
    </>
        </div>
      </div>
    </div>
    <div className={sHome["container9"]}>
      <div className={sHome["container"]} >
        <div className={sHome["only-text"]}>
          <p data-aos="fade-right" data-aos-duration="3000" className={sHome["smallTeam"]}>Команда</p>
          <h1 data-aos="fade-down"  data-aos-duration="3000">Наш козырь</h1>
          <p data-aos="fade-left" data-aos-duration="3000" className={sHome["in"]}>Наличие инхаус команда IT-специалистов и менеджеров проектов у которой есть более чем 5-летний опыт работы как в местных, так и в глобальных IT-компаниях</p>
          <p data-aos="fade-up"  data-aos-duration="3000" className={sHome["know"]}>Узнайте больше </p>
        </div>
        <div className={sHome["pink"]}>
        <img src={pink} alt="" />
        </div>
      </div>
    </div>
    <div className={sHome["container10"]}>
      <div className={sHome["container"]}>
        <div className={sHome["sentences"]}>
        <p data-aos="fade-right" data-aos-duration="3000" >НЕДАВНИЕ ПОСТЫ</p>
        <h1 data-aos="fade-right" data-aos-duration="3000" >БЛОГ</h1>
        </div>
      </div>
    </div>
  </div>)
}
export default Homepage;
