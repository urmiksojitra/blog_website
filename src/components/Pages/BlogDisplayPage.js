import React, { useEffect, useState } from "react";
import { Card, Button, Badge, Modal } from "antd";
import {
  EditOutlined,
  DislikeOutlined,
  LikeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  blogDisplayApi,
  deleteApi,
} from "../../Redux/Action/BlogDisplayAction";
import commentsApi from "../../Redux/Action/CommentsAction";
import { fecthLike, likeBlogApi } from "../../Redux/Action/LikeDislikeAction";

function BlogDisplayPage() {
  const token = localStorage.getItem("token");
  const { Meta } = Card;
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
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
  const user = useSelector((state) => state.BlogDisplayReducer.BlogData);
  const statusState = useSelector(
    (state) => state.LikeDislikeReducer.likedislikedata
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogDisplayApi());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fecthLike());
    }, 100);

    if (likes.status === "like" || likes.status === "dislike") {
      dispatch(likeBlogApi(likes));
      setLike({ ...likes, blog_id: "", status: "" });
    }
  }, [likes.status]);

  const commitHendler = (id) => {
    setVisible(true);
    setComments({ ...comments, blog_id: id });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      dispatch(commentsApi(comments));
      setVisible(false);
      setComments({ comment: "" });
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteHandler = (id) => {
    dispatch(deleteApi(id));
  };

  const commentHandler = (e) => {
    let abc = e.target.value;
    setComments({ ...comments, comment: abc });
  };

  const statusHandler = (id, Status) => {
    setLike({ ...likes, blog_id: id, status: Status, user_id: token });
  };

  return (
    <div>
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
                  <Button
                    type="primary"
                    onClick={() => deleteHandler(data.id)}
                    shape="round"
                    icon={<DeleteOutlined />}
                    size={"middle"}
                  />,
                ]}
              >
                <Meta
                  key={index}
                  title={data.blogTitle}
                  description={data.desc}
                />
              </Card>
              <Modal
                style={{ width: "10px" }}
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {" "}
                <form>
                  <label>Comment:-</label>
                  <br />
                  <input
                    onChange={(e) => commentHandler(e)}
                    value={comments.comment}
                    name="blogTitle"
                  ></input>
                  <br />
                  <br />
                </form>
              </Modal>
            </div>
          );
        })}
    </div>
  );
}

export default BlogDisplayPage;
