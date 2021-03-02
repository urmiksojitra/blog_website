import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    ADD_USER
} from "../Type/LoginType"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users

    }
}
export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error

    }
}


export default function loginApi(data1) {
    return dispatch => {
        // console.log('api')
        dispatch(fetchUsersRequest())
        axios.get('http://localhost:3003/userData')
            .then(res => {
                var user = res.data
                var user1 = user.find(values => values.name === data1.name && values.password === data1.password)
                if (user1 === undefined) {
                    throw (res.error)
                }
                localStorage.setItem('login', JSON.stringify(true))
                localStorage.setItem('user', JSON.stringify(user1))
                localStorage.setItem('token', (user1.id))
                dispatch(fetchUsersSuccess(user1))
                // toast.success("Login Success");
                return res.data;
            }).catch(error => {
                dispatch(fetchUsersFailure("UserName or Password "));
                //  toast.error();("Login Succ5ess");
            })
    }
}
