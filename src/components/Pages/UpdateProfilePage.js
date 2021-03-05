import React from 'react'
import SidebarPage from './SidebarPage'

function UpdateProfilePage() {

    const user = localStorage.getItem("user");
    const abc = JSON.parse(user);

    return (
        <SidebarPage>
            <div>
                <h1>update profile</h1>
                <label>id:-<span>{abc.id}</span></label><br/>
                <label>Name:-<span>{abc.name}</span></label><br/>
                <label>email:-<span>{abc.email}</span></label><br/>
                <label>Age:-<span>{abc.age}</span></label><br/>
                <label>Country:-<span>{abc.Country}</span></label><br/>
                <label>state:-<span>{abc.state}</span></label><br/>
                <label>city:-<span>{abc.city}</span></label><br/>
                <label>gender:-<span>{abc.gender}</span></label><br/>
                <label>hobby:-<span>{abc.hobby[0]}</span></label><br/>
                <label>password:-<span>{abc.password}</span></label><br/>
            </div>
        </SidebarPage>
    )
}

export default UpdateProfilePage
