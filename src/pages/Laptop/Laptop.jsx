import { useEffect, useState } from "react";
import { request } from "../../constants";
import "./laptop.css";
import { Link } from "react-router-dom";

const Laptop = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    try {
      let res = await request("pcshop");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let items = posts.filter((el) => el.category === "laptop");
  let gr = items.map((el) => {
    return (
      <div className="items" key={el.id}>
        <div className="image">
          <img src={el.Img} width={389} height={218} alt="" />
        </div>
        <div className="title">{el.Manufacturer}</div>
        <div className="pb">
          <div className="price">{el.Price}</div>
          <div className="ui-btn">
            <Link to={`${el.id}`} onClick={() => enterCard(el.id)}>
              <span>Читать</span>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  function enterCard(id) {
    console.log(id);
  }
  enterCard();
  return (
    <section id="laptop">
      <div className="container">
        <div className="main_cards">
          <h1>Ноутбуки</h1>
          <div className="card">{gr}</div>
        </div>
      </div>
    </section>
  );
};

export default Laptop;
