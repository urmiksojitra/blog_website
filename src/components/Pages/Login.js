import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginApi from '../../Redux/Action/LoginAction';


function Login() {
    const [form] = Form.useForm();


    const state = useSelector(state => state.loginData)
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: "",
        password: "",
        status: false,
    });

    // const notify = () => toast.success("Login Success");


    const onFinish = (data) => {
        dispatch(loginApi(data))
        // console.log(data);

        setTimeout(() => {
            loginStatus()
        }, 2000);
    };


    const loginStatus = () => {
        const ticket = localStorage.getItem("login")
        // console.log(ticket);
        if (ticket) {
            setData({
                ...data, status: true,
            })
            // console.log("logi status", data)
        }
    }

  /*   const onReset = () => {
        form.resetFdields();
    }; */
    // console.log(data)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    let st = true;
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token !== null) {
        // console.log(st, "status");
        st = false;
    }

    if (st === false) {
        // console.log(st, "status");
        return <Redirect to="/deshbord" />;
    }

    if (data.status) {
        return <Redirect to="/deshbord" />
    }
    return (
        <div>
            <h1>Login</h1>
            <Row gutter={16}>
                <Col className="gutter-row" span={9}></Col>
                <Col className="gutter-row" span={6}>
                    <Form
                        form={form}
                        name="normal_login"
                        className="login-form"
                        // initialValues={{ remember: true }}
                        onFinish={() => {
                            onFinish(data)
                        }}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                            <Input onChange={handleChange} name='name' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input onChange={handleChange} name='password' prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            {/* <Form.Item name="remember" valuePropName="checked" noStyle><Checkbox>Remember me</Checkbox></Form.Item> */}
                            <Link to='forgetpassword'><a className="login-form-forgot" href="">Forgot password</a></Link> 
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button><ToastContainer autoClose={1500} />
                             Or <Link to='registrationForm' ><a href="">register now!</a></Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div >
    )
}

export default Login
