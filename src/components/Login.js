import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


function Login() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const onReset = () => {
        form.resetFields();
    };
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
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle><Checkbox>Remember me</Checkbox></Form.Item>
                            <Link to='forgetpassword'><a className="login-form-forgot" href="">Forgot password</a></Link>
                        </Form.Item>
                        <Form.Item>
                            <Link to='userloginpage'> <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button></Link>
                             Or <Link to='registrationForm' ><a href="">register now!</a></Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div >
    )
}

export default Login
