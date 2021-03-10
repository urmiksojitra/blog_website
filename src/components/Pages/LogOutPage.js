import React from "react";
import { Redirect } from "react-router-dom";

function LogOutPage() {
  let status = true;
  const token = localStorage.getItem("token");
  if (token === null) {
    status = false;
  }

  if (status === false) {
    return <Redirect to="/login" />;
  }
  return <div>{alert("are you sure logOut")}</div>;
}

export default LogOutPage;
