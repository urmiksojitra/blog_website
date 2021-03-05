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
        dispatch(newUsersRequest())
        axios.post('http://localhost:3003/userData',newdata)
            .then(res => {
                var user = res.data
                dispatch(newUsersSuccess(user))
                return res.data;
            }).catch(error => {
                dispatch(newUsersFailure("UserName or Password "));
            })
    }
}