import { toast } from 'react-toastify';

import {
    CONTACT_USERS_FAILURE,
    CONTACT_USERS_REQUEST,
    CONTACT_USERS_SUCCESS,
    ADD_USER
} from "../Type/ContactType"

const initialState = {
    ContactData: []

}

export const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CONTACT_USERS_SUCCESS:
            toast.success("Login Success")
            console.log("success called");
            return {
                ...state,
                loading: false,
                user: action.payload, 
                error: ""
            }

        case CONTACT_USERS_FAILURE:
            return {...state,
                loading: false,
                user: [],
                error: action.payload
            }
        
        default:
            return state
    }
}