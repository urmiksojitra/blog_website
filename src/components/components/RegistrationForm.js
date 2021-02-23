import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
function RegistrationForm() {
    const options = [
        { key: 'Male', value: 'emailmoc' },
        { key: 'Female', value: 'telephonemoc' }
    ]
    const initialValues = {
        name: '',
        address: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Requird'),
        gender: Yup.string().required('Requird'),
        address: Yup.string().required('Requird'),

        email: Yup.string().email('invalid email formate').required('Requird'),
        password: Yup.string().required('Requird'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'password not match').required('Requird'),
        gender: Yup.string().required('Requird'),
        phone: Yup.string().required('reqired')
        
    })
    const onSubmit = values => { console.log('formikd data', values) }
    return (
        
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl control='input' name='name' label='Name:-' />
                            <FormikControl control='input' type='email' label='Email:-' name='email' />
                            <FormikControl control='textarea' label='Address:-' name='address' />
                            <FormikControl control='input' type='password' label='Password:-' name='password' />
                            <FormikControl control='input' type='password' label='Confirm Password:-' name='confirmPassword' />
                            <FormikControl control='radio' label='Gender:-' name='gender' options={options} />
                            <FormikControl control='input' type='text' label='Phone number:-' name='phone' />

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            }

        </Formik>
    )
}

export default RegistrationForm
