import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


function LoginForm() {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Formate').required('Requird!'),
        password: Yup.string().required('Requird!')
    })

    const onSubmit = values => { console.log('Formik data', values) }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        ></FormikControl>

                        <FormikControl
                            control='input'
                            type='password'
                            label='password'
                            name='password'
                        ></FormikControl>

                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }

        </Formik>
    )
}

export default LoginForm
