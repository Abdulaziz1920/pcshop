import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../constants";
import aspect from "../../assets/ratio.png";
import dismen from "../../assets/dismen.png";
import hz from "../../assets/hz.png";
import hd from "../../assets/4k.png";
import "./post.css";
const Post = () => {
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
                  <img src={aspect} className="settings" alt="" />
                  {posts.AspectRatio}
                </li>
                <li>
                  <img src={dismen} className="settings" alt="" />
                  {posts.Diagonal}
                </li>
                <li>
                  <img src={hz} className="settings" alt="" />
                  {posts.FrameRate}
                </li>
                <li>
                  <img src={hd} className="settings" alt="" />
                  {posts.Permission}
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
export default Post;
