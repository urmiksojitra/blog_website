import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


import { UserOutlined } from '@ant-design/icons';
import registerApi from '../../Redux/Action/RegisterAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
function RegistrationForm() {
    
    const dispatch = useDispatch()
    const state = useSelector(state => state.RegisterData)

    const options = [
        { key: 'B.COM', value: 'B.COM' },
        { key: 'B.COM', value: 'B.COM' },
        { key: 'BCA', value: 'BCA' },
        { key: 'B.B.A', value: 'B.B.A' }
    ]
    const dropdownOptions = [
        { key: ' India', value: 'India' },
        { key: ' America', value: 'America' },
        { key: ' Canada', value: 'Canada' },
    ]
    const checkboxOptions = [
        { key: "HTML", value: "html" },
        { key: "CSS", value: "css" },
        { key: "Javascript", value: "javascript" },
    ];
    const dropdownOptionsState = [
        { key: ' Gujarat', value: 'option11' },
        { key: ' LosAngel', value: 'LosAngel' },
        { key: ' PrinsAlbert', value: 'PrinsAlbert' },
    ]
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: '',
        address: '',
        skill: [],
        pinCode: '',
        course: '',
        city: '',
        country: '',
        state: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().min(2, 'Minmum 3 char').max(10, 'very longer,please maximum 10 char').required("Please input your name!"),
        phoneNo: Yup.string()
            .typeError("Only Number Allowed").max(10,'Mobile Number is must be 10 characters')
            .required('Mobile Number is required'),
        pinCode: Yup.string()
            // .typeError("Only Number Allowed")
            .min(6, 'pincode must be 6 characters')
            .max(6, 'pincode must be 6 characters')
            .required("PinCode required *"),
        email: Yup.string().email('invalid email formate').required('Please input your email!')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(8, 'maximum 8 char required')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        course: Yup.string().required("Course required *"),
        country: Yup.string().required("country required *"),
        state: Yup.string().required("state required *"),
        address: Yup.string().min(8, 'minmum 8 char requird').max(20, "20 Char required").required("Address required *"),
        city: Yup.string().required("city required *"),
        skill: Yup.array().required("skill required *"),
    })
    const onSubmit = values => {
        return (dispatch(registerApi(values)))
    }
    let st = true;
    const token = localStorage.getItem("token");
    if (token !== null) {
        st = false;
    }

    if (st === false) {
        return <Redirect to="/deshbord" />;
    }
    return (
        <div>
            <h1>Registation Form</h1>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <Form className="formtag">
                                <FormikControl control="input" label="*Name:-" prefix={<UserOutlined />} name="name" />
                                <FormikControl control="input" label="*Gmail:-" name="email" type="email" />
                                <FormikControl control="input" label="*Password:-" name="password" type="password" />
                                <FormikControl control="input" label="*ConfirmPassword:-" name="confirmPassword" type="password" />
                                <FormikControl control="input" label="*PhoneNo:-" name="phoneNo" type="number" />
                                <FormikControl control="input" label="*PinCode:-" name="pinCode" type="number" />
                                <FormikControl control="textarea" label="*Address:-" name="address" type="textarea" />
                                <FormikControl control='select' label='*Select a country:-' name="country" options={dropdownOptions} />
                                <FormikControl control='select' label='*Select a state:-' name="state" options={dropdownOptionsState} />
                                <FormikControl control='input' label='*Select a city:-' name="city" />
                                <FormikControl control='radio' label='*Course:-' name='course' options={options} />
                                <FormikControl control="checkbox" label="*Skill:-" name="skill" options={checkboxOptions} />
                                <button type='submit'>Submit</button><useToastContainer autoClose={1500} />
                                {/* <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button> */}
                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}

export default RegistrationForm
