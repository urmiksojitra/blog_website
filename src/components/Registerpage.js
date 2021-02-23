import React from 'react'
// import { useFormik } from 'formik'
import { Formik, Form, Field, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
// import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    commit: '',
    address: '',

    //nested object
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values) => {
    console.log('Formik data', values);
}
const validationSchema = Yup.object({
    name: Yup.string().required('Requird!'),
    email: Yup.string().email('Invalid email formate!').required('Requird!'),
    channel: Yup.string().required("Requird!"),
    commit: Yup.string().required('Reqird!')
})

const validationComments = (value) => {
    let error
    if (!value) {
        error = 'Requird'
    }
    return error
}

function Registerpage() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>

                            <label htmlFor='name'>Name:</label>
                            <Field type='text' id='name' name='name' placeholder='Enter a Name..' /><br /><br />
                            {/* <ErrorMessage name='name' component={TextError} /><br /> */}

                            <label htmlFor='email'>mail:</label>
                            <Field type='email' id='email' name='email' placeholder='Enter a email..' /><br /><br />
                            {/* <ErrorMessage name='email' component={TextError} /><br /> */}
                            {/* <ErrorMessage name='email' component={TextError} >
                                {
                                    errorMsg => <div className='error'>{errorMsg}</div>
                                }
                            </ErrorMessage><br /> */}

                            <label htmlFor='channel'>channel:</label>
                            <Field type='text' id='channel' name='channel' placeholder='Enter a Channel...' /><br /><br />
                            {/* <ErrorMessage name='channel' component={TextError} /><br /> */}


                            <label htmlFor='commit'>Commit:</label>
                            <Field as='textarea' type='textarea' id='Commit' name='Commit' placeholder='Enter a Commit...' validate={validationComments} /><br /><br />
                            {/* <ErrorMessage name='Commit' component={TextError} /><br /> */}


                            <label htmlFor='address'>Adress:</label>
                            <FastField name='address' placeholder='Enter a address...'>
                                {
                                    (props) => {
                                        const { filed, form, meta } = props
                                        console.log("address props", props)
                                        return (
                                            <div>
                                                <input type='text' id='address'{...filed}></input>
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }
                                }
                            </FastField><br /><br />
                            {/* <ErrorMessage name='address' component={TextError} /><br /> */}


                            <label htmlFor='facebook'>Facebook profile</label>
                            <Field type='text' id='facebook' name='social.facebook'></Field><br />


                            <label htmlFor='twitter'>Twitter profile</label>
                            <Field type='text' id='twitter' name='social.twitter'></Field><br />


                            {/* ------------------------Nested Object -------------------*/}
                            <label htmlFor='primaryph'>Primary Phone Number</label>
                            <Field type='text' id='primaryph' name='phoneNumbers[0]'></Field><br />

                            <label htmlFor='secondaryph'>Secondary Phone Number</label>
                            <Field type='text' id='secondaryph' name='phoneNumbers[1]'></Field><br />



                            {/*-------------------------- Field Array ------------------*/}
                            <label htmlFor='secondaryph'>List of Phone Number</label>
                            <FieldArray name='phNumbers'>
                                {
                                    (fieldArrayProps) => {
                                        console.log('fieldArrayProps', fieldArrayProps)
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values

                                        return <div>
                                            {
                                                phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`}></Field>
                                                        {
                                                            index > 0 &&
                                                            <button type='button' onClick={() => remove(index)}>-</button>
                                                        }
                                                        <button type='button' onClick={() => push('')}>+</button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                }
                            </FieldArray>

                            <button type='submit' >Submit</button>
                            {/* <button type='submit' onClick={() => { formik.validateField('comments') }}>Validate Comments</button> */}
                            {/* <button type='submit' onClick={() => { formik.validateForm('comments') }}>Validate All</button> */}
                        </Form>
                    )
                }
            }


        </Formik>
    )
}

export default Registerpage