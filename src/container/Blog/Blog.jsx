import sl from './Blogstyle.module.css'
import { Link } from 'react-router-dom';
function Blog(){
  return(<div>
    <div className={sl["container1"]}>
      <div className={sl["container"]}>
        <div className={sl["think"]}>
          <div className={sl["left-think"]}>
            <h1>Давай подумаем</h1>
          </div>
          <div className={sl["right-think"]}>
            <p>Думать — единственный способ понять, действовать — единственный путь к решению.</p>
          </div>
        </div>
      </div>
    </div>
    <div className={sl["container2"]}>
      <div className={sl["container"]}>
      <div className={sl["we"]}>
          <p className={sl["wep"]}>ХОТИТЕ РАБОТАТЬ С НАМИ?</p>
          <h1>Мы хотели бы услышать больше о вашем проекте</h1>
          <div className={sl["circle"]}>
          <p><Link to={"/contacts"} style ={{textDecoration:"none", color:"#2F2E2E"}}>Давай Поговорим</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default Blog