const validateSkills = (values) => {
  let error;
  if (values.length === 0) {
    error = "Required!";
  }
  return error;
};
const validateCountry = (values) => {
  let error;
  if (values === "") {
    error = "Required!";
  } else {
    dispatch(getAllstate(values));
  }
  return error;
};
const validateState = (values) => {
  let error;
  if (values === "") {
    error = "Required!";
  }
  return error;
};
const phoneValidate = (phone) => {
  isNaN(phone);
  let error;
  if (isEmpty(phone)) {
    error = "phoneNo required!";
  } else if (phone.length !== 10) {
    error = "phoneNo length must be 10";
  }
  if (isNaN(phone) === true) {
    error = "Only Number Allowed";
  }
  return error;
};
const pinValidate = (pin) => {
  isNaN(pin);
  let error;
  if (isEmpty(pin)) {
    error = "pinNo required!";
  } else if (pin.length !== 6) {
    error = "pinNo length must be 6";
  }
  if (isNaN(pin) === true) {
    error = "Only Number Allowed";
  }
  return error;
};
