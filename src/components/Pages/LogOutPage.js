import React from 'react'
import { Redirect } from 'react-router-dom';

function LogOutPage() {
    let status = true;
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token === null) {
        // console.log(status, "status");
        status = false;
    }

    if (status === false) {
        // console.log(status, "status");
        return <Redirect to="/login" />;
    }
    return (
        <div>
            {
                alert("are you sure logOut")
            }
        </div>
    )
}

export default LogOutPage
