import serv from './Servicesstyle.module.css'
import arrow from './arrow.png'
import smile from './smile.png'
import lines from './lines.png'
import { Card3 } from '../../components/card';
import { Link } from 'react-router-dom';
function Services (){
  return (<div>
    <div className={serv["container1"]}>
      <div className={serv["container"]}>
        <div className={serv["business"]}>
        
          <div className={serv["text-busi"]}>  
          <h1>Мы делаем <img src={arrow} alt="" /> ваш бизнес ярче. <img src={smile} alt="" /> </h1>
          </div>
          <div className={serv["lines"]}>
            <img src={lines} alt="" />
          </div>
          
        </div>
        <div className={serv["something"]}>
          <div className={serv["left-s"]}>
            <p>Услуги------</p>
          </div>
          <div className={serv["right-s"]}>

          <p>Создание новых ярких брендов, уникальных визуальных систем и цифрового опыта, ориентированных на широкий спектр оригинальных коллабораций.</p>
          </div>
        </div>
      </div>
    </div>
    <div className={serv["container2"]}>
      <div className={serv["container"]}>
        <div className={serv["prp"]}>
        <Card3
        text1= "Фронтенд Разработка"
        text2= "Нашим клиентам просто нравится, как мы визуализируем их идеи. С помощью UI дизайна мы уточняем, что вы хотите. Затем мы кодируем его в красивый веб или мобильный дизайн."
        text3= "+ HTML5"
        text4= "+ CSS3"
        text5= "+ React JS"
        text6 = "+ Vue JS"
        />
        <Card3
        text1= "Бэкенд Разработка"
        text2 = "Мы предоставляем структурные серверные решения для динамических приложений. Если вам нужно модульное обновляемое приложение, позвоните нам."
        text3= "+ C#.NET"
        text4= "+ PHP Laravel"
        text5= "+ Go Lang"
        text6 = "+ Node JS"
        />
        <Card3
        text1= "Мобильная Разработка"
        text2="Мы создаем мобильные приложения с нуля, используя одну из наиболее подходящих сред разработки для вашей бизнес-идеи."
        text3= "+ UI/UX Design"
        text4= "+ Android"
        text5= "+ IOS"
        text6 = "+ Server & Database"
        />
        </div>
      </div>
    </div>
    <div className={serv["container3"]}>
      <div className={serv["container"]}>
        <div className={serv["we"]}>
          <p className={serv["wep"]}>ХОТИТЕ РАБОТАТЬ С НАМИ?</p>
          <h1>Мы хотели бы услышать больше о вашем проекте</h1>
          <div className={serv["circle"]}>
          <p><Link to={"/contacts"} style ={{textDecoration:"none", color:"#2F2E2E"}}>Давай Поговорим</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services