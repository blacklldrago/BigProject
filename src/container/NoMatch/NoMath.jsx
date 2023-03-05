import nos from './NoMathstyle.module.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function NoMath (){
  useEffect(() => {
    AOS.init();
  }, [])
  return (<div>
    <div className={nos["container1"]}>
      <div className={nos["container"]}>
        <h1 data-aos="fade-up" data-aos-duration="3000">404</h1>
        <p data-aos="fade-up" data-aos-duration="3000">К сожалению, страница, которую вы ищете, не может быть найдена.</p>
      </div>
    </div>
    <div className={nos["container2"]} data-aos="fade-left" data-aos-duration="3000">
      <div className={nos["cirr"]}>
        <Link to='/' style={{textDecoration:"none", color:"#555555"}}>
        <p>Вернуться На Главную</p></Link>

      </div>
    </div>
  </div>)
}

export default NoMath