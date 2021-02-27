import { toast } from 'react-toastify';

import {
    DISPLAY_BLOG_USERS_FAILURE,
    DISPLAY_BLOG_USERS_REQUEST,
    DISPLAY_BLOG_USERS_SUCCESS,
    ADD_USER
} from "../Type/BlogDisplayType"

const initialState = {
    BlogDisplayData: []

}

export const BlogDisplayReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_BLOG_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DISPLAY_BLOG_USERS_SUCCESS:
            toast.success("Login Success")
            console.log("success called");
            return {
                ...state,
                loading: false,
                user: action.payload, 
                error: ""
            }

        case DISPLAY_BLOG_USERS_FAILURE:
            return {...state,
                loading: false,
                user: [],
                error: action.payload
            }
        
        default:
            return state
    }
}