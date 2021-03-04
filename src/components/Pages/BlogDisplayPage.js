import React, { useEffect, useState } from 'react'
import { Card, Button, Badge, Modal } from 'antd';
import { EditOutlined, DislikeOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { blogDisplayApi, deleteApi } from '../../Redux/Action/BlogDisplayAction';
import commentsApi from '../../Redux/Action/CommentsAction';

function BlogDisplayPage() {
    const token = localStorage.getItem("token")
    const { Meta } = Card;
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [comments, setComments] = useState({
        comment: '',
        blog_id: '',
        user_id: token,
    })

    const dispatch = useDispatch()

    const commitHendler = (id) => {
        setVisible(true);
        setComments({ ...comments, blog_id: id })
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setConfirmLoading(false);
            dispatch(commentsApi(comments))
            setVisible(false);
            setComments({ comment: '' })
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const user = useSelector(state => state.BlogDisplayReducer.BlogData)
    const [state, setstate] = useState()
    useEffect(() => {
        dispatch(blogDisplayApi())
    }, [])

    const deleteHandler = (id) => {
        dispatch(deleteApi(id))
    }

    const commentHandler = (e) => {
        let abc = e.target.value
        setComments({ ...comments, comment: abc })
    }

    return (
        <div>
            {user && user.length > 0 && user.map((data, index) => {
                return (
                    <div className="col-md-3 p-3" style={{ marginBottom: "15px", marginLeft: "30px" }} >
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
                                <Badge count={2}> <Button type="primary" onClick={() => console.log("like")} shape="round" icon={<LikeOutlined />} size={"middle"} /></Badge>,
                                <Button type="primary" shape="round" icon={<DislikeOutlined />} size={"middle"} />,
                                <Button type="primary" name='comment' onClick={() => commitHendler(data.id)} shape="round" icon={<EditOutlined />} size={"middle"} />,
                                <Button type="primary" onClick={() => deleteHandler(data.id)} shape="round" icon={<DeleteOutlined />} size={"middle"} />,
                            ]}>
                            <Meta key={index}
                                title={data.blogTitle}
                                description={data.desc}
                            />
                        </Card>
                        <Modal
                            style={{ width: '10px' }}
                            title="Title"
                            visible={visible}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        > <form>
                                <label>Comment:-</label><br />
                                <input onChange={(e) => commentHandler(e)} value={comments.comment} name="blogTitle"></input><br /><br />
                            </form>
                        </Modal>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogDisplayPage
