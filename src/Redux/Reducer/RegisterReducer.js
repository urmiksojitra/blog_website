import { toast } from 'react-toastify';

import {
    REGISTER_USERS_FAILURE,
    REGISTER_USERS_REQUEST,
    REGISTER_USERS_SUCCESS,
    ADD_USER
} from "../Type/RegisterType"

const initialState = {
    RegisterData: []

}

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case REGISTER_USERS_SUCCESS:
            toast.success("Login Success")
            console.log("success called");
            return {
                ...state,
                loading: false,
                user: action.payload, 
                error: ""
            }

        case REGISTER_USERS_FAILURE:
            return {...state,
                loading: false,
                user: [],
                error: action.payload
            }
        
        default:
            return state
    }
}