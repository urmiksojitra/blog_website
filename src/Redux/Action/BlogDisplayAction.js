import {
    DISPLAY_BLOG_USERS_FAILURE,
    DISPLAY_BLOG_USERS_REQUEST,
    DISPLAY_BLOG_USERS_SUCCESS,
    ADD_USER
} from "../Type/BlogDisplayType"
import axios from 'axios'

export const blogDisplayUsersRequest = () => {
    return {
        type: DISPLAY_BLOG_USERS_REQUEST
    }
}

export const blogDisplayUsersSuccess = users => {
    return {
        type: DISPLAY_BLOG_USERS_SUCCESS,
        payload: users

    }
}
export const blogDisplayUsersFailure = error => {
    return {
        type: DISPLAY_BLOG_USERS_FAILURE,
        payload: error

    }
}


export function blogDisplayApi() {
    // console.log(blogDataDisplay)
    return dispatch => {
        // console.log('api')
        dispatch(blogDisplayUsersRequest())
        axios.get('http://localhost:3003/blogData')
            .then(res => {
                var user = res.data
                dispatch(blogDisplayUsersSuccess(user))
                return res.data;
            }).catch(error => {
                dispatch(blogDisplayUsersFailure("error "));
            })
    }
}

export function deleteApi(data) {
    return dispatch => {
        dispatch(blogDisplayUsersRequest())
        axios.delete(`http://localhost:3003/blogData/${data}`)
            .then(res => {
                dispatch(blogDisplayApi())
                return res.data;
            }).catch(error => {
                dispatch(blogDisplayUsersFailure("error "));
            })
    }
}

export function commitApi() {
}
