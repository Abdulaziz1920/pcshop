import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../constants";
import "./post.css";
import num from "../../assets/numberofkeyboard.png";
import yes from "../../assets/true.png";
import usb from "../../assets/usb.png";
import keyboard from "../../assets/keyboard.png";
const PostKeyboard = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await request(`pcshop/${id}`);
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="infoPosts">
          <div className="laptopcards">
            <div className="imageProducts">
              <img src={posts.Img} alt="" />
            </div>
            <div className="aboutProducts">
              <h1>{posts.Manufacturer}</h1>
              <ul>
                <li>
                  <img src={keyboard} className="settings" alt="" />
                  {posts.KeyboardType}
                </li>
                <li>
                  <img src={usb} className="settings" alt="" />
                  {posts.Interface}
                </li>
                <li>
                  <img src={num} className="settings" alt="" />
                  {posts.NumberOfKeys}
                </li>
                <li>
                  <img src={yes} className="settings" alt="" />
                  RGB : {posts.Backlight ? "Подсветка" : "Без подсветка"}
                </li>
              </ul>
              <button className="btn">{posts.Price} / Купить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostKeyboard;
