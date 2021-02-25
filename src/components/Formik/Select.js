import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import './Form.css';



function Select(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='container'>
            <div className="row">
                <label htmlFor={name}>{label}</label>
            </div>

            <div className="row">
                <Field className="block" as='select' id={name} name={name} {...rest} >
                    {
                        options.map(option => {
                            return (
                                <option key={option.value} value={option.value}>{option.key}</option>
                            )
                        })
                    }

                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>

        </div>
    )
}

export default Select