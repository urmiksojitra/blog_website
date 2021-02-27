import { toast } from 'react-toastify';

import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    ADD_USER
} from "../Type/LoginType"

const initialState = {
    loginData: []

}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            toast.success("Login Success")
            console.log("success called");
            return {
                ...state,
                loading: false,
                users: action.payload, 
                error: ""
            }

        case FETCH_USERS_FAILURE:
            toast.error("invalid username ")
            console.log("reducer failer")
            return {...state,
                loading: false,
                users: [],
                error: action.payload
            }
        
        default:
            return state
    }
}