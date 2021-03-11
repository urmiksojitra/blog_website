import React, { useEffect, useState } from "react";
import { Card, Button, Badge, Carousel } from "antd";
import {
  EditOutlined,
  DislikeOutlined,
  LikeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fecthLike, likeBlogApi } from "../../Redux/Action/LikeDislikeAction";
import { allBlogdisplatApi } from "../../Redux/Action/BlogDisplayAction";

import ReactReadMoreReadLess from "react-read-more-read-less";

// import { Carousel } from 'antd';

const contentStyle = {
  height: "350px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Home() {
  const token = localStorage.getItem("token");
  const [visible, setVisible] = React.useState(false);
  const user = useSelector((state) => state.BlogDisplayReducer.BlogData);
  const [comments, setComments] = useState({
    comment: "",
    blog_id: "",
    user_id: token,
  });
  const [likes, setLike] = useState({
    user_id: "",
    blog_id: "",
    status: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allBlogdisplatApi());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fecthLike());
    }, 500);
    if (likes.status === "like" || likes.status === "dislike") {
      dispatch(likeBlogApi(likes));

      setLike({ ...likes, blog_id: "", status: "" });
    }
  }, [likes.status]);

  const statusState = useSelector(
    (state) => state.LikeDislikeReducer.likedislikedata
  );

  const { Meta } = Card;
  const commitHendler = (id) => {
    setVisible(true);
    setComments({ ...comments, blog_id: id });
  };

  const statusHandler = (id, Status) => {
    setLike({ ...likes, blog_id: id, status: Status, user_id: token });
  };

  return (
    <div>
      {/* <h1>Home</h1> */}
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://2bgpyeorlsk30bsng2euqc61-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Top-10-Social-Media-Sites-for-Business-1.jpg"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      {user &&
        user.length > 0 &&
        user.map((data, index) => {
          return (
            <div
              className="col-md-3 p-3"
              style={{ marginBottom: "15px", marginLeft: "30px" }}
            >
              <Card
                style={{ width: "300px" }}
                cover={
                  <img
                    style={{ height: "300px" }}
                    alt="example"
                    src={data.blogImgSrc}
                  />
                }
                actions={[
                  <Badge
                    count={
                      statusState
                        ? statusState.filter(
                            (point) =>
                              point.blog_id === data.id &&
                              point.status === "like"
                          ).length
                        : 0
                    }
                  >
                    <Button
                      type="primary"
                      onClick={() => statusHandler(data.id, "like")}
                      shape="round"
                      icon={<LikeOutlined />}
                      size={"middle"}
                    />
                  </Badge>,
                  <Badge
                    count={
                      statusState
                        ? statusState.filter(
                            (point) =>
                              point.blog_id === data.id &&
                              point.status === "dislike"
                          ).length
                        : 0
                    }
                  >
                    <Button
                      type="primary"
                      onClick={() => statusHandler(data.id, "dislike")}
                      shape="round"
                      icon={<DislikeOutlined />}
                      size={"middle"}
                    />
                  </Badge>,
                  <Button
                    type="primary"
                    name="comment"
                    onClick={() => commitHendler(data.id)}
                    shape="round"
                    icon={<EditOutlined />}
                    size={"middle"}
                  />,
                ]}
              >
                <Meta
                  key={index}
                  title={<div className="blog-title">{data.blogTitle}</div>}
                  // description={data.desc}
                ></Meta>
                <ReactReadMoreReadLess
                  charLimit={40}
                  readMoreText={"Read more"}
                  readLessText={"Read less"}
                  readMoreClassName="read-more-less--more"
                  readLessClassName="read-more-less--less"
                >
                  {data.desc}
                </ReactReadMoreReadLess>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
