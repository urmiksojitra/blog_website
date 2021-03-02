import { toast } from 'react-toastify';

import {
    CREATEBLOG_USERS_FAILURE,
    CREATEBLOG_USERS_REQUEST,
    CREATEBLOG_USERS_SUCCESS,
    ADD_USER
} from "../Type/CreateBlogType"

const initialState = {
    CreateBlogData: []

}

export const CreateBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEBLOG_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATEBLOG_USERS_SUCCESS:
            // console.log("success called");
            return {
                ...state,
                loading: false,
                CreateBlogData: action.payload, 
                error: ""
            }

        case CREATEBLOG_USERS_FAILURE:
            return {...state,
                loading: false,
                CreateBlogData: [],
                error: action.payload
            }
        
        default:
            return state
    }
}