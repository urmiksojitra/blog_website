import { toast } from 'react-toastify';

import {
    DISPLAY_BLOG_USERS_FAILURE,
    DISPLAY_BLOG_USERS_REQUEST,
    DISPLAY_BLOG_USERS_SUCCESS,
    ADD_USER
} from "../Type/BlogDisplayType"

const blogState = {
    BlogData: []

}

export const BlogDisplayReducer = (state = blogState, action) => {
    switch (action.type) {
        case DISPLAY_BLOG_USERS_REQUEST:
            return {
                ...state,
                loading: true    
            }

        case DISPLAY_BLOG_USERS_SUCCESS:
            // console.log("success called");
            // console.log(action.payload);
            return {
                ...state,
                loading: false,
                BlogData: action.payload, 
                error: ""
            }

        case DISPLAY_BLOG_USERS_FAILURE:
            return {...state,
                loading: false,
                BlogData: [],
                error: action.payload
            }
        
        default:
            return state
    }
}