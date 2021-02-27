import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loginApi from '../../Redux/Action/LoginAction';
import SidebarPage from './SidebarPage';
// import { Modal, Button } from 'antd';

// import UploadBlogImg from './UploadBlogImg';
// import createBlogApi from '../../Redux/Action/CreateBlogAction';
import CreateBlogPage from './CreateBlogPage';
import BlogDisplayPage from './BlogDisplayPage';

function DeshBord() {




    const state = useSelector(state => state.loginData)
    const dispatch = useDispatch(loginApi)




    // useEffect(() => {
    //     dispatch(console.log("Called"))
    // }, [])


    let status = true;
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const abc = JSON.parse(user);
    // console.log(user);
    // console.log(abc);
    // console.log(user.name);
    if (token === null) {
        console.log(status, "status");
        status = false;
    }

    if (status === false) {
        console.log(status, "status");
        return <Redirect to="/" />;
    }

    return (
        <div>
            <SidebarPage>
                {console.log('Hello')}
                <div align="center">
                    <h1>Welcome {abc.name}</h1>
                </div>
                <CreateBlogPage />
                <br />
                <hr/>
                <BlogDisplayPage />
            </SidebarPage>
        </div>
    )
}

export default DeshBord
