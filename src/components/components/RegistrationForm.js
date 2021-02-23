import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


import { UserOutlined } from '@ant-design/icons';
function RegistrationForm() {
    // const options = [
    //     { key: 'Male', value: 'emailmoc' },
    //     { key: 'Female', value: 'telephonemoc' }
    // ]


    const options = [
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
            .typeError("Only Number Allowed")
            .required('Mobile Number is must be 10 characters required'),
        pinCode: Yup.number()
            .typeError("Only Number Allowed")
            .max(6, 'pincode must be 6 characters')
            .required("PinCode required *"),
        email: Yup.string().email('invalid email formate')
            .required('Please input your email!')
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
        skill: Yup.string().required("skill required *"),
    })
    const onSubmit = values => { console.log('formikd data', values) }
    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form className="formtag">
                            <FormikControl control="input" label="Name:-" prefix={<UserOutlined />} name="name" />
                            <FormikControl control="input" label="Gmail:-" name="email" type="email" />
                            <FormikControl control="input" label="password:-" name="password" type="password" />
                            <FormikControl control="input" label="confirmPassword:-" name="confirmPassword" type="password" />
                            <FormikControl control="input" label="phoneNo:-" name="phoneNo" type="number" />
                            <FormikControl control="input" label="pinCode:-" name="pinCode" type="number" />
                            <FormikControl control="textarea" label="address:-" name="address" type="textarea" />
                            <FormikControl control='select' label='select a country:-' name="country" options={dropdownOptions} />
                            <FormikControl control='select' label='select a state:-' name="state" options={dropdownOptionsState} />
                            <FormikControl control='input' label='select a city:-' name="city" />
                            <FormikControl control='radio' label='course:-' name='course' options={options} />
                            <FormikControl control="checkbox" label="Skill:-" name="skill" options={checkboxOptions} />
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default RegistrationForm
