import { Link, Outlet } from "react-router-dom";
import sLayot from "./Layout.module.css";
import logo from "./logo.png";
import search from "./search.png";
import startUp from "./startUp.png";
import menu from "./menu.png";
import blacklogo from "./blacklogo.png";
import { useEffect, useState } from "react";

function Layout() {
    const [ modal, setModal ] = useState(false)
    function handleClick(){
        setModal(!modal)
    }
    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top on route change
    }, []);
  
  return (
    <div>
      <div className={sLayot["container"]}>
        <div className={sLayot["navbar"]}>
          <div className={sLayot["start"]}>
            <Link to="/">
              <img src={logo} alt="Photo" />
            </Link>
          </div>
          <div className={sLayot["middle"]}>
            <ul>
              <li>
                <Link
                  to={"/services"}
                  style={{ textDecoration: "none", color: "#2F2E2E" }}
                >
                  УСЛУГИ
                </Link>
              </li>
              <li>
                <Link
                  to={"/cases"}
                  style={{ textDecoration: "none", color: "#2F2E2E" }}
                >
                  КЕЙСЫ
                </Link>
              </li>
              <li>
                <Link
                  to={"/team"}
                  style={{ textDecoration: "none", color: "#2F2E2E" }}
                >
                  КОМАНДА
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  style={{ textDecoration: "none", color: "#2F2E2E" }}
                >
                  БЛОГ
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  style={{ textDecoration: "none", color: "#2F2E2E" }}
                >
                  О НАС
                </Link>
              </li>
              <li>
                <Link
                  to={"/contacts"}
                  style={{ textDecoration: "none", color: "#2F2E2E" }}
                >
                  КОНТАКТЫ
                </Link>
              </li>
            </ul>
          </div>
          <div className={sLayot["last"]}>
            <div className={sLayot["left-last"]}>
              <img src={search} alt="" />
            </div>
            <div className={sLayot["right-last"]} onClick={handleClick}>
              <img src={menu} alt="img" />
            </div>
          </div>
          {modal &&
            <div className={sLayot["black"]}>
                <span onClick={handleClick} className={sLayot['iksak']}>&times;</span>
                <div className={sLayot["mainM"]}>
                  <div className={sLayot["part1"]}>
                    
                  <div className={sLayot["firstM"]}>
                    <ul>
                      <li  onClick={handleClick}> <Link 
                        style={{ textDecoration: "none", color: "gray" }} to={"https://www.instagram.com/softclub.tj/"}>Instagram</Link> </li>
                      <li  onClick={handleClick}> <Link 
                        style={{ textDecoration: "none", color: "gray" }} to={"https://www.instagram.com/softclub.tj/"}>YouTube</Link> </li>
                      <li  onClick={handleClick}> <Link 
                        style={{ textDecoration: "none", color: "gray" }} to={"https://www.instagram.com/softclub.tj/"}>Github</Link> </li>
                    </ul>
                  </div>
                    <div className={sLayot["middleM"]}>
                      <Link to={"/"}><img  onClick={handleClick} style={{cursor:"pointer"}} src={blacklogo} alt="" /></Link>
                    </div>
                  <div className={sLayot["secondM"]}>
                  <ul>
                    <li  onClick={handleClick}>
                      <Link
                        to={"/about"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        О Нас
                      </Link>
                    </li>
                    <li  onClick={handleClick}>
                      <Link
                        to={"*"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Карьера
                      </Link>
                    </li>
                    <li  onClick={handleClick}>
                      <Link
                        to={"/contacts"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Контакты
                      </Link>
                    </li>
                    <li  onClick={handleClick}>
                      <Link
                        to={"*"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Вопросы-Ответы
                      </Link>
                    </li>
                  </ul>
                  </div>
                  </div>
                  <div className={sLayot["part2"]}>
                  <ul>
              <li  onClick={handleClick}>
                <Link
                  to={"/services"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  УСЛУГИ
                </Link>
              </li>
              <li  onClick={handleClick}>
                <Link
                  to={"/cases"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  КЕЙСЫ
                </Link>
              </li>
              <li  onClick={handleClick}>
                <Link
                  to={"/team"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  КОМАНДА
                </Link>
              </li>
              <li  onClick={handleClick}>
                <Link
                  to={"/blog"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  БЛОГ
                </Link>
              </li>
              <li  onClick={handleClick}>
                <Link
                  to={"/about"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  О НАС
                </Link>
              </li>
              <li  onClick={handleClick}>
                <Link
                  to={"/contacts"}
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  КОНТАКТЫ
                </Link>
              </li>
            </ul>
                  </div>
                  <div className={sLayot["part3"]}>
                    <input type="text" name="" id="" />
                      
                <div className={sLayot["thirdOne1"]}>
                  <h1>Свяжитесь с нами</h1>
                  <ul>
                    <li style={{ textDecoration: "none", color: "gray" }}>
                      Улица Асадулло Гуломов 54/3
                    </li>
                    <li
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "white",
                      }}
                    >
                      +992 558 700 900
                    </li>
                    <li>
                      <Link
                        to={"https://www.softclub.tj/"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        info@softclub.tj
                      </Link>
                    </li>
                  </ul>
                </div>
                  </div>
              </div>
            </div>
          }
        </div>
        <Outlet />
        <div className={sLayot["main-footer"]}>
          <div className={sLayot["footer1"]}>
            <div className={sLayot["footer"]}>
              <div className={sLayot["left-footer"]}>
                <div className={sLayot["firstOne"]}>
                  <Link to="/">
                    <img src={blacklogo} alt="Photo" />
                  </Link>
                  <p>Ваш цифровой партнер.</p>
                  <ul>
                    <li>
                      <Link
                        to={"https://www.instagram.com/softclub.tj/"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://www.youtube.com/@softclubitacademy9553"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Youtube
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"https://github.com/SoftclubIT"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Github
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={sLayot["secondOne"]}>
                  <h1>Information</h1>
                  <ul>
                    <li>
                      <Link
                        to={"/about"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        О Нас
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"*"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Карьера
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/contacts"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Контакты
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"*"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Вопросы-Ответы
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={sLayot["thirdOne"]}>
                  <h1>Свяжитесь с нами</h1>
                  <ul>
                    <li style={{ textDecoration: "none", color: "gray" }}>
                      Улица Асадулло Гуломов 54/3
                    </li>
                    <li
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "white",
                      }}
                    >
                      +992 558 700 900
                    </li>
                    <li>
                      <Link
                        to={"https://www.softclub.tj/"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        info@softclub.tj
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={sLayot["inputs"]}>
                <div className={sLayot["inputs1"]}>
                  <p>© 2023 | Alrights reserved by</p>
                  <h1>
                    <Link
                      to={"https://www.softclub.tj/"}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      SOFTCLUB
                    </Link>
                  </h1>
                </div>
                <div className={sLayot["inputs2"]}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Введите адрес электронной почты"
                  />
                  <button>Отправить</button>
                </div>
              </div>
            </div>
            <div className={sLayot["want"]}>
              <h1 className={sLayot["ws"]}>ХОТИТЕ РАБОТАТЬ С НАМИ?</h1>
              <div className={sLayot["connect"]}>
                <p>
                  <Link
                    to={"/contacts"}
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "23px",
                    }}
                  >
                    Свяжитесь С Нами
                  </Link>
                </p>
              </div>
              <h1 className={sLayot["time"]}>09 : 00 AM - 20 : 30 PM</h1>
              <p>Понедельник - Суббота</p>
            </div>
          </div>
          <div className={sLayot["img-s"]}>
            <img src={startUp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
