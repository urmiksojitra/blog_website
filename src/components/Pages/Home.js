import React from 'react'

import { Carousel } from 'antd';

const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                    <img style={{ width:"100%", height:"100%" }} src='https://2bgpyeorlsk30bsng2euqc61-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Top-10-Social-Media-Sites-for-Business-1.jpg' />
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
        </div>
    )
}

export default Home
