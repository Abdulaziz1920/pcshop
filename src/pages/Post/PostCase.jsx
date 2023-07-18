import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../constants";
import "./post.css";
import gpucard from "../../assets/gpucard.png";
import cooler from "../../assets/cooler.png";
import casecolor from "../../assets/CaseColor.png";
import dismensions from "../../assets/dimensions.png";

const PostCase = () => {
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
                  <img src={gpucard} className="settings" alt="" />
                  {posts.MaximumGraphicsCardLength}
                </li>
                <li>
                  <img src={cooler} className="settings" alt="" />
                  {posts.MaximumCoolerHeight}
                </li>
                <li>
                  <img src={dismensions} className="settings" alt="" />
                  {posts.Dimensions}
                </li>
                <li>
                  <img src={casecolor} className="settings" alt="" />
                  {posts.CaseColor}
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
export default PostCase;
