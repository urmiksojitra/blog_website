import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdrownOptions = [
    { key: "Select a option", value: "" },
    { key: "option1", value: "option1" },
    { key: "option2", value: "option2" },
    { key: "option3", value: "option3" },
  ];

  const radioOption = [
    { key: "option1", value: "roption1" },
    { key: "option2", value: "roption2" },
    { key: "option3", value: "roption3" },
  ];

  const checkboxOption = [
    { key: "option1", value: "coption1" },
    { key: "option2", value: "coption2" },
    { key: "option3", value: "coption3" },
  ];
  const initailValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Requird"),
    description: Yup.string().required("Requird"),
    selectOption: Yup.string().required("Requird"),
    radioOption: Yup.string().required("Requird"),
    checkboxOption: Yup.array().required("Requird"),
    birthDate: Yup.date().required("Requird").nullable(),
  });

  const onSubmit = (values) => {
    console.log("formik data", values);
  };
  return (
    <Formik
      initialValues={initailValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            label="Email:-"
            name="email"
            placeholder="Enter a email..."
          />
          <br />
          <FormikControl
            control="textarea"
            label="Description:-"
            name="descripton"
            placeholder="Enter a description..."
          />
          <FormikControl
            control="select"
            label="Select a topic:-"
            name="selectOption"
            options={dropdrownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio topic:-"
            name="radioOption"
            options={radioOption}
          />
          <FormikControl
            control="checkbox"
            label="checkbox topic:-"
            name="checkboxOption"
            options={checkboxOption}
          />
          <FormikControl
            control="date"
            label="Pick a date:-"
            name="birthDate"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
