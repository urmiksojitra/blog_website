import React, { useState } from 'react'
import { Card, Button, Badge, Carousel } from 'antd';
import { EditOutlined, DislikeOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';


// import { Carousel } from 'antd';

const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Home() {
    const token = localStorage.getItem("token")
    const [visible, setVisible] = React.useState(false);
    const user = useSelector(state => state.BlogDisplayReducer.BlogData)
    const [comments, setComments] = useState({
        comment: '',
        blog_id: '',
        user_id: token,
    })

    const { Meta } = Card;
    const commitHendler = (id) => {
        setVisible(true);
        setComments({ ...comments, blog_id: id })
    };

    return (
        <div>
            {/* <h1>Home</h1> */}
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img style={{ width: "100%", height: "100%" }} src='https://2bgpyeorlsk30bsng2euqc61-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Top-10-Social-Media-Sites-for-Business-1.jpg' />
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
                                <Button type="primary" shape="round" icon={<DeleteOutlined />} size={"middle"} />,
                            ]}>
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

export default Home
