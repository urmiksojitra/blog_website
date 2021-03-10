import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControler from "./FormikControler";
import Navbar from "../../layout/navbar";

function formikContainer() {
  const options = [
    { key: "B.COM", value: "B.COM" },
    { key: "BCA", value: "BCA" },
    { key: "B.B.A", value: "B.B.A" },
  ];
  const dropdownOptions = [
    { key: " option 1", value: "option1" },
    { key: " option 2", value: "option2" },
    { key: " option 3", value: "option3" },
  ];
  const dropdownOptionsState = [
    { key: " option 11", value: "option11" },
    { key: " option 22", value: "option22" },
    { key: " option 33", value: "option33" },
  ];
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNo: "",
    address: "",
    // skill: '',
    pinCode: "",
    course: "",
    city: "",
    country: "",
    state: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please input your name!"),
    phoneNo: Yup.string().required(
      "Mobile Number is must be 10 characters required"
    ),
    pinCode: Yup.number()
      .typeError("Only Number Allowed")
      .required("PinCode required *"),
    email: Yup.string()
      .email("invalid email formate")
      .required("Please input your email!")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    course: Yup.string().required("Course required *"),
    country: Yup.string().required("country required *"),
    state: Yup.string().required("state required *"),
    address: Yup.string().required("Address required *"),
    city: Yup.string().required("city required *"),
    // skill: Yup.string().required('Required'),
  });
  const onSubmit = (values) => {
    return console.log("formikd data", values);
  };
  return (
    <>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(_formik) => (
          <Form style={{ textAlign: "center" }}>
            <FormikControler control="input" label="Name" name="name" />
            <FormikControler
              control="input"
              label="Gmail"
              name="email"
              type="email"
            />
            <FormikControler
              control="input"
              label="password"
              name="password"
              type="password"
            />
            <FormikControler
              control="input"
              label="confirmPassword"
              name="confirmPassword"
              type="password"
            />
            <FormikControler
              control="input"
              label="phoneNo"
              name="phoneNo"
              type="number"
            />
            <FormikControler
              control="input"
              label="pinCode"
              name="pinCode"
              type="number"
            />
            <FormikControler
              control="textarea"
              label="address"
              name="address"
              type="textarea"
            />
            <FormikControler
              control="select"
              label="select a country"
              name="country"
              options={dropdownOptions}
            />
            <FormikControler
              control="select"
              label="select a state"
              name="state"
              options={dropdownOptionsState}
            />
            <FormikControler
              control="input"
              label="select a city"
              name="city"
            />
            <FormikControler
              control="radio"
              label="course:-"
              name="course"
              options={options}
            />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default formikContainer;
