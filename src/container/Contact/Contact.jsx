import { Link } from 'react-router-dom'
import ct from './Contactstyle.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Contact(){
  useEffect(() => {
    AOS.init();
  }, [])
  return (<div>
    <div className={ct["container1"]}>
      <div className={ct["container"]}>
        <div className={ct["contacting"]}>
          <div className={ct["left-con"]} data-aos="flip-left" data-aos-duration="3000">
            <h1>Свяжитесь с нами</h1>
          </div>
          <div className={ct["right-con"]} data-aos="flip-right" data-aos-duration="3000">
            <p>Мы будем рады услышать от вас и начать что-то особенное вместе.</p>
          </div>
        </div>
      </div>
    </div>
    <div className={ct["container2"]}>
      <div className={ct["container"]}>
        <div className={ct["total-inp"]}>
          <div className={ct["left-inp"]} data-aos="flip-right" data-aos-duration="3000">
            <h1>Свяжитесь с нами</h1>
            <p className={ct["same"]}>+992 558 700 900</p>
            <p><Link to = "https://www.softclub.tj/" style={{textDecoration:"none", color:"#555555", fontSize:"18px", fontWeight:"300", lineHeight:"1.5"}}>info@softclub.tj</Link></p>
            <p className={ct["street"]}>Улица Асадулло Гуломов 54/3</p>
          </div>
          <div className={ct["right-inp"]}>
            <div className={ct["first"]}>
              <input className='animate__animated animate__zoomInDown animate_animation__duration 2s' type="text" name="" id="" placeholder='Имя *'/>
              
              <input className='animate__animated animate__zoomInDown animate_animation__duration 2s' type="email" name="" id="" placeholder='Адрес электронной почты *' />
            </div>
            <div className={ct["second"]}>
              <input className='animate__animated animate__zoomInDown animate_animation__duration 2s' type="text" name="" id="" placeholder='Телефон'/>
              <input className='animate__animated animate__zoomInDown animate_animation__duration 2s' type="text" name="" id="" placeholder='Тема *'/>
            </div>
            <div className={ct["third"]}>
              <textarea className='animate__animated animate__zoomInDown animate_animation__duration 2s' placeholder='Сообщения *'></textarea>
            </div>
          </div>
        </div>
        <div className={ct["finished"]} data-aos="fade-up" data-aos-duration="3000">

        <div className={ct["last-circle"]}>
          <Link to={"*"} style = {{color:"#555555", textDecoration:"none"}}><p>Отправить Сообщения</p></Link>
        </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Contact