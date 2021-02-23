import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Footer, Header } from 'antd/lib/layout/layout';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "flex-end"
    }
    return (
        <div>
            <Layout className="layout">
                <Header style={navStyle}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key="1">
                            <NavLink exact to='/'>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink exact to='/contact'>Contact-us</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink
                                exact to="/login">
                                Get in touch
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </div>
    )
}

export default Navbar
