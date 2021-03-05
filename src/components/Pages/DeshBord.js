import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loginApi from '../../Redux/Action/LoginAction';
import SidebarPage from './SidebarPage';
import CreateBlogPage from './CreateBlogPage';
import BlogDisplayPage from './BlogDisplayPage';

function DeshBord() {
    // const dispatch = useDispatch(loginApi)
    const state = useSelector(state => state.loginData)
    // const dispatch = useDispatch(loginApi)
    let status = true;
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const abc = JSON.parse(user);
    if (token === null) {
        status = false;
    }

    if (status === false) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <SidebarPage>
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
