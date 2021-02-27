import React, { useEffect } from 'react'
import { Card, Button, Badge } from 'antd';
import { EditOutlined, DislikeOutlined, LikeOutlined, DownloadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import blogDisplayApi from '../../Redux/Action/BlogDisplayAction';



function BlogDisplayPage() {
    const { Meta } = Card;
    const state = useSelector(state => state.BlogDisplayReducer.user)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
console.log(state,'blog page')
    useEffect   (() => {
        dispatch(blogDisplayApi(token))
    }, [])



    return (
        <div>
            {state && state.map((data, index) => {
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


                                <Badge count={1}> <Button type="primary" onClick={() => console.log("like")} shape="round" icon={<LikeOutlined />} size={"middle"} /></Badge>,
                                <Button type="primary" shape="round" icon={<DislikeOutlined />} size={"middle"} />,
                                <Button type="primary" onClick={() => console.log("comment")} shape="round" icon={<EditOutlined />} size={"middle"} />,


                            ]}
                        >
                            <Meta key={index}
                                title={data.blogTitle}
                                description={data.desc}
                            />
                        </Card>
                    </div>


                )
            })}
        </div>
    )
}

export default BlogDisplayPage
