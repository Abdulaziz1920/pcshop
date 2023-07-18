import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../constants";
import cpu from "../../assets/cpu.png";
import gpu from "../../assets/gpu.png";
import ram from "../../assets/ram.png";
import screen from "../../assets/screen.png";
import ssd from "../../assets/ssd.png";
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
                  <img src={cpu} className="settings" alt="" />
                  {posts.CPU}
                </li>
                <li>
                  <img src={gpu} className="settings" alt="" />
                  {posts.GPU}
                </li>
                <li>
                  <img src={ram} className="settings" alt="" />
                  {posts.RAM}
                </li>
                <li>
                  <img src={ssd} className="settings" alt="" />
                  {posts.SSD}
                </li>
                <li>
                  <img src={screen} className="settings" alt="" />
                  {posts.Screen}
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
