import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Form.css";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="container">
      <div className="row">
        <label className="label" htmlFor={name}>
          {label}
        </label>
      </div>
      <div className="row">
        <Field className="block" id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default Input;
