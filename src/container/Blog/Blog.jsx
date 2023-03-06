import sl from './Blogstyle.module.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Blog(){
  
  useEffect(() => {
    AOS.init();
  }, [])
  return(<div>
    <div className={sl["container1"]}>
      <div className={sl["container"]}>
        <div className={sl["think"]}>
          <div className={sl["left-think"]} data-aos="fade-left" data-aos-duration="2500">
            <h1>Давай подумаем</h1>
          </div>
          <div className={sl["right-think"]} data-aos="fade-left" data-aos-duration="2500">
            <p>Думать — единственный способ понять, действовать — единственный путь к решению.</p>
          </div>
        </div>
      </div>
    </div>
    <div className={sl["container2"]} data-aos="fade-right" data-aos-duration="2500">
      <div className={sl["container"]}>
      <div className={sl["we"]}>
          <p className={sl["wep"]} data-aos="fade-down" data-aos-duration="2500">ХОТИТЕ РАБОТАТЬ С НАМИ?</p>
          <h1 data-aos="fade-up" data-aos-duration="2500">Мы хотели бы услышать больше о вашем проекте</h1>
          <div className={sl["circle"]}>
          <p data-aos="fade-left" data-aos-duration="2500"><Link to={"/contacts"} style ={{textDecoration:"none", color:"#2F2E2E", fontSize:"23px"}}>Давай Поговорим</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Blog