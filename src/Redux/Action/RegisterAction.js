import {
    REGISTER_USERS_FAILURE,
    REGISTER_USERS_REQUEST,
    REGISTER_USERS_SUCCESS,
    ADD_USER
} from "../Type/RegisterType"
import axios from 'axios'

export const newUsersRequest = () => {
    return {
        type: REGISTER_USERS_REQUEST
    }
}

export const newUsersSuccess = users => {
    return {
        type: REGISTER_USERS_SUCCESS,
        payload: users

    }
}
export const newUsersFailure = error => {
    return {
        type: REGISTER_USERS_FAILURE,
        payload: error

    }
}


export default function registerApi(newdata) {
    return dispatch => {
        console.log('api')
        dispatch(newUsersRequest())
        axios.post('http://localhost:3003/userData',newdata)
            .then(res => {
                var user = res.data
                // var user1 = user.find(values => values.name === data1.name && values.password === data1.password)
                // if (user1 === undefined) {
                //     throw (res.error)
                // }
                // localStorage.setItem('login', JSON.stringify(true))
                // localStorage.setItem('user', JSON.stringify(user1))
                // localStorage.setItem('token', (user1.id))
                dispatch(newUsersSuccess(user))
                // toast.success("Login Success");
                return res.data;
            }).catch(error => {
                dispatch(newUsersFailure("UserName or Password "));
                //  toast.error();("Login Succ5ess");
            })
    }
}