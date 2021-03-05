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
            return {
                ...state,
                loading: false,
                RegisterData: action.payload, 
                error: ""
            }

        case REGISTER_USERS_FAILURE:
            return {...state,
                loading: false,
                RegisterData: [],
                error: action.payload
            }
        
        default:
            return state
    }
}