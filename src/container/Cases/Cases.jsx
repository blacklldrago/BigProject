import { Card4 } from '../../components/card';
import { Link } from 'react-router-dom';
import cs from './Casesstyle.module.css'
import firm1 from './firm1.png'
import firm2 from './firm2.png'
import firm3 from './firm3.png'

import tutus from './tutus.png'
import webart from './webart.png'
import intellect from './intellect.png'
import go from './go.png'
import fikir from './fikir.png'
import yorux from './yorux.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Cases(){
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (<div>
    <div className={cs["container1"]}>
      <div className={cs["container"]}>
        <div className={cs["work"]} data-aos="fade-up" data-aos-duration="1500">
          <div className={cs["work1"]}>
            <p>Мы стремимся создавать взаимосвязанные бренды и услуги, а также проводить кампании для обеспечения стабильных и успешных отношений между компаниями и клиентами.</p>
          </div>
          <div className={cs["work2"]} data-aos="fade-down" data-aos-duration="1500">
            <h1  data-aos="zoom-in" data-aos-duration="1500">Наши работы</h1>
          </div>
        </div>
        <div className={cs["about"]}>
          <Card4 imgUrl = {firm1}
          text1 = "Softclub"
          text2 = "Академия CRM"
          text3 = "Softclub CRM — это основное CRM-приложение, над которым работает наша академия, чтобы упростить список посещаемости и сдачу экзаменов для студентов. Теперь наши партнеры могут легко принимать решения о приеме наших выпускников на должности по их выбору на основе данных, которые мы предоставляем с помощью CRM."
          text4 = "Технологии :"
          text5 = "HTML5 ❘ CSS3 ❘ React JS ❘ .NET ❘ MsSQL"
          />
          <Card4 imgUrl = {firm2}
          text1 = "Yorux"
          text2 = "Android Application"
          text3 = "1 guide to encounter lucid dream. YoruX is your personal Lucid Dreaming guide that will help you to raise the probability of controlling your dreams. There is a free App and a paid Membership (that will increase the probability of having a Lucid Dream by 10X) available."
          text4 = "Технологии :"
          text5 = "Android Studio ❘ Java ❘ Firebase ❘ Node JS"
          />
          <Card4 imgUrl = {firm3}
          text1 = "Yorux"
          text2 = "Web Application"
          text3 = "Web Application — это основное CRM-приложение, над которым работает наша академия, чтобы упростить список посещаемости и сдачу экзаменов для студентов. Теперь наши партнеры могут легко принимать решения о приеме наших выпускников на должности по их выбору на основе данных, которые мы предоставляем с помощью CRM."
          text4 = "Технологии :"
          text5 = "HTML5 ❘ CSS3 ❘ React JS ❘ .NET ❘ MsSQL"
          />
        </div>
      </div>
    </div>
    <div className={cs["container2"]}>
      <div className={cs["container"]}>
        <h1 className={cs["brands"]}>БРЕНДЫ, ИСПОЛЬЗУЮЩИЕ НАШИ РЕШЕНИЯ</h1>
        <div className={cs["brand-img"]}>
          <img data-aos="flip-down" data-aos-duration="2500" src={tutus} alt="tutus" /> 
          <img data-aos="fade-up" data-aos-duration="2500" src={webart} alt="webart" />
          <img data-aos="flip-down" data-aos-duration="2500" src={intellect} alt="intellect" />
          <img data-aos="fade-up" data-aos-duration="2500" src={go} alt="go" />
          <img data-aos="flip-down" data-aos-duration="2500" src={fikir} alt="fikir" />
          <img data-aos="fade-up" data-aos-duration="2500" src={yorux} alt="yorux" />
        </div>
      </div>
    </div>
    <div className={cs["container3"]}> 
      <div className={cs["container"]}>

      <div className={cs["we"]}>
          <p data-aos="fade-right" data-aos-duration="2500" className={cs["wep"]}>ХОТИТЕ РАБОТАТЬ С НАМИ?</p>
          <h1 data-aos="fade-left" data-aos-duration="2500">Мы хотели бы услышать больше о вашем проекте</h1>
          <div className={cs["circle"]}>
          <p className='animate__animated animate__lightSpeedInRight animate__slow 10s'><Link to={"/contacts"} style ={{textDecoration:"none", color:"#2F2E2E",  fontSize:"23px"}}>Давай Поговорим</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Cases