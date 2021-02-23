import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const layout = {
    labelCol: { span: 8, },
    wrapperCol: { span: 16, },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16, },
};

function ForgetPassword() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <h1>Reset password</h1>
            <Row gutter={16}>
                <Col className="gutter-row" span={8}></Col>
                <Col className="gutter-row" span={6}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', },]}><Input /> </Form.Item>

                        <Form.Item label="New Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]}><Input.Password /></Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item {...tailLayout}> <Link to="login"><Button type="primary" htmlType="submit"> Submit </Button></Link></Form.Item>
                    </Form>
                </Col>
            </Row>


        </div>
    )
}

export default ForgetPassword
