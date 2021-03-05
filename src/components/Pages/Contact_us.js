import React from 'react'
import { Form, Input, InputNumber, Select, Tooltip, Button, Row, Col } from 'antd';
import SiteMap from './SiteMap';
import contactApi from '../../Redux/Action/ContactAction'

import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

function Contact_us() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.ContactData)

    const onFinish = (values) => {
        return (dispatch(contactApi(values)))
    };
    return (
        <div>
            <h1>Contact_us</h1>
            <Row gutter={16}>
                <Col className="gutter-row" span={3}></Col>
                <Col className="gutter-row" span={6}>

                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Mess" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="nickname"
                            label={<span> Email<Tooltip title="What do you want others to call you?"> </Tooltip> </span>}
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            <SiteMap />
        </div>
    )
}

export default Contact_us
