import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="container">
      <div className="row">
        <label>{label}</label>
      </div>
      <div className="row">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  ></input>
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}

export default RadioButtons;
