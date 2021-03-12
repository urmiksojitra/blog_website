import React, { useState } from "react";
import { Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import createBlogApi from "../../Redux/Action/CreateBlogAction";

function CreateBlogPage() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const [blog, setBlog] = useState({});

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const abc = JSON.parse(user);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      dispatch(createBlogApi(blog));
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const changeHandler = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
      user_id: token,
      user_name: user,
    });
  };
  const handleChange = (e) => {
    let reader = new FileReader(e.target.files[0]);
    reader.onloadend = () => {
      setBlog({ ...blog, blogImgSrc: reader.result });
      //setFieldValue('blogImgSrc', reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} icon={<EditOutlined />}>
        CREATE BLOG
      </Button>
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
          <label>Blog Title:-</label>
          <br />
          <input onChange={changeHandler} name="blogTitle"></input>
          <br />
          <br />
          <label>Description:-</label>
          <br />
          <textarea onChange={changeHandler} name="desc"></textarea>
          <br />
          <br />
          <label>Photo Upload:-</label>
          <br />
          <input type="file" name="upload" onChange={handleChange}></input>
        </form>
      </Modal>
    </div>
  );
}

export default CreateBlogPage;
