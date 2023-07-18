import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import laptop from "../../assets/laptop.png";
import monitor from "../../assets/monitor.png";
import keyboard from "../../assets/keyboard.png";
import frame from "../../assets/frame.png";
import "./main.css";

const Main = () => {
  return (
    <Fragment>
      <section id="main">
        <div className="container">
          <nav>
            <ul className="navigation">
              <li data-aos="fade-up-right" data-aos-delay="50"><NavLink to={"/laptop"}><img className="logimage" src={laptop} alt="laptop" />Ноутбуки</NavLink></li>
              <li data-aos="fade-up-right" data-aos-delay="40"><NavLink to={"/monitor"}><img className="logimage" src={monitor} alt="" />Мониторы</NavLink></li>
              <li data-aos="fade-up-left" data-aos-delay="40"><NavLink to={"/keyboard"}><img className="logimage" src={keyboard} alt="" />Клавиатуры</NavLink></li>
              <li data-aos="fade-up-left" data-aos-delay="50"><NavLink to={"/case"}><img className="logimage" src={frame} alt="" />Корпуса</NavLink></li>
            </ul>
          </nav>
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
